import { useEffect, useRef, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { ClaimsModal } from '~/components/ModalsContainer/ClaimsModal'
import { Universe } from '~/components/Universe'
import { getPathway, getSchemaAll } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { FetchDataResponse, Link, Node, NodeExtended } from '~/types'
import { timeToMilliseconds } from '~/utils'
import { FloatingPlayer } from './components/FloatingPlayer'
import { Header } from './components/Header'
import { PlayerControl } from './components/PlayerContols'
import { PodcastLayout } from './components/PodcastLayout'
import { SideBar } from './components/Sidebar'

const EPISODES_WITH_PODCAST_LAYOUT = ['63a5707b-46a5-4df3-9258-7749aefc7fcd']

const calculateMarkers = (data: FetchDataResponse): Node[] => {
  const edgesWithStart = data.edges
    .filter((e) => e?.properties?.start)
    .map((edge) => ({
      source: edge.source,
      target: edge.target,
      start: edge.properties!.start as number,
    }))

  const markers = data.nodes
    .filter((node) => data.edges.some((ed) => ed.source === node.ref_id || ed.target === node.ref_id))
    .map((node) => {
      const matchingEdge = edgesWithStart.find((ed) => node.ref_id === ed.source || node.ref_id === ed.target)

      return { ...node, start: matchingEdge?.start || 0 }
    })
    .filter((node) => node && node.node_type !== 'Clip' && node.node_type !== 'Episode' && node.node_type !== 'Show')

  return markers
}

export const MindSet = () => {
  const addNewNode = useDataStore((s) => s.addNewNode)
  const activeClip = useMindsetStore((s) => s.activeClip)
  const fetchEpisodeData = useMindsetStore((s) => s.fetchEpisodeData)
  const chapters = useMindsetStore((s) => s.chapters)
  const requestRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const nodesAndEdgesRef = useRef<FetchDataResponse | null>(null)
  const claimNodesAndEdgesRef = useRef<FetchDataResponse | null>(null)
  const [markers, setMarkers] = useState<NodeExtended[]>([])
  const { setSchemas } = useSchemaStore((s) => s)
  const navigate = useNavigate()
  const { episodeId: selectedEpisodeId } = useParams()

  const isFullScreen = useMindsetStore((s) => s.isFullScreen)

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
    const fetchInitialData = async () => {
      try {
        fetchEpisodeData(selectedEpisodeId || '')
      } catch (error) {
        navigate('/')
        console.error('Error fetching initial data:', error)
      }
    }

    if (selectedEpisodeId) {
      fetchInitialData()
    }
  }, [selectedEpisodeId, navigate, fetchEpisodeData])

  useEffect(() => {
    const processClipNodes = async () => {
      try {
        const computedMarkers = []

        const combinedData: FetchDataResponse = {
          nodes: nodesAndEdgesRef.current?.nodes || [],
          edges: nodesAndEdgesRef.current?.edges || [],
        }

        const refId = activeClip?.ref_id

        if (refId) {
          const data = await getPathway(refId, ['-Clip', '-Episode'], [], '', true, 0, 2, 50)

          const claimNodes = data.nodes.filter((node) => node.node_type === 'Claim')

          const claimEdges = data.edges.filter((edge) =>
            claimNodes.some((i) => i.ref_id === edge.source || i.ref_id === edge.target),
          )

          claimNodesAndEdgesRef.current = {
            nodes: [...(claimNodesAndEdgesRef.current?.nodes || []), ...claimNodes],
            edges: [...(claimNodesAndEdgesRef.current?.edges || []), ...claimEdges],
          }

          const setOfMarkers = calculateMarkers(data)

          const nodesWithNeighbourhoud = setOfMarkers.map((node: NodeExtended) => {
            const chapterId =
              (chapters || []).find(
                (chapter) =>
                  node.start && timeToMilliseconds(chapter?.properties?.timestamp || '') >= node.start * 1000,
              )?.ref_id || ''

            return { ...node, neighbourHood: chapterId }
          })

          combinedData.nodes.push(...(nodesWithNeighbourhoud || []))
          combinedData.edges.push(...(data?.edges || []))
          computedMarkers.push(...nodesWithNeighbourhoud)
          nodesAndEdgesRef.current = combinedData
        }

        setMarkers(computedMarkers)
      } catch (error) {
        console.error('Error processing clip nodes:', error)
      }
    }

    if (activeClip && chapters) {
      processClipNodes()
    }
  }, [activeClip, chapters])

  useEffect(() => {
    const update = (time: number) => {
      const { playerRef } = usePlayerStore.getState()

      if (previousTimeRef.current !== null) {
        const deltaTime = time - previousTimeRef.current

        if (deltaTime > 2000) {
          if (nodesAndEdgesRef.current && playerRef) {
            const { nodes, edges } = nodesAndEdgesRef.current
            const currentTime = playerRef?.getCurrentTime()

            const [matchingLinks, remainingLinks] = edges.reduce<[Link[], Link[]]>(
              ([matches, remaining], link) => {
                if (link?.properties?.start !== undefined && (link?.properties?.start as number) < currentTime + 1) {
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

            const [matchingClaimNodes, matchingClaimEdges] = (claimNodesAndEdgesRef.current?.edges || []).reduce<
              [Node[], Link[]]
            >(
              ([mNodes, mEdges], curr) => {
                if (matchingNodes.some((node: Node) => node.ref_id === curr.source)) {
                  const node = (claimNodesAndEdgesRef.current?.nodes || []).find((n) => n.ref_id === curr.target)

                  if (node) {
                    mNodes.push(node)
                    mEdges.push(curr)
                  }
                } else if (matchingNodes.some((node: Node) => node.ref_id === curr.target)) {
                  const node = (claimNodesAndEdgesRef.current?.nodes || []).find((n) => n.ref_id === curr.source)

                  if (node) {
                    mNodes.push(node)
                    mEdges.push(curr)
                  }
                }

                return [mNodes, mEdges]
              },
              [[], []],
            )

            const newNodes = [...matchingNodes, ...matchingClaimNodes]
            const newEdges = [...matchingLinks, ...matchingClaimEdges]

            if (newNodes.length || newEdges.length) {
              addNewNode({ nodes: newNodes, edges: newEdges })
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
    <MainContainer>
      <ContentWrapper direction="row">
        <>
          <Flex>
            <Flex>
              <Header />
            </Flex>
            <SideBar />
          </Flex>
          <ContentContainer>
            <Flex basis="100%" grow={1} shrink={1}>
              <Universe />
              {EPISODES_WITH_PODCAST_LAYOUT.includes(selectedEpisodeId || '') && <PodcastLayout />}
              {isFullScreen && <FloatingPlayerWrapper id="floating-player-root" />}
              <FloatingPlayer />
            </Flex>
          </ContentContainer>
        </>
      </ContentWrapper>
      <PlayerControlWrapper>
        <PlayerControl chapters={chapters} markers={markers} />
      </PlayerControlWrapper>
      <ClaimsModal />
    </MainContainer>
  )
}

const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
`

const FloatingPlayerWrapper = styled.div`
  position: absolute;
  top: 64px;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.9);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: calc(100% - 64px);
  z-index: 1000;
  padding: 0;
  margin: 0;
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
  position: relative;

  @media (max-width: 768px) {
    display: none;
  }
`

const PlayerControlWrapper = styled(Flex)`
  padding: 16px 16px 16px 0;
  margin-left: 18px;
`
