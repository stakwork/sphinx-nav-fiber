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

const shouldIncludeTopics = false

export const fetchGraphData = async (search: string) => {
  try {
    return getGraphData(search)
  } catch (e) {
    return defaultData
  }
}

const fetchNodes = async (search: string) => {
  if (isDevelopment) {
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

const universeScale = 2600
const parentScale = 200

function getRandomPosition(parents?: NodeExtended[]) {
  const center = {
    x:0,
    y:0,
    z:0
  }

  let scale = universeScale

  if (parents?.length) {
    const parent = parents[0]
    center.x = parent.x
    center.y = parent.y
    center.z = parent.z
    scale = parentScale
  }
  
  return new Vector3(
    center.x + (Math.random() * scale - Math.random() * scale),
    center.y + (Math.random() * scale - Math.random() * scale),
    center.z + (Math.random() * scale - Math.random() * scale)
  )
}

function getMyParents(nodeRefId: string | undefined, nodes: NodeExtended[]) {
  if (!nodeRefId) {
    return []
  }

  const parent = nodes.filter(f => f.children?.includes(nodeRefId))
  
  return parent
}

function getMyChildren(childrenRefIds:string, nodes: NodeExtended[]) {
  const children = nodes.filter(f => f.ref_id && childrenRefIds.includes(f.ref_id))
  
  return children
}

function generateTopicNodesFromMap(topicMap: Record<string, string[]>,
                            searchterm: string,
                            data: Node[],
                            doLinkCallback: (link: Link) => void,
                            doNodeCallback: (node: NodeExtended) => void) {
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

      doLinkCallback(link)
    })

    const nodePosition3 = getRandomPosition()

    const topicNode: NodeExtended = {
      ...nodePosition3,
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
                            doLinkCallback: (link: Link) => void,
                            doNodeCallback: (node: NodeExtended) => void) {
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

      doLinkCallback(link)
    })

    const nodePosition4 = getRandomPosition()
    
    const guestNode: NodeExtended = {
      ...nodePosition4,
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

  try {
    const dataInit = await fetchNodes(searchterm)

    const nodePosition1 =  getRandomPosition()

    const dataSeries = dataInit.data_series
      ? [
          {
            ...dataInit.data_series,
            ...nodePosition1,
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

    const datatypess: Record<string,any> = {}


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

      data.forEach((d) => {
        if (!datatypess[d.node_type]) {
          datatypess[d.node_type] = [d]
        }
        else {
          datatypess[d.node_type].push(d)
        }
      })

      console.log('datatypess',datatypess)

      dataProcessingTemplate.forEach(template => {
        if (template.hide) {
          return
        }

        const thisData = data.filter(f => f.node_type === template.type)
        
        thisData.forEach((node) => {
          const { children, topics, ref_id: refId, show_title: showTitle } = node

          if (topics) {
            topicMap = topics.reduce((acc, topic) => {
              if (showTitle) {
                acc[topic] = [...(topicMap[topic] || []), showTitle]
              }
  
              return acc
            }, {} as Record<string, string[]>)
          }

          // replace aws bucket url with cloudfront, and add size indicator to end
          const smallImageUrl = node.image_url
            ?.replace(AWS_IMAGE_BUCKET_URL, CLOUDFRONT_IMAGE_BUCKET_URL)
            .replace('.jpg', '_s.jpg')
          
          // get position based on parent, if exists
          
          const myParents = getMyParents(refId, nodes)

          const nodePosition2 = getRandomPosition(myParents)

          nodes.push({
            ...node,
            ...nodePosition2,
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

      if (shouldIncludeTopics) {
        generateTopicNodesFromMap(topicMap, searchterm, data,
          (l: Link) => {
            links.push(l)
          },
          (n: NodeExtended) => {
            nodes.push(n)
          }
        )
      }

      generateGuestNodesFromMap(
        guestMap,
        (l: Link) => {
          links.push(l)
        },
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
          const child = nodes.find(f => f.ref_id === childRefId)
          if (child) {
            const link: Link = {
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
    
    console.log('guestMap',guestMap)

    nodes.sort((a, b) => (b.weight || 0) - (a.weight || 0))

    return { links, nodes }
  } catch (e) {
    console.error(e)

    return defaultData
  }
}
