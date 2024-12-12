import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Socket } from 'socket.io-client'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Universe } from '~/components/Universe'
import { useSocket } from '~/hooks/useSockets'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { getNode } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { FetchDataResponse, Link, Node } from '~/types'
import { Header } from './components/Header'
import { LandingPage } from './components/LandingPage'
import { PlayerControl } from './components/PlayerContols'
import { Scene } from './components/Scene'
import { SideBar } from './components/Sidebar'

export const MindSet = () => {
  const { addNewNode, isFetching, runningProjectId } = useDataStore((s) => s)
  const [dataInitial, setDataInitial] = useState<FetchDataResponse | null>(null)
  const [showTwoD, setShowTwoD] = useState(false)
  const { selectedEpisodeId, setSelectedEpisode } = useMindsetStore((s) => s)
  const socket: Socket | undefined = useSocket()
  const requestRef = useRef<number | null>(null)
  const previousTimeRef = useRef<number | null>(null)
  const nodesAndEdgesRef = useRef<FetchDataResponse | null>(null)

  const queueRef = useRef<FetchDataResponse | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const { setPlayingNode } = usePlayerStore((s) => s)

  const handleNewNodeCreated = useCallback(
    (data: FetchDataResponse) => {
      if (isFetching) {
        return
      }

      if (!queueRef.current) {
        queueRef.current = { nodes: [], edges: [] }
      }

      if (data.edges) {
        queueRef.current.edges.push(...data.edges)
      }

      if (data.nodes) {
        queueRef.current.nodes.push(...data.nodes)
      }

      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }

      timerRef.current = setTimeout(() => {
        // Combine all queued data into a single update

        if (queueRef.current) {
          const { nodes: newNodes, edges: newEdges } = queueRef.current
          const batchedData = { nodes: newNodes, edges: newEdges }

          queueRef.current = { nodes: [], edges: [] }
          addNewNode(batchedData)
        }
      }, 3000) // Adjust delay as necessary
    },
    [addNewNode, isFetching],
  )

  useEffect(() => {
    const init = async () => {
      try {
        const data = await fetchNodeEdges(selectedEpisodeId, 0, 50)

        setDataInitial(data)

        const [episodesAndClips, remainingNodes] = (data?.nodes || []).reduce<[Node[], Node[]]>(
          ([matches, remaining], node) => {
            if (['Episode', 'Show', 'Host', 'Guest'].includes(node.node_type)) {
              matches.push(node)
            } else {
              remaining.push(node)
            }

            return [matches, remaining]
          },
          [[], []],
        )

        const refIds = new Set(episodesAndClips.map((n) => n.ref_id))

        const [matchingLinks, remainingLinks] = (data?.edges || []).reduce<[Link[], Link[]]>(
          ([matches, remaining], link) => {
            if (refIds.has(link.source) && refIds.has(link.target)) {
              matches.push(link)
            } else {
              remaining.push(link)
            }

            return [matches, remaining]
          },
          [[], []],
        )

        nodesAndEdgesRef.current = {
          nodes: remainingNodes || [],
          edges: remainingLinks || [],
        }

        addNewNode({ nodes: episodesAndClips, edges: matchingLinks })
      } catch (error) {
        console.error(error)
      }
    }

    if (selectedEpisodeId) {
      init()
    }
  }, [selectedEpisodeId, addNewNode])

  useEffect(() => {
    const init = async () => {
      try {
        const data = await getNode(selectedEpisodeId)

        if (data) {
          setPlayingNode(data)
          setSelectedEpisode(data)
        }
      } catch (error) {
        console.error(error)
      }
    }

    if (selectedEpisodeId) {
      init()
    }
  }, [selectedEpisodeId, setPlayingNode, setSelectedEpisode])

  useEffect(() => {
    if (socket) {
      socket.connect()

      socket.on('connect_error', (error: unknown) => {
        console.error('Socket connection error:', error)
      })

      if (runningProjectId) {
        socket.on('new_node_created', handleNewNodeCreated)
      }
    }

    return () => {
      if (socket) {
        socket.off()
      }
    }
  }, [socket, handleNewNodeCreated, runningProjectId])

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
                if (link?.properties?.start !== undefined && (link?.properties?.start as number) < currentTime) {
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

  useEffect(() => {
    if (runningProjectId) {
      try {
        socket?.emit('update_project_id', { id: runningProjectId })
      } catch (error) {
        console.error(error)
      }
    }
  }, [runningProjectId, socket])

  const markers = useMemo(() => {
    if (dataInitial) {
      const edgesMention: Array<{ source: string; target: string; start: number }> = dataInitial.edges
        .filter((e) => e?.properties?.start)
        .map((edge) => ({ source: edge.source, target: edge.target, start: edge.properties?.start as number }))

      const nodesWithTimestamps = dataInitial.nodes
        .filter((node) => dataInitial.edges.some((ed) => ed.source === node.ref_id || ed.target === node.ref_id))
        .map((node) => {
          const edge = edgesMention.find((ed) => node.ref_id === ed.source || node.ref_id === ed.target)

          return { ...node, start: edge?.start || 0 }
        })
        .filter(
          (node) => node && node.node_type !== 'Clip' && node.node_type !== 'Episode' && node.node_type !== 'Show',
        )

      return nodesWithTimestamps
    }

    return []
  }, [dataInitial])

  return (
    <Flex direction="row" style={{ height: '100%' }}>
      {selectedEpisodeId ? (
        <>
          <Flex>
            <Flex onClick={() => setShowTwoD(!showTwoD)}>
              <Header />
            </Flex>
            <SideBar />
          </Flex>
          <ContentContainer>
            <Flex basis="100%" grow={1} shrink={1}>
              {showTwoD ? <Scene /> : <Universe />}
            </Flex>

            <PlayerControl markers={markers} />
          </ContentContainer>
        </>
      ) : (
        <LandingPage />
      )}
    </Flex>
  )
}

const ContentContainer = styled(Flex)`
  flex-basis: 100%;
  flex-shrink: 1;
  flex-grow: 1;
  padding: 16px 16px 16px 0;
`
