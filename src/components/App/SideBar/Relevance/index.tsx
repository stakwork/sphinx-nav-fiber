import { Button } from '@mui/material'
import { memo, useCallback, useMemo, useRef, useState } from 'react'
import styled from 'styled-components'
import { ScrollView } from '~/components/ScrollView'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useFilteredNodes } from '~/stores/useDataStore'
import { useUpdateSelectedNode } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'
import { formatDescription } from '~/utils/formatDescription'
import { saveConsumedContent } from '~/utils/relayHelper'
import { useIsMatchBreakpoint } from '~/utils/useIsMatchBreakpoint'
import { Episode } from './Episode'
import { adaptTweetNode } from '~/utils/twitterAdapter'

type Props = {
  isSearchResult: boolean
}

// eslint-disable-next-line no-underscore-dangle
const _Relevance = ({ isSearchResult }: Props) => {
  const scrollViewRef = useRef<HTMLDivElement | null>(null)

  const pageSize = !isSearchResult ? 10 : 80

  const { setSelectedTimestamp, nextPage } = useDataStore((s) => s)
  const setSelectedNode = useUpdateSelectedNode()

  const { currentSearch, setSidebarOpen, setRelevanceSelected } = useAppStore((s) => s)

  const [currentPage, setCurrentPage] = useState(0)
  const [buttonKey, setButtonKey] = useState(0)

  const filteredNodes = useFilteredNodes()

  const startSlice = currentPage * pageSize
  const endSlice = startSlice + pageSize

  const hasNext = filteredNodes && filteredNodes.length > 0 ? filteredNodes.length - 1 > endSlice : false

  const isMobile = useIsMatchBreakpoint('sm', 'down')

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

  const handleLoadMoreClick = () => {
    nextPage()

    if (hasNext) {
      setCurrentPage(currentPage + 1)
      setButtonKey((prevKey) => prevKey + 1)
    }
  }

  const currentNodes = useMemo(() => {
    if (filteredNodes) {
      const nodes = [...filteredNodes].sort((a, b) => (b.date || 0) - (a.date || 0))

      if (currentSearch) {
        nodes.sort((a, b) => {
          const aValue = a.node_type === 'topic' && a.name.toLowerCase() === currentSearch.toLowerCase() ? 1 : 0
          const bValue = b.node_type === 'topic' && b.name.toLowerCase() === currentSearch.toLowerCase() ? 1 : 0

          return bValue - aValue
        })
      }

      return nodes.slice(0, endSlice)
    }

    return []
  }, [filteredNodes, currentSearch, endSlice])

  return (
    <>
      <ScrollView ref={scrollViewRef} id="search-result-list" shrink={1}>
        {(currentNodes ?? []).map((n, index) => {
          const adaptedNode = adaptTweetNode(n)

          const {
            image_url: imageUrl,
            date,
            boost,
            type,
            episode_title: episodeTitle,
            show_title: showTitle,
            node_type: nodeType,
            text,
            source_link: sourceLink,
            link,
            name,
            verified = false,
            twitter_handle: twitterHandle,
          } = adaptedNode || {}

          return (
            <Episode
              // eslint-disable-next-line react/no-array-index-key
              key={index.toString()}
              boostCount={boost || 0}
              date={date || 0}
              episodeTitle={formatDescription(episodeTitle)}
              imageUrl={imageUrl || ''}
              link={link}
              name={name || ''}
              onClick={() => {
                handleNodeClick(n)
              }}
              showTitle={formatDescription(showTitle)}
              sourceLink={sourceLink}
              text={text || ''}
              twitterHandle={twitterHandle}
              type={nodeType || type}
              verified={verified}
            />
          )
        })}

        <LoadMoreWrapper align="center" background="BG1" direction="row" justify="center">
          {hasNext && (
            <Button key={buttonKey} onClick={handleLoadMoreClick} size="medium">
              Load More
            </Button>
          )}
        </LoadMoreWrapper>
      </ScrollView>
    </>
  )
}

export const Relevance = memo(_Relevance)

const LoadMoreWrapper = styled(Flex)`
  flex: 0 0 86px;
`
