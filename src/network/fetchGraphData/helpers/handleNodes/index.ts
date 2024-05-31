import { Vector3 } from 'three'
import { AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL } from '~/constants'
import { FetchDataResponse, Guests, Node, NodeExtended } from '~/types'
import { GuestMapChild, TopicMap } from '../../types'
import { generateGuestNodesFromMap, generateGuestsMap } from './handleGuests'
import { generateTopicNodesFromMap } from './handleTopics'

const getNodeScale = (node: NodeExtended) => {
  switch (node.node_type) {
    case 'guest':
    case 'episode':
    case 'document':
      return 2
    case 'show':
      return 3
    case 'image':
      return 4
    default:
      return 1.5
  }
}

export const handleNodes = (dataInit: FetchDataResponse, searchterm: string) => {
  const nodes: NodeExtended[] = []

  console.log('handleNodes')

  const topicMap: TopicMap = {}
  let guestMap: Record<string, GuestMapChild> = {}

  const dataSeries = Array.isArray(dataInit.data_series) ? dataInit.data_series : []

  const data: Node[] = [...dataInit.exact, ...dataInit.related, ...dataSeries].filter((i) => i)

  let topWeightValue = 0

  if (data.length) {
    data.forEach((node, index) => {
      // record highest weight to normalize to range 0~1
      if (node.weight && topWeightValue < node.weight) {
        topWeightValue = node.weight
      }

      const imageUrl = node.properties?.image_url || node.image_url

      // TODO: simplify this to ref_id
      if (['data_series', 'document', 'tweet', 'image'].includes(node.node_type)) {
        const imageUrlsMapper: { [key: string]: string } = {
          data_series: 'node_data.webp',
          document: 'document.svg',
          tweet: 'twitter_placeholder.png',
        }

        nodes.push({
          ...node,
          scale: getNodeScale(node),
          id: node.ref_id || `${node.unique_id}_${index}`,
          ref_id: node.ref_id || `${node.unique_id}_${index}`,
          image_url: node.node_type === 'image' ? node.source_link : imageUrl || imageUrlsMapper[node.node_type],
          type: node.type || node.node_type,
        })

        if (node.node_type === 'tweet') {
          if (node.posted_by && node.ref_id) {
            const currentGuest = { ...node.posted_by, profile_picture: node.profile_picture } as Guests

            const updatedGuestMap = generateGuestsMap(currentGuest, node.ref_id, guestMap)

            guestMap = { ...guestMap, ...updatedGuestMap }
          }
        }

        return
      }

      // reject duplicate nodes
      const notUnique = nodes.find((f) => f.ref_id === node.ref_id)

      if (notUnique) {
        return
      }

      // replace aws bucket url with cloudfront, and add size indicator to end
      const smallImageUrl = imageUrl
        ?.replace(AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL)
        .replace('.jpg', '_s.jpg')

      nodes.push({
        ...node,
        node_type: node.node_type === 'youtube' ? 'video' : node.node_type,
        scale: getNodeScale(node),
        id: node.ref_id || node.id,
        image_url: smallImageUrl,
        type: node.type || node.node_type,
      })

      if (node.node_type === 'episode' && node.ref_id) {
        // update guest map
        const guestList = node.guests || []

        guestList.forEach((guest) => {
          const currentGuest = guest as Guests

          const updatedGuestMap = generateGuestsMap(currentGuest, node.ref_id!, guestMap)

          guestMap = { ...guestMap, ...updatedGuestMap }
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

        const value = refId || showTitle

        if (value) {
          if (topicMap[topic] && !topicMap[topic].children.includes(value)) {
            topicMap[topic].children.push(value)
          } else {
            topicMap[topic] = {
              position: new Vector3(0, 0, 0),
              children: [value],
            }
          }
        }
      })
    }
  })

  // generate topic nodes

  generateTopicNodesFromMap(topicMap, (n: NodeExtended) => {
    nodes.push(n)
  })

  // give nodes and links positions based on graphStyle
  return { nodes, topWeightValue }
}
