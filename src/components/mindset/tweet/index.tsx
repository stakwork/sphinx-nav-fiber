import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Universe } from '~/components/Universe'
import { getPathway, getSchemaAll } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { Neighbourhood, useGraphStore } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { useTweetMindsetStore } from '~/stores/useTweetMindsetStore'
import { FetchDataResponse, Link, Node, NodeExtended } from '~/types'
import { Header } from '../components/Header'
import { PlayerControl } from './components/PlayerContols'
import { SideBar } from './components/Sidebar'
import { PLAYBACK_DURATION } from './constant'

const TWEET_NEIGHBOURHOODS: Neighbourhood[] = [
  {
    ref_id: 'positive',
    name: 'Positive',
  },
  {
    ref_id: 'negative',
    name: 'Negative',
  },
  {
    ref_id: 'neutral',
    name: 'Neutral',
  },
]

const calculateMarkers = (data: FetchDataResponse): Node[] => {
  // Filter edges that have a defined 'start' property
  const edgesWithStart = data.edges
    .filter((e) => e?.properties?.start && typeof e.properties.start === 'string')
    .map((edge) => ({
      source: edge.source,
      target: edge.target,
      start: edge.properties!.start as number,
    }))

  // For each node that is linked to an edge, attach the start value from the matching edge
  const markers = data.nodes
    .filter((node) => data.edges.some((ed) => ed.source === node.ref_id || ed.target === node.ref_id))
    .map((node) => {
      const matchingEdge = edgesWithStart.find((ed) => node.ref_id === ed.source || node.ref_id === ed.target)

      return { ...node, start: matchingEdge?.start || 0 }
    })
    // Filter out nodes with specific types
    .filter(
      (node) =>
        node &&
        typeof node.start === 'string' &&
        node.node_type !== 'Clip' &&
        node.node_type !== 'Episode' &&
        node.node_type !== 'Show',
    )

  return markers
}

export const TweetMindset = () => {
  const addNewNode = useDataStore((s) => s.addNewNode)
  const requestRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const nodesAndEdgesRef = useRef<FetchDataResponse | null>(null)
  const [markers, setMarkers] = useState<NodeExtended[]>([])
  const { setSchemas } = useSchemaStore((s) => s)
  const setSelectedTweets = useTweetMindsetStore((s) => s.setSelectedTweets)
  const selectedTweet = useTweetMindsetStore((s) => s.selectedTweet)
  const setSelectedTweet = useTweetMindsetStore((s) => s.setSelectedTweet)
  const setNeighbourhoods = useGraphStore((s) => s.setNeighbourhoods)

  const navigate = useNavigate()

  const { tweetId: selectedTweetIds } = useParams()

  useEffect(() => {
    const fetchSchemaData = async () => {
      try {
        const response = await getSchemaAll()

        setSchemas(response.schemas.filter((schema) => !schema.is_deleted))
      } catch (err) {
        console.error('Error fetching schema:', err)
      }
    }

    fetchSchemaData()
  }, [setSchemas])

  useEffect(() => {
    setNeighbourhoods(TWEET_NEIGHBOURHOODS)
  }, [setNeighbourhoods])

  useEffect(() => {
    if (!selectedTweet) {
      const id = selectedTweetIds?.split('&')[0]

      if (id) {
        setSelectedTweet(id)
      }
    }
  }, [selectedTweet, selectedTweetIds, setSelectedTweet])

  useEffect(() => {
    const init = async (id: string) => {
      try {
        const data = await getPathway(id)

        const initialNode = data.nodes.find((i) => i.ref_id === selectedTweet)

        if (initialNode) {
          setSelectedTweets([initialNode])
          addNewNode({ nodes: [initialNode], edges: [] })
        }

        const markersList = calculateMarkers({ nodes: data.nodes, edges: data.edges })

        setMarkers(markersList)

        const nodesWithNeighbourhood = data.nodes.map((n) => {
          if (n.node_type === 'Tweet' && n.properties?.sentiment) {
            if (n.properties?.sentiment < 4) {
              return {
                ...n,
                neighbourHood: 'negative',
              }
            }

            if (n.properties?.sentiment > 7) {
              return {
                ...n,
                neighbourHood: 'positive',
              }
            }

            return {
              ...n,
              neighbourHood: 'neutral',
            }
          }

          return n
        })

        nodesAndEdgesRef.current = { nodes: nodesWithNeighbourhood, edges: data.edges }
      } catch (error) {
        navigate('/')
        console.error(error)
      }
    }

    if (selectedTweet) {
      init(selectedTweet)
    }
  }, [addNewNode, navigate, selectedTweet, setSelectedTweets])

  useEffect(() => {
    const update = (time: number) => {
      const { tweetPlayingTime, tweetDuration } = useTweetMindsetStore.getState()

      // Convert progressOffset back to real-time equivalent
      const realOffsetTime = (tweetDuration / PLAYBACK_DURATION) * 3000

      if (previousTimeRef.current !== null) {
        const deltaTime = time - previousTimeRef.current

        if (deltaTime > 1000) {
          if (nodesAndEdgesRef.current) {
            const { nodes, edges } = nodesAndEdgesRef.current
            const currentTime = tweetPlayingTime

            const [matchingLinks, remainingLinks] = edges.reduce<[Link[], Link[]]>(
              ([matches, remaining], link) => {
                const linkTime =
                  typeof link?.properties?.start === 'string' ? new Date(link.properties.start || 0).getTime() : 0

                if (linkTime !== 0 && linkTime <= currentTime + realOffsetTime) {
                  matches.push(link)
                } else {
                  remaining.push(link)
                }

                return [matches, remaining]
              },
              [[], []],
            )

            const [matchingNodes, remainingNodes] = nodes.reduce<[Node[], Node[]]>(
              ([matches, remaining], node) => {
                if (matchingLinks.some((edge) => edge.target === node.ref_id || edge.source === node.ref_id)) {
                  matches.push(node)
                } else {
                  remaining.push(node)
                }

                return [matches, remaining]
              },
              [[], []],
            )

            nodesAndEdgesRef.current = {
              nodes: remainingNodes,
              edges: remainingLinks,
            }

            if (matchingNodes.length || matchingLinks.length) {
              addNewNode({ nodes: matchingNodes, edges: matchingLinks })
            }
          }

          previousTimeRef.current = time
        }
      } else {
        previousTimeRef.current = time
      }

      requestRef.current = requestAnimationFrame(update)
    }

    requestRef.current = requestAnimationFrame(update)

    return () => {
      if (requestRef.current) {
        cancelAnimationFrame(requestRef.current)
      }
    }
  }, [nodesAndEdgesRef, addNewNode])

  return (
    <>
      <MainContainer>
        <ContentWrapper direction="row">
          <>
            <Flex>
              <Header />
              <SideBar />
            </Flex>
            <ContentContainer>
              <Flex basis="100%" grow={1} shrink={1}>
                <Universe />
              </Flex>
            </ContentContainer>
          </>
        </ContentWrapper>
        <PlayerControlWrapper>
          <PlayerControl markers={markers} />
        </PlayerControlWrapper>
      </MainContainer>
    </>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const ContentWrapper = styled(Flex)`
  flex: 1;
  overflow: hidden;
`

const ContentContainer = styled(Flex)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`

const PlayerControlWrapper = styled(Flex)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`
