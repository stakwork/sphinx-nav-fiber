import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { SelectWithPopover } from '~/components/App/SideBar/Dropdown'
import { FilterSearch } from '~/components/App/SideBar/FilterSearch'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchFilterCloseIcon from '~/components/Icons/SearchFilterCloseIcon'
import SearchFilterIcon from '~/components/Icons/SearchFilterIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SearchBar } from '~/components/SearchBar'
import { Flex } from '~/components/common/Flex'
import { FetchLoaderText } from '~/components/common/Loader'
import { getSchemaAll } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useFilteredNodes } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useUpdateSelectedNode } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { LatestView } from '../Latest'
import { Relevance } from '../Relevance'
import { EpisodeSkeleton } from '../Relevance/EpisodeSkeleton'
import { Trending } from '../Trending'

export const MENU_WIDTH = 390

// eslint-disable-next-line react/display-name
export const RegularView = () => {
  const { isFetching: isLoading, setSidebarFilter } = useDataStore((s) => s)
  const [schemaAll, setSchemaAll] = useSchemaStore((s) => [s.schemas, s.setSchemas])

  const setSelectedNode = useUpdateSelectedNode()

  const filteredNodes = useFilteredNodes()

  const { currentSearch: searchTerm, clearSearch, searchFormValue, setCurrentSearch } = useAppStore((s) => s)

  const [trendingTopicsFeatureFlag] = useFeatureFlagStore((s) => [s.trendingTopicsFeatureFlag])

  const { setValue, watch } = useFormContext()
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [showAllSchemas, setShowAllSchemas] = useState(false)

  useEffect(() => {
    setValue('search', searchFormValue)
  }, [setValue, searchFormValue])

  useEffect(() => {
    const component = componentRef.current

    if (!component) {
      return
    }

    const handleScroll = () => {
      setIsScrolled(component?.scrollTop > 0)
    }

    component.addEventListener('scroll', handleScroll)
  }, [])

  const typing = watch('search')

  useEffect(() => {
    const fetchSchemaData = async () => {
      try {
        const response = await getSchemaAll()

        setSchemaAll(response.schemas.filter((schema) => !schema.is_deleted))
      } catch (error) {
        console.error('Error fetching schema:', error)
      }
    }

    fetchSchemaData()
  }, [setSchemaAll])

  const handleFilterIconClick = (event: React.MouseEvent<HTMLElement>) => {
    if (isFilterOpen) {
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)
    }

    setIsFilterOpen((prev) => !prev)
    setShowAllSchemas(false)
  }

  const navigate = useNavigate()

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
                  setSelectedNode(null)
                  setCurrentSearch('')
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

          <FilterSearch
            anchorEl={anchorEl}
            schemaAll={schemaAll}
            setShowAllSchemas={setShowAllSchemas}
            showAllSchemas={showAllSchemas}
          />
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

const SearchWrapper = styled(Flex).attrs({
  direction: 'column',
  justify: 'center',
  align: 'stretch',
})(({ theme }) => ({
  padding: theme.spacing(3.75, 2),
  [theme.breakpoints.up('sm')]: {
    padding: '12px',
  },

  '&.has-shadow': {
    borderBottom: '1px solid rgba(0, 0, 0, 0.25)',
    background: colors.BG1,
    boxShadow: '0px 1px 6px 0px rgba(0, 0, 0, 0.20)',
  },
}))

const Search = styled(Flex).attrs({
  direction: 'row',
  justify: 'center',
  align: 'center',
})`
  flex-grow: 1;
`

const SearchDetails = styled(Flex).attrs({
  direction: 'row',
  justify: 'space-between',
  align: 'center',
})`
  flex-grow: 1;
  color: ${colors.GRAY6};
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  margin-top: 10px;
  padding: 0 8px;
  .count {
    color: ${colors.white};
  }

  .right {
    display: flex;
  }
`

const InputButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 5,
})`
  font-size: 32px;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  margin-left: -42px;
  z-index: 2;

  &:hover {
    /* background-color: ${colors.gray200}; */
  }

  ${SearchWrapper} input:focus + & {
    color: ${colors.primaryBlue};
  }
`

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

const SearchFilterIconWrapper = styled(Flex)`
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  gap: 10px;
`

const IconWrapper = styled.div<{ isFilterOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s;
  margin: 1px 2px 0 0;
  border-radius: 8px;
  width: 32px;
  height: 32px;
  background-color: ${({ isFilterOpen }) => (isFilterOpen ? colors.white : 'transparent')};

  &:hover {
    background-color: ${({ isFilterOpen }) =>
      isFilterOpen ? 'rgba(255, 255, 255, 0.85)' : 'rgba(255, 255, 255, 0.2)'};
  }

  svg {
    width: 15px;
    height: ${({ isFilterOpen }) => (isFilterOpen ? '11px' : '24px')};
    color: ${({ isFilterOpen }) => (isFilterOpen ? colors.black : colors.GRAY7)};
    fill: none;
  }
`
