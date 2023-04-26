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

const shouldIncludeTopics = false

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

const universeScale = 4000
const parentScale = 20
const guestScale = 800
const guestCube = {
  scale: 1000,
  position: {
    x: 0,
    y: 0,
    z: universeScale
  }
}


function generateGuestNodePosition() {

  const { scale, position } = guestCube  

  const spread = scale*2

  const center = {
    x: position.x + (Math.random() * scale) - (scale * 0.5),
    y: position.y + (Math.random() * spread) - (spread * 0.5),
    z: position.z + (Math.random() * spread) - (spread * 0.5)
  }
  // apply perlin noise
  const perlinNoise = Noise.perlin3(center.x,center.y,center.z)
  
  const amp = 10
  
  return new Vector3(
    center.x + (perlinNoise * amp),
    center.y + (perlinNoise * amp),
    center.z + (perlinNoise * amp)
  )
}

const topicCube = {
  scale: 1000,
  position: {
    x: 0,
    y: 0,
    z: - universeScale
  }
}

function generateTopicPosition() {

  const { scale, position } = topicCube  

  const spread = scale*2

  const center = {
    x: position.x + (Math.random() * scale) - (scale * 0.5),
    y: position.y + (Math.random() * spread) - (spread * 0.5),
    z: position.z + (Math.random() * spread) - (spread * 0.5)
  }
  // apply perlin noise
  const perlinNoise = Noise.perlin3(center.x,center.y,center.z)
  
  const amp = 10
  
  return new Vector3(
    center.x + (perlinNoise * amp),
    center.y + (perlinNoise * amp),
    center.z + (perlinNoise * amp)
  )
}

function generateNearbyPosition(basePosition: Vector3, nodeType?: string, childIndex = 1) {
  const biasX = ((Math.random() - 0.5) < 0 ? -1 : 1)
  const biasY = 1 // ((Math.random() - 0.5) < 0 ? -1 : 1)
  const biasZ = ((Math.random() - 0.5) < 0 ? -1 : 1)

  let xOffset = 0 // 100 * biasX
  let yOffset = 10 * biasY
  const zOffset = 0 // 100 * biasZ

  switch (nodeType) {
    case 'episode':
      yOffset += 50 * (childIndex || 0)
      break;
    case 'clip':
      yOffset = 0
      xOffset += 50 * (childIndex || 0)
      break;
    default:
  }

  const center = new Vector3()

  center.x = basePosition.x + xOffset
  center.y = basePosition.y + yOffset
  center.z = basePosition.z + zOffset

  return center
}

function generateNodePosition(node: NodeExtended, allData: NodeExtended[], topicMap: TopicMap, mappedNodes?: NodeExtended[]) {
  const { ref_id: refId} = node

  const center = {
    x:(Math.random() * universeScale) - (universeScale * 0.5),
    y: (Math.random() * universeScale) - (universeScale * 0.5),
    z:(Math.random() * universeScale) - (universeScale * 0.5)
  }

   // do i have parents?
  const parents = getMyParents(refId, mappedNodes)

  let relativePosition: Vector3 | null = null

  if (parents?.length){
    const parent = parents[0]
    const parentChildren = getMyChildren(parent.children || [], allData)
    const myChildIndex = parentChildren.findIndex(f=>f.ref_id=== refId)
    relativePosition = generateNearbyPosition(new Vector3(parent.x, parent.y, parent.z), node.node_type, myChildIndex + 1)
  }

  if (relativePosition) {
    center.x = relativePosition.x
    center.y = relativePosition.y
    center.z = relativePosition.z
  }
  
  // apply perlin noise
  const perlinNoise = 1 // Noise.perlin3(center.x,center.y,center.z)
  
  const amp = 1
  
  return new Vector3(
    center.x + (perlinNoise * amp),
    center.y + (perlinNoise * amp),
    center.z + (perlinNoise * amp)
  )
}


function getMyTopicNodes(nodeRefId: string | undefined, topicMap: TopicMap) {
  if (!nodeRefId) {
    return []
  }

  const myTopicNodes: TopicMapItem[] = []

  Object.values(topicMap).forEach((content) => {
    if (content.children.includes(nodeRefId)) {
      myTopicNodes.push(content)
    }
  })
  
  return myTopicNodes
}

function getMyParents(nodeRefId: string | undefined, nodes: NodeExtended[] | undefined) {
  if (!nodeRefId || !nodes) {
    return []
  }

  const parent = nodes.filter(f => f.children?.includes(nodeRefId))
  
  return parent
}

function getMyChildren(childrenRefIds:string[], nodes: NodeExtended[]) {
  const children = nodes.filter(f => f.ref_id && childrenRefIds.includes(f.ref_id))
  
  return children
}



function generateTopicNodesFromMap(topicMap: TopicMap,
                            allData: Node[],
                            mappedNodes: Node[],
                            doLinkCallback: (link: Link) => void,
                            doNodeCallback: (node: NodeExtended) => void) {
  Object.entries(topicMap).forEach(([topic, content], index) => {

    const { children, position } = content
    const { x, y, z } = position
    /** we dont create topic node for search term,
      *  otherwise everything will be linked to it
      */
    if (children.length < 3) {
      return
    }

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

    const nodePosition = generateGuestNodePosition()
    
    const guestNode: NodeExtended = {
      ...guestValue,
      ...nodePosition,
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

  const nodes: NodeExtended[] = []
  const links: Link[] = []

  const topicMap: TopicMap = {}
  const guestMap: Record<string, guestMapChild> = {}

  try {
    const dataInit = await fetchNodes(searchterm, returnFakeData)

    const nodePosition = generateNodePosition({} as NodeExtended,[],topicMap,[])

    const dataSeries = dataInit.data_series
      ? [
          {
            ...dataInit.data_series,
            ...nodePosition,
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
          type: 'topic',
          hide: !shouldIncludeTopics,
        },
        {
          type: 'show',
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
          
          const nodePosition1 = generateNodePosition(node, data, topicMap, nodes)

          nodes.push({
            ...node,
            ...nodePosition1,
            id: node.ref_id || node.tweet_id,
            // label: moment.show_title,
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

         // extract topics
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
                    position: generateTopicPosition(),
                    children: [refId || showTitle]
                  }
                }  
              }
            })
          }
        })
  
        // generate nodes
        generateTopicNodesFromMap(topicMap,
          data,
          nodes,
          (l: Link) => {
            links.push(l)
          },
          (n: NodeExtended) => {
            nodes.push(n)
          }
        )

    // do links
    nodes.forEach((node) => {
      const { children } = node
      children?.forEach((childRefId: string) => {
        if (node.ref_id) {
          const child = nodes.find(f => f.ref_id === childRefId)
          let onlyVisibleOnSelect = false
          if (
            (child?.node_type === 'guest' || child?.node_type === 'topic')
            || (node?.node_type === 'guest' || node?.node_type === 'topic')
          ) {
            onlyVisibleOnSelect = true
          }
          if (child){
            const link: Link = {
              onlyVisibleOnSelect,
              source: node.ref_id,
              sourcePosition: new Vector3(node.x,node.y,node.z),
              target: childRefId,
              targetPosition: new Vector3(child.x,child.y,child.z)
            }
    
            links.push(link)  
          }
        }
      })
    })

    nodes.sort((a, b) => (b.weight || 0) - (a.weight || 0))

    return { links, nodes }
  } catch (e) {
    console.error(e)

    return defaultData
  }
}
