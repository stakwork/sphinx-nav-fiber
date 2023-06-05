/* eslint-disable no-console */
import { Vector3 } from 'three'
import { AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL } from '~/constants'
import { useDataStore } from '~/stores/useDataStore'
import { FetchDataResponse, Guests, Link, Node, NodeExtended } from '~/types'
import { generateForceGraphPositions } from '../../transformers/forceGraph'
import { generateSplitGraphPositions } from '../../transformers/splitGraph'
import { defaultData, maxScale, shouldIncludeTopics } from './const'
import { GuestMap, TopicMap } from './types'

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
  let index = 0

  topicMap.forEach((content, topic) => {
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

    index += 1

    doNodeCallback(topicNode)
  })
}

function generateGuestNodesFromMap(guestMap: GuestMap, doNodeCallback: (node: NodeExtended) => void) {
  let index = 0

  guestMap.forEach((guestValue, guest) => {
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
    index += 1
  })
}

const dataSeriesAdapter = (data: FetchDataResponse['data_series']) => {
  const dataSeries = data
    ? [
        {
          ...data,
          x: 0,
          y: 0,
          z: 0,
          boost: null,
          image_url: 'node_data.webp',
          label: data.title,
          name: 'Name',
          node_type: 'data_series',
          ref_id: '',
          type: 'data_series',
          weight: 2,
        } as Node,
      ]
    : []

  return dataSeries
}

export const createLinks = (nodes: NodeExtended[]): Link[] => {
  const links: Link[] = []

  nodes.forEach((node) => {
    const { children } = node

    children?.forEach((childRefId: string) => {
      if (node.ref_id) {
        const child = nodes.find((f) => f.ref_id === childRefId)

        if (!child) {
          return
        }

        const sourcePosition = new Vector3(node.x || 0, node.y || 0, node.z || 0)
        const targetPosition = new Vector3(child?.x || 0, child?.y || 0, child?.z || 0)

        links.push({
          onlyVisibleOnSelect: false,
          source: node.ref_id,
          sourceRef: node.ref_id,
          sourcePosition,
          target: childRefId,
          targetRef: childRefId,
          targetPosition,
        })
      }
    })
  })

  return links
}

const updateGuestsMap = (map: GuestMap, node: Node) => {
  const guestList = node.guests || []

  guestList.forEach((guest) => {
    const currentGuest = guest as Guests

    if (currentGuest.name && currentGuest.ref_id && node.ref_id) {
      map.set(currentGuest.ref_id, {
        children: [...(map.get(currentGuest.ref_id)?.children || []), node.ref_id],
        imageUrl: currentGuest.profile_picture || '',
        name: currentGuest.name,
        twitterHandle: currentGuest.twitter_handle,
      })
    }
  })
}

const updateTopicsMap = (map: TopicMap, node: Node, searchterm: string) => {
  const { topics, ref_id: refId, show_title: showTitle } = node

  if (topics) {
    topics.forEach((topic) => {
      if (!showTitle) {
        return
      }

      // don't map the search term, all will be tied to it
      if (topic === searchterm) {
        return
      }

      const currentTopic = map.get(topic)

      if (currentTopic && !currentTopic.children.includes(refId || showTitle)) {
        currentTopic.children.push(refId || showTitle)
      } else {
        map.set(topic, {
          position: new Vector3(0, 0, 0),
          children: [refId || showTitle],
        })
      }
    })
  }
}

// replace aws bucket url with cloudfront, and add size indicator to end
const getImageUrl = (url?: string) =>
  url?.replace(AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL).replace('.jpg', '_s.jpg')

export const getGraphData = async (dataInit: FetchDataResponse, searchterm: string) => {
  const { graphStyle } = useDataStore.getState()

  let nodes: NodeExtended[] = []

  const existedNodesMap: Map<string, boolean> = new Map()
  const topicMap: TopicMap = new Map()
  const guestMap: GuestMap = new Map()

  try {
    const dataSeries = dataSeriesAdapter(dataInit.data_series)

    const data: Node[] = [...dataInit.exact, ...dataInit.related, ...dataSeries]

    if (!data.length) {
      return defaultData
    }

    data.forEach((node) => {
      // reject duplicate nodes
      const notUnique = node.ref_id ? existedNodesMap.get(node.ref_id) : false

      if (notUnique) {
        return
      }

      nodes.push({
        ...node,
        scale: getNodeScale(node),
        image_url: getImageUrl(node.image_url),
        id: node.ref_id || node.tweet_id || node.id,
        type: node.type || node.node_type,
      })

      // save ref_id for excluding duplicate nodes
      if (node.ref_id) {
        existedNodesMap.set(node.ref_id, true)
      }

      if (node.node_type === 'episode' && node.ref_id) {
        // update guest map
        updateGuestsMap(guestMap, node)
      }

      // extract topics to topic map
      updateTopicsMap(topicMap, node, searchterm)
    })

    generateGuestNodesFromMap(guestMap, (n: NodeExtended) => {
      nodes.push(n)
    })

    // generate topic nodes
    if (shouldIncludeTopics) {
      generateTopicNodesFromMap(topicMap, (n: NodeExtended) => {
        nodes.push(n)
      })
    }

    // do links
    let links = createLinks(nodes)

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
