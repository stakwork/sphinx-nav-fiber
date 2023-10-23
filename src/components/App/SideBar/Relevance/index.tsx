import { Button } from '@mui/material'
import { useCallback, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { ScrollView } from '~/components/ScrollView'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useFilteredNodes } from '~/stores/useDataStore'
import { NodeExtended } from '~/types'
import { formatDescription } from '~/utils/formatDescription'
import { saveConsumedContent } from '~/utils/relayHelper'
import { useIsMatchBreakpoint } from '~/utils/useIsMatchBreakpoint'
import { Episode } from './Episode'

type Props = {
  isSearchResult: boolean
}

export const Relevance = ({ isSearchResult }: Props) => {
  const scrollViewRef = useRef<HTMLDivElement | null>(null)

  const pageSize = !isSearchResult ? 10 : 80

  const [setSelectedNode, setSelectedTimestamp] = useDataStore((s) => [s.setSelectedNode, s.setSelectedTimestamp])

  const [setSidebarOpen] = useAppStore((s) => [s.setSidebarOpen])
  const setRelevanceSelected = useAppStore((s) => s.setRelevanceSelected)

  const [currentPage, setCurrentPage] = useState(0)

  const filteredNodes = useFilteredNodes()

  const startSlice = currentPage * pageSize
  const endSlice = startSlice + pageSize

  const hasNext = filteredNodes.length - 1 > endSlice

  const isMobile = useIsMatchBreakpoint('sm', 'down')

  const currentNodes = useMemo(
    () => [...filteredNodes].sort((a, b) => (b.date || 0) - (a.date || 0)).slice(0, endSlice),
    [filteredNodes, endSlice],
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
      <ScrollView ref={scrollViewRef} id="search-result-list" shrink={1}>
        {currentNodes.map((n, index) => {
          const {
            image_url: imageUrl,
            date,
            boost,
            type,
            id,
            episode_title: episodeTitle,
            show_title: showTitle,
            node_type: nodeType,
            text,
            name,
            profile_picture: profilePicture,
            verified = false,
            twitter_handle: twitterHandle,
          } = n || {}

          return (
            <Episode
              // eslint-disable-next-line react/no-array-index-key
              key={index.toString()}
              boostCount={boost || 0}
              date={date || 0}
              episodeTitle={formatDescription(episodeTitle)}
              id={id}
              imageUrl={imageUrl || ''}
              name={name || ''}
              onClick={() => handleNodeClick(n)}
              profilePicture={profilePicture}
              showTitle={formatDescription(showTitle)}
              text={text || ''}
              twitterHandle={twitterHandle}
              type={type || nodeType}
              verified={verified}
            />
          )
        })}

        <LoadMoreWrapper align="center" background="BG1" direction="row" justify="center">
          <Button
            disabled={!hasNext}
            onClick={() => {
              if (hasNext) {
                setCurrentPage(currentPage + 1)
                scrollViewRef.current?.scrollTo(0, 0)
              }
            }}
            size="medium"
          >
            Load More
          </Button>
        </LoadMoreWrapper>
      </ScrollView>
    </>
  )
}

const LoadMoreWrapper = styled(Flex)`
  flex: 0 0 86px;
`
