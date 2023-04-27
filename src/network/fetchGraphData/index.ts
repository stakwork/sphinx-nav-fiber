import { AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL, isDevelopment } from '~/constants'
import { api } from '~/network/api'
import {
  FetchDataResponse,
  FetchSentimentResponse,
  GraphData,
  Guests,
  Link,
  Node,
  NodeExtended,
  nodeTypes
} from '~/types'
import { getLSat } from '~/utils/getLSat'
import { Vector3 } from "three";
import * as Noise from '~/utils/noise';
import { mock } from '~/mocks/getMockGraphData/mockResponse.js';
import { generateForceGraphPositions } from '../../transformers/forceGraph'
import { generateTypeGraphPositions } from '../../transformers/typeGraph'

type guestMapChild = {
  children: string[]
  imageUrl: string
  name: string
  twitterHandle: string
}

const defaultData: GraphData = {
  links: [],
  nodes: [],
}

type TopicMapItem = {
  children: string[];
  position: Vector3
}

type TopicMap = Record<string, TopicMapItem>

const shouldIncludeTopics = true

export const fetchGraphData = async (search: string) => {
  try {
    return getGraphData(search)
  } catch (e) {
    return defaultData
  }
}

const fetchNodes = async (search: string, returnFake: boolean) => {
  if (isDevelopment) {

    if (returnFake) {
      return mock as FetchDataResponse
    }

    const response = await api.get<FetchDataResponse>(`/searching?word=${search}&free=true`)
    return response
  }

  const lsatToken = await getLSat('searching')

  if (!lsatToken) {
    throw new Error('An error occured calling getLSat')
  }

  return api.get<FetchDataResponse>(`/search?word=${search}`, {
    Authorization: lsatToken,
  })
}

export const getSentimentData = async () => {
  const response = await api.get<FetchSentimentResponse>(`/sentiments`)

  return response
}

export const getAdminId = async (tribeId: string) => {
  const response = await fetch(`https://tribes.sphinx.chat/tribes/${tribeId}`)

  const jsonData = await response.json()

  return jsonData
}

function generateTopicNodesFromMap(topicMap: TopicMap, doNodeCallback: (node: NodeExtended) => void) {

  Object.entries(topicMap).forEach(([topic, content], index) => {

    const { children, position } = content
    const { x, y, z } = position
    /** we dont create topic node for search term,
      *  otherwise everything will be linked to it
      */

    const scale = children.length * 2
    const topicNodeId = `topic_node_${index}`

    const topicNode: NodeExtended = {
      x,
      y,
      z,
      children,
      colors: ['#000'],
      id: topicNodeId,
      label: topic,
      name: topic,
      node_type: 'topic',
      ref_id: topicNodeId,
      scale,
      show_title: topic,
      text: topic,
      weight: 0,
    }
    doNodeCallback(topicNode)
  })
}

function generateGuestNodesFromMap(guestMap: Record<string, guestMapChild>,
                            allData: NodeExtended[],
                            mappedNodes: NodeExtended[],
                            doNodeCallback: (node: NodeExtended) => void) {
  
  Object.entries(guestMap).forEach(([guest, guestValue], index) => {
    const guestChildren = guestValue.children
    const scale = guestChildren.length * 2
    const guestNodeId = guest || `guestnode_${index}`
    
    const guestNode: NodeExtended = {
      ...guestValue,
      x: 0,
      y: 0,
      z: 0,
      colors: ['#000'],
      id: guestNodeId,
      image_url: guestValue.imageUrl,
      label: guestValue.name,
      name: guestValue.name,
      node_type: 'guest',
      ref_id: guestNodeId,
      scale,
      show_title: guestValue.name,
      text: guestValue.twitterHandle,
      type: 'guest',
      weight: 0,
    }

    doNodeCallback(guestNode)
  })
}

const getGraphData = async (searchterm: string) => {
  // recharacterize noise
  Noise.seed(Math.random());

  const returnFakeData = true

  let nodes: NodeExtended[] = []
  let links: Link[] = []

  const topicMap: TopicMap = {}
  const guestMap: Record<string, guestMapChild> = {}

  try {
    const dataInit = await fetchNodes(searchterm, returnFakeData)

    const dataSeries = dataInit.data_series
      ? [
          {
            ...dataInit.data_series,
            x: 0,
            y: 0,
            z:0,
            boost: null,
            image_url: 'node_data.webp',
            label: dataInit.data_series.title,
            name: 'Name',
            node_type: 'data_series',
            ref_id: '',
            type: 'data_series',
            weight: 2,
          } as Node,
        ]
      : []

    const data: Node[] = [...dataInit.exact, ...dataInit.related, ...dataSeries]

    if (data.length) {
      // do all node processing from top down
      const dataProcessingTemplate = [
        {
          type: 'show',
          hide: false
        },
        {
          type: 'episode',
          postProcessing: (node: NodeExtended) => {
            const { guests } = node
            if (node.ref_id) {
              (guests || []).forEach((guest) => {
                const currentGuest = guest as Guests

                if (currentGuest.name && currentGuest.ref_id && node.ref_id) {
                  guestMap[currentGuest.ref_id] = {
                    children: [...(guestMap[currentGuest.ref_id]?.children || []), node.ref_id],
                    imageUrl: currentGuest.profile_picture || '',
                    name: currentGuest.name,
                    twitterHandle: currentGuest.twitter_handle,
                  }
                }
              })
            }
          }
        },
        {
          type: 'clip',
        },
        {
          type: 'guest',
        },
        {
          type: 'tweet',
        },
        {
          type: 'data_series',
          data: []
        },
      ]

      dataProcessingTemplate.forEach(template => {
        if (template.hide) {
          return
        }

        const thisData = data.filter(f => f.node_type === template.type)
        
        thisData.forEach((node) => {

          // replace aws bucket url with cloudfront, and add size indicator to end
          const smallImageUrl = node.image_url
            ?.replace(AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL)
            .replace('.jpg', '_s.jpg')
          
          // const nodePosition1 = generateNodePosition(node, data, topicMap, nodes)

          nodes.push({
            ...node,
            id: node.ref_id || node.tweet_id,
            image_url: smallImageUrl,
            type: node.type || node.node_type,
          })

          // do post processing for type
          if (template.postProcessing) {
            template.postProcessing(node)
          }
        })
      })
      
      generateGuestNodesFromMap(
        guestMap,
        data,
        nodes,
        (n: NodeExtended) => {
          nodes.push(n)
        }
      )
    }

    // extract topics to topic map
    data.forEach((node) => {
      const { topics, ref_id: refId, show_title: showTitle } = node
      if (topics) {
        topics.forEach((topic) => {
          if (showTitle) {
            if (topicMap[topic] && !topicMap[topic].children.includes(refId || showTitle)) {
                topicMap[topic].children.push(refId||showTitle)  
            }
            else {
              topicMap[topic] = {
                position: new Vector3(0,0,0),
                children: [refId || showTitle]
              }
            }  
          }
        })
      }
    })
  
    // generate nodes
    if (shouldIncludeTopics){
      generateTopicNodesFromMap(
        topicMap,
        (n: NodeExtended) => {
          nodes.push(n)
        }
      )
    }
    
    // do links
    nodes.forEach((node) => {
      const { children } = node
      children?.forEach((childRefId: string) => {
        if (node.ref_id) {
            links.push({
              onlyVisibleOnSelect: false,
              source: node.ref_id,
              sourcePosition: new Vector3(0,0,0),
              target: childRefId,
              targetPosition: new Vector3(0,0,0)
            })  
        }
      })
    })

    // give nodes and links positions
    if (true) {
      const dataWithPositions = generateForceGraphPositions({ links, nodes })
      links = dataWithPositions.links
      nodes = dataWithPositions.nodes
    } else if (false) {
      const dataWithPositions = generateTypeGraphPositions({ links, nodes })
      links = dataWithPositions.links
      nodes = dataWithPositions.nodes
    }

    nodes.sort((a, b) => (b.weight || 0) - (a.weight || 0))

    return { links, nodes }
  } catch (e) {
    console.error(e)

    return defaultData
  }
}
