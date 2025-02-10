import { useRef } from 'react'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { LatestView } from '../Latest'
import { Relevance } from '../Relevance'
import { EpisodeSkeleton } from '../Relevance/EpisodeSkeleton'
import { Trending } from '../Trending'

export const MENU_WIDTH = 390

export const RegularView = () => {
  const { isFetching: isLoading } = useDataStore((s) => s)

  const { currentSearch: searchTerm } = useAppStore((s) => s)

  const [trendingTopicsFeatureFlag] = useFeatureFlagStore((s) => [s.trendingTopicsFeatureFlag])

  const componentRef = useRef<HTMLDivElement | null>(null)

  return (
    <ScrollWrapper ref={componentRef}>
      {!searchTerm && trendingTopicsFeatureFlag && (
        <TrendingWrapper>
          <Trending />
        </TrendingWrapper>
      )}
      {!searchTerm && <LatestView />}
      {isLoading ? <EpisodeSkeleton /> : <Relevance isSearchResult={!!searchTerm} />}
    </ScrollWrapper>
  )
}

const ScrollWrapper = styled(Flex)(() => ({
  overflow: 'auto',
  flex: 1,
  width: '100%',
}))

const TrendingWrapper = styled(Flex)`
  padding: 0;
  margin-bottom: 36px;
  margin-top: 20px;
`
