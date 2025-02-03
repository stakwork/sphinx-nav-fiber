import { useRef } from 'react'
import styled from 'styled-components'
import { SelectWithPopover } from '~/components/App/SideBar/Dropdown'
import { FilterSearch } from '~/components/App/SideBar/FilterSearch'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchFilterCloseIcon from '~/components/Icons/SearchFilterCloseIcon'
import SearchFilterIcon from '~/components/Icons/SearchFilterIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SearchBar } from '~/components/SearchBar'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { Flex } from '~/components/common/Flex'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { colors } from '~/utils/colors'
import { LatestView } from '../Latest'
import { Relevance } from '../Relevance'
import { EpisodeSkeleton } from '../Relevance/EpisodeSkeleton'
import { Trending } from '../Trending'

export const MENU_WIDTH = 390

export const RegularView = () => {
  const { isFetching: isLoading, setSidebarFilter } = useDataStore((s) => s)

  const { navigateToNode } = useNodeNavigation()

  const filteredNodes = useFilteredNodes()

  const { currentSearch: searchTerm } = useAppStore((s) => s)

  const [trendingTopicsFeatureFlag] = useFeatureFlagStore((s) => [s.trendingTopicsFeatureFlag])

  const componentRef = useRef<HTMLDivElement | null>(null)

  return (
    <>
      <SearchWrapper className={clsx({ 'has-shadow': isScrolled })}>
        <SearchFilterIconWrapper>
          <Search>
            <SearchBar />
            <InputButton
              data-testid="search_action_icon"
              onClick={() => {
                if (searchTerm) {
                  setValue('search', '')
                  clearSearch()
                  setSidebarFilter('all')
                  navigateToNode(null)
                  navigate(`/`)

                  return
                }

                if (typing.trim() === '') {
                  return
                }

                const encodedQuery = typing.replace(/\s+/g, '+')

                navigate(`/search?q=${encodedQuery}`)
              }}
            >
              {!isLoading ? (
                <>{searchTerm?.trim() ? <ClearIcon /> : <SearchIcon />}</>
              ) : (
                <ClipLoader color={colors.SECONDARY_BLUE} data-testid="loader" size="20" />
              )}
            </InputButton>
          </Search>

          <IconWrapper data-testid="search_filter_icon" isFilterOpen={isFilterOpen} onClick={handleFilterIconClick}>
            {isFilterOpen ? <SearchFilterCloseIcon /> : <SearchFilterIcon />}
          </IconWrapper>

          <FilterSearch anchorEl={anchorEl} onClose={handleCloseFilterSearch} setAnchorEl={setAnchorEl} />
        </SearchFilterIconWrapper>
        {searchTerm && (
          <SearchDetails>
            {isLoading ? (
              <FetchLoaderText />
            ) : (
              <>
                <div className="left">
                  <span className="count">{filteredNodes.length}</span>
                  <span className="label"> results</span>
                </div>
                <div className="right" style={{ alignItems: 'center' }}>
                  <SelectWithPopover />
                </div>
              </>
            )}
          </SearchDetails>
        )}
      </SearchWrapper>
      <ScrollWrapper ref={componentRef}>
        {!searchTerm && trendingTopicsFeatureFlag && (
          <TrendingWrapper>
            <Trending />
          </TrendingWrapper>
        )}
        {!searchTerm && <LatestView />}
        {isLoading ? <EpisodeSkeleton /> : <Relevance isSearchResult={!!searchTerm} />}
      </ScrollWrapper>
    </>
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
