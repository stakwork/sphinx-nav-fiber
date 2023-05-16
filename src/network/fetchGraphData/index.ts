/* eslint-disable padding-line-between-statements */
import { toast } from 'react-toastify'
import { AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL, isDevelopment, isE2E } from '~/constants'
import { api } from '~/network/api'
import { FetchDataResponse, FetchSentimentResponse, GraphData, Guests, Link, Node, NodeExtended } from '~/types'
import { getLSat } from '~/utils/getLSat'

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

const shouldIncludeTopics = false

export const fetchGraphData = async (search: string) => {
  try {
    return getGraphData(search)
  } catch (e) {
    return defaultData
  }
}

const fetchNodes = async (search: string) => {
  if (isDevelopment || isE2E) {
    const response = await api.get<FetchDataResponse>(`/searching?word=${search}&free=true`)

    return response
  }

  const lsatToken = await getLSat('searching')

  if (!lsatToken) {
    toast('message', {
      type: 'success',
    })
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

export const postTeachMe = async (data: TeachData) => {
  const lsatToken = await getLSat('teachme')

  if (!lsatToken) {
    toast('An error occured calling getLSat', {
      type: 'error',
    })
    throw new Error('An error occured calling getLSat')
  }

  return api.post(`/teachme`, JSON.stringify(data), { Authorization: lsatToken })
}

export const postAskQuestion = async (data: QuestionData) => {
  const lsatToken = await getLSat('ask_question')

  if (!lsatToken) {
    toast('An error occured calling getLSat', {
      type: 'error',
    })
    throw new Error('An error occured calling getLSat')
  }

  return api.post(`/ask_question`, JSON.stringify(data), { Authorization: lsatToken })
}

export const getAdminId = async (tribeId: string) => {
  const response = await fetch(`https://tribes.sphinx.chat/tribes/${tribeId}`)

  const jsonData = await response.json()

  return jsonData
}

const getGraphData = async (searchterm: string) => {
  try {
    const dataInit = await fetchNodes(searchterm)

    const dataSeries = dataInit.data_series
      ? [
          {
            ...dataInit.data_series,
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

    const nodes: NodeExtended[] = []
    const links: Link[] = []

    let topicMap: Record<string, string[]> = {}
    const guestMap: Record<string, guestMapChild> = {}

    if (data.length) {
      // Populating nodes array with podcasts and constructing a topic map
      data.forEach((node) => {
        const { children, topics, guests, show_title: showTitle, node_type: nodeType } = node

        if (!shouldIncludeTopics && nodeType === 'topic') {
          return
        }

        children?.forEach((childRefId: string) => {
          if (node.ref_id) {
            const link: Link = {
              source: node.ref_id,
              target: childRefId,
            }

            links.push(link)
          }
        })

        if (topics) {
          topicMap = topics.reduce((acc, topic) => {
            if (showTitle) {
              acc[topic] = [...(topicMap[topic] || []), showTitle]
            }

            return acc
          }, {} as Record<string, string[]>)
        }

        if (node.node_type === 'episode' && node.ref_id && guests) {
          guests.forEach((guest) => {
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

        // replace aws bucket url with cloudfront, and add size indicator to end
        const smallImageUrl = node.image_url
          ?.replace(AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL)
          .replace('.jpg', '_s.jpg')

        nodes.push({
          ...node,
          id: node.ref_id || node.tweet_id || node.id,
          // label: moment.show_title,
          image_url: smallImageUrl,
          type: node.type || node.node_type,
        })
      })

      if (shouldIncludeTopics) {
        Object.entries(topicMap).forEach(([topic, topicTitles], index) => {
          /** we dont create topic node for search term,
           *  otherwise everything will be linked to it
           */
          if (topic === searchterm) {
            return
          }

          const scale = topicTitles.length * 2
          const topicNodeId = `topic_node_${index}`

          // make links to children
          topicTitles.forEach((showTitle) => {
            const show = data.find((f) => f.show_title === showTitle && f.node_type === 'episode')

            const showRefId = show?.ref_id || ''

            const link: Link = {
              source: showRefId,
              target: topicNodeId,
            }

            links.push(link)
          })

          const topicNode: NodeExtended = {
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

          nodes.push(topicNode)
        })
      }

      Object.entries(guestMap).forEach(([guest, guestValue], index) => {
        const guestChildren = guestValue.children
        const scale = guestChildren.length * 2
        const guestNodeId = `guestnode_${index}`

        // make links to children
        guestChildren.forEach((childRefId: string) => {
          const link: Link = {
            source: childRefId,
            target: guestNodeId,
          }

          links.push(link)
        })

        const guestNode: NodeExtended = {
          colors: ['#000'],
          id: guestNodeId,
          image_url: guestValue.imageUrl,
          label: guestValue.name,
          name: guestValue.name,
          node_type: 'guest',
          ref_id: guest,
          scale,
          show_title: guestValue.name,
          text: guestValue.twitterHandle,
          type: 'guest',
          weight: 0,
        }

        nodes.push(guestNode)
      })
    }

    nodes.sort((a, b) => (b.weight || 0) - (a.weight || 0))

    return { links, nodes }
  } catch (e) {
    console.error(e)

    return defaultData
  }
}
