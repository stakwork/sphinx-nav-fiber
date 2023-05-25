import { Vector3 } from 'three'
import { AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL, isDevelopment, isE2E } from '~/constants'
import { mock } from '~/mocks/getMockGraphData/mockResponse'
import { api } from '~/network/api'
import { useDataStore } from '~/stores/useDataStore'
import { FetchDataResponse, FetchSentimentResponse, GraphData, Guests, Link, Node, NodeExtended } from '~/types'
import { getLSat } from '~/utils/getLSat'
import { generateForceGraphPositions } from '../../transformers/forceGraph'
import { generateSplitGraphPositions } from '../../transformers/splitGraph'

type guestMapChild = {
  children: string[]
  imageUrl: string
  name: string
  twitterHandle: string
}

type TeachData = {
  term: string
  transcripts: string
}

/* eslint-disable camelcase */
type QuestionData = {
  search_term: string
  transcripts: string
  expertise_level: string
  question_text: string
}

const defaultData: GraphData = {
  links: [],
  nodes: [],
}

type TopicMapItem = {
  children: string[]
  position: Vector3
}

type TopicMap = Record<string, TopicMapItem>

const shouldIncludeTopics = true
const maxScale = 26

export const fetchGraphData = async (search: string) => {
  try {
    return getGraphData(search)
  } catch (e) {
    return defaultData
  }
}

const fetchNodes = async (search: string) => {
  if (!search) {
    return mock as FetchDataResponse
  }

  if (isDevelopment || isE2E) {
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

/**
 *
 * {
 *  cutoff_date: string // String(moment.unix()),
 *  topic: string // search topic
 *  }
 */
export const getSentimentData = async (args?: { topic: string; cutoff_date: string }) => {
  const search = args && new URLSearchParams(args)

  const endpoint = search ? `/sentiments?${search.toString()}` : '/sentiments'

  // disable payment for tests (data is mocked)
  if (isE2E) {
    const response = await api.get<FetchSentimentResponse>(endpoint)

    return response
  }

  const lsatToken = await getLSat('sentiments', search?.toString())

  if (!lsatToken) {
    throw new Error('An error occured calling getLSat')
  }

  const response = await api.get<FetchSentimentResponse>(endpoint, {
    Authorization: lsatToken,
  })

  return response
}

export const postTeachMe = async (data: TeachData) => {
  const lsatToken = await getLSat('teachme')

  if (!lsatToken) {
    throw new Error('An error occured calling getLSat')
  }

  return api.post(`/teachme`, JSON.stringify(data), { Authorization: lsatToken })
}

export const postAskQuestion = async (data: QuestionData) => {
  const lsatToken = await getLSat('ask_question')

  if (!lsatToken) {
    throw new Error('An error occured calling getLSat')
  }

  return api.post(`/ask_question`, JSON.stringify(data), { Authorization: lsatToken })
}

export const getAdminId = async (tribeId: string) => {
  const response = await fetch(`https://tribes.sphinx.chat/tribes/${tribeId}`)

  const jsonData = await response.json()

  return jsonData
}

const getNodeScale = (node: NodeExtended) => {
  switch (node.node_type) {
    case 'guest':
    case 'episode':
      return 2
    case 'show':
      return 3
    default:
      return 1.5
  }
}

function generateTopicNodesFromMap(topicMap: TopicMap, doNodeCallback: (node: NodeExtended) => void) {
  Object.entries(topicMap).forEach(([topic, content], index) => {
    const { children, position } = content
    const { x, y, z } = position
    /** we dont create topic node for search term,
     *  otherwise everything will be linked to it
     */

    const scale = children.length * 2 > maxScale ? maxScale : children.length * 2
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
      type: 'topic',
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

function generateGuestNodesFromMap(
  guestMap: Record<string, guestMapChild>,
  doNodeCallback: (node: NodeExtended) => void,
) {
  Object.entries(guestMap).forEach(([guest, guestValue], index) => {
    const guestChildren = guestValue.children
    const scale = guestChildren.length * 2 > maxScale ? maxScale : guestChildren.length * 2
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
  const { graphStyle } = useDataStore.getState()

  let nodes: NodeExtended[] = []
  let links: Link[] = []

  const topicMap: TopicMap = {}
  const guestMap: Record<string, guestMapChild> = {}

  try {
    const dataInit = await fetchNodes(searchterm)

    const dataSeries = dataInit.data_series
      ? [
          {
            ...dataInit.data_series,
            x: 0,
            y: 0,
            z: 0,
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
      data.forEach((node) => {
        // reject duplicate nodes
        const notUnique = nodes.find((f) => f.ref_id === node.ref_id)

        if (notUnique) {
          return
        }

        // replace aws bucket url with cloudfront, and add size indicator to end
        const smallImageUrl = node.image_url
          ?.replace(AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL)
          .replace('.jpg', '_s.jpg')

        nodes.push({
          ...node,
          scale: getNodeScale(node),
          id: node.ref_id || node.tweet_id || node.id,
          image_url: smallImageUrl,
          type: node.type || node.node_type,
        })

        if (node.node_type === 'episode' && node.ref_id) {
          // update guest map
          const guestList = node.guests || []

          guestList.forEach((guest) => {
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
      })
    }

    generateGuestNodesFromMap(guestMap, (n: NodeExtended) => {
      nodes.push(n)
    })

    // extract topics to topic map
    data.forEach((node) => {
      const { topics, ref_id: refId, show_title: showTitle } = node

      if (topics) {
        topics.forEach((topic) => {
          // don't map the search term, all will be tied to it
          if (topic === searchterm) {
            return
          }

          if (showTitle) {
            if (topicMap[topic] && !topicMap[topic].children.includes(refId || showTitle)) {
              topicMap[topic].children.push(refId || showTitle)
            } else {
              topicMap[topic] = {
                position: new Vector3(0, 0, 0),
                children: [refId || showTitle],
              }
            }
          }
        })
      }
    })

    // generate topic nodes
    if (shouldIncludeTopics) {
      generateTopicNodesFromMap(topicMap, (n: NodeExtended) => {
        nodes.push(n)
      })
    }

    // do links
    nodes.forEach((node) => {
      const { children } = node

      children?.forEach((childRefId: string) => {
        if (node.ref_id) {
          links.push({
            onlyVisibleOnSelect: false,
            source: node.ref_id,
            sourceRef: node.ref_id,
            sourcePosition: new Vector3(0, 0, 0),
            target: childRefId,
            targetRef: childRefId,
            targetPosition: new Vector3(0, 0, 0),
          })
        }
      })
    })

    // give nodes and links positions based on graphStyle
    if (graphStyle === 'split') {
      const dataWithPositions = generateSplitGraphPositions({ links, nodes })

      links = dataWithPositions.links
      nodes = dataWithPositions.nodes
    } else {
      const dataWithPositions = generateForceGraphPositions({ links, nodes }, false)

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
