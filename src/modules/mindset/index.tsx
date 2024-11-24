import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Socket } from 'socket.io-client'
import { Flex } from '~/components/common/Flex'
import { Universe } from '~/components/Universe'
import { useSocket } from '~/hooks/useSockets'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { getNode } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { FetchDataResponse, NodeExtended } from '~/types'
import { Header } from './components/Header'
import { LandingPage } from './components/LandingPage'
import { PlayerControl } from './components/PlayerContols'
import { Scene } from './components/Scene'
import { SideBar } from './components/Sidebar'

export const MindSet = () => {
  const { addNewNode, isFetching, runningProjectId, dataInitial } = useDataStore((s) => s)
  const [showTwoD, setShowTwoD] = useState(false)
  const { selectedEpisodeId, setSelectedEpisode } = useMindsetStore((s) => s)
  const socket: Socket | undefined = useSocket()

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

  const handleNodeUpdated = useCallback((node: NodeExtended) => {
    console.log(node, 'uuuuuupdate')
  }, [])

  useEffect(() => {
    const init = async () => {
      try {
        const data = await fetchNodeEdges(selectedEpisodeId, 0, 50)

        if (data) {
          data.nodes = data?.nodes.map((i) => ({ ...i, node_type: 'Topic' }))
          handleNewNodeCreated(data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (selectedEpisodeId) {
      init()
    }
  }, [selectedEpisodeId, handleNewNodeCreated])

  useEffect(() => {
    const init = async () => {
      try {
        const data = await getNode(selectedEpisodeId)

        if (data) {
          setPlayingNode(data)
          setSelectedEpisode(data)
        }
      } catch (error) {
        console.log(error)
      }
    }

    if (selectedEpisodeId) {
      init()
    }
  }, [selectedEpisodeId, setPlayingNode, setSelectedEpisode])

  useEffect(() => {
    if (socket) {
      socket.on('new_node_created', handleNewNodeCreated)
      socket.on('node_updated', handleNodeUpdated)
    }

    return () => {
      if (socket) {
        socket.off()
      }
    }
  }, [socket, handleNodeUpdated, handleNewNodeCreated])

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
      const edgesMention: Array<{ source: string; start: number }> = dataInitial.links
        .filter((e) => e?.start)
        .map((edge) => ({ source: edge.source, start: edge?.start as number }))

      const nodesWithTimestamps = dataInitial.nodes
        .filter((node) => dataInitial.links.some((ed) => ed.source === node.ref_id))
        .map((node) => {
          const edge = edgesMention.find((ed) => node.ref_id === ed.source)

          return { ...node, start: edge?.start || 0 }
        })
        .filter((node) => node)

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
          <Flex basis="100%" grow={1} shrink={1}>
            <Flex basis="100%" grow={1} shrink={1}>
              {showTwoD ? <Scene /> : <Universe />}
            </Flex>

            <PlayerControl markers={markers} />
          </Flex>
        </>
      ) : (
        <LandingPage />
      )}
    </Flex>
  )
}
