import { useCallback, useEffect, useRef, useState } from 'react'
import { Flex } from '~/components/common/Flex'
import { Universe } from '~/components/Universe'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useDataStore } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { FetchDataResponse } from '~/types'
import { Header } from './components/Header'
import { LandingPage } from './components/LandingPage'
import { PlayerControl } from './components/PlayerContols'
import { Scene } from './components/Scene'
import { SideBar } from './components/Sidebar'
import { edges, nodes } from './data'

export const MindSet = () => {
  const { addNewNode, isFetching } = useDataStore((s) => s)
  const [showTwoD, setShowTwoD] = useState(false)

  const queueRef = useRef<FetchDataResponse | null>(null)
  const timerRef = useRef<NodeJS.Timeout | null>(null)

  const { setPlayingNode } = usePlayerStore((s) => s)

  useEffect(() => {
    const init = async () => {
      try {
        const data = await fetchNodeEdges('b8769aa3-ef03-4d7c-83d6-8e62c6957e62', 0, 50)

        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }

    init()
  }, [])

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
    handleNewNodeCreated({
      nodes,
      edges,
    })

    setPlayingNode(nodes.find((i) => i.node_type === 'Clip') || null)
  }, [handleNewNodeCreated, setPlayingNode])

  return (
    <Flex direction="row" style={{ height: '100%' }}>
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

        <PlayerControl />
      </Flex>
      {false && <LandingPage />}
    </Flex>
  )
}
