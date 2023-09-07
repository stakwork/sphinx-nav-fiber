import { ReactNode, useCallback, useMemo, useRef, useState } from 'react'
import { useGraphData } from '~/components/DataRetriever'
import { ScrollView } from '~/components/ScrollView'
import { Flex } from '~/components/common/Flex'
import { Pill } from '~/components/common/Pill'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { formatDescription } from '~/utils/formatDescription'
import { saveConsumedContent } from '~/utils/relayHelper'
import { useIsMatchBreakpoint } from '~/utils/useIsMatchBreakpoint'
import { ErrorSection } from '../Creator/ErrorSection'
import { Episode } from './Episode'

const pageSize = 80

type Props = {
  header?: ReactNode
}

export const Relevance = ({ header = null }: Props) => {
  const data = useGraphData()

  const scrollViewRef = useRef<HTMLDivElement | null>(null)

  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const setSelectedTimestamp = useDataStore((s) => s.setSelectedTimestamp)
  const flagErrorIsOpen = useAppStore((s) => s.flagErrorIsOpen)

  const [setSidebarOpen] = useAppStore((s) => [s.setSidebarOpen])
  const setRelevanceSelected = useAppStore((s) => s.setRelevanceSelected)

  const [currentPage, setCurrentPage] = useState(0)

  const startSlice = currentPage * pageSize
  const endSlice = startSlice + pageSize

  const hasNext = data.nodes.length - 1 > endSlice
  const hasPrevious = startSlice > 0

  const isMobile = useIsMatchBreakpoint('sm', 'down')

  const currentNodes = useMemo(
    () => data.nodes.slice(startSlice, endSlice).filter((f) => f.node_type === 'clip'),
    [data.nodes, endSlice, startSlice],
  )

  const handleNodeClick = useCallback(
    (node: NodeExtended) => {
      saveConsumedContent(node)
      setSelectedTimestamp(node)
      setRelevanceSelected(true)
      setSelectedNode(node)
      isMobile && setSidebarOpen(false)
    },
    [setSelectedNode, setRelevanceSelected, setSidebarOpen, setSelectedTimestamp, isMobile],
  )

  return (
    <>
      {!header && flagErrorIsOpen && <ErrorSection />}

      <ScrollView ref={scrollViewRef} id="search-result-list" shrink={1}>
        {header}

        {currentNodes.map((n, index) => {
          const { image_url: imageUrl, description, date, boost, type, id, episode_title: episodeTitle } = n || {}

          return (
            <Episode
              // eslint-disable-next-line react/no-array-index-key
              key={index.toString()}
              boostCount={boost || 0}
              date={date || 0}
              description={formatDescription(description)}
              id={id}
              imageUrl={imageUrl || 'audio_default.svg'}
              onClick={() => handleNodeClick(n)}
              title={episodeTitle}
              type={type}
            />
          )
        })}

        <Flex direction="row" justify="space-between" p={20}>
          <Pill
            disabled={!hasPrevious}
            onClick={() => {
              if (hasPrevious) {
                setCurrentPage(currentPage - 1)
                scrollViewRef.current?.scrollTo(0, 0)
              }
            }}
          >
            Previous
          </Pill>
          <Pill
            disabled={!hasNext}
            onClick={() => {
              if (hasNext) {
                setCurrentPage(currentPage + 1)
                scrollViewRef.current?.scrollTo(0, 0)
              }
            }}
          >
            Next
          </Pill>
        </Flex>
      </ScrollView>
    </>
  )
}
