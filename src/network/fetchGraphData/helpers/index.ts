import { Vector3 } from 'three'
import { AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL } from '~/constants'
import { FetchDataResponse, Guests, Link, Node, NodeExtended } from '~/types'
import { getMaxSuperficialWeightPerNodeType, getSuperficialNodeWeight } from '~/utils/getSuperficialNodeWeight'
import { getGraphDataPositions, maxScale } from '../const'
import { GuestMapChild, TopicMap } from '../types'

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

const generateGuestsMap = (
  currentGuest: Guests,
  id: string,
  guestMap: Record<string, GuestMapChild> = {},
): Record<string, GuestMapChild> => {
  let updatedGuestMap = { ...guestMap }

  if (currentGuest.name && currentGuest.ref_id && id) {
    updatedGuestMap = {
      ...updatedGuestMap,
      [currentGuest.ref_id]: {
        children: [...(updatedGuestMap[currentGuest.ref_id]?.children || []), id],
        imageUrl: currentGuest.profile_picture || '',
        name: currentGuest.name,
        twitterHandle: currentGuest.twitter_handle,
      },
    }
  }

  return updatedGuestMap // Return the new variable
}

function generateGuestNodesFromMap(
  guestMap: Record<string, GuestMapChild>,
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

export const formatFetchNodes = (
  dataInit: FetchDataResponse,
  searchterm: string,
  graphStyle: 'split' | 'force' | 'sphere' | 'earth',
) => {
  let nodes: NodeExtended[] = []

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
  const dataWithPositions = getGraphDataPositions(graphStyle, nodes)
  const { links } = dataWithPositions

  nodes = dataWithPositions.nodes

  nodes.sort((a, b) => (b.weight || 0) - (a.weight || 0))

  // re-assign weight based on highest weight value
  // convert to range 0-1

  // for topics and guests, calculate weight based on links
  const maxSuperficialWeight = getMaxSuperficialWeightPerNodeType(nodes, links)

  nodes = addWeightNormalizationToNodes(topWeightValue, maxSuperficialWeight, nodes, links)

  return { links, nodes }
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

const addWeightNormalizationToNodes = (
  topWeightValue: number,
  maxSuperficialWeight: Record<string, number>,
  nodes: NodeExtended[],
  links: Link[],
) =>
  nodes.map((n) => {
    let weight = (n.weight || 0) / topWeightValue

    if (!n.weight && maxSuperficialWeight[n.node_type]) {
      const myWeight = getSuperficialNodeWeight(n, links)

      weight = myWeight / maxSuperficialWeight[n.node_type]
    }

    return {
      ...n,
      weight,
    }
  })
