import { Slide } from '@mui/material'
import clsx from 'clsx'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { SelectWithPopover } from '~/components/App/SideBar/Dropdown'
import { FilterSearch } from '~/components/App/SideBar/FilterSearch'
import ChevronLeftIcon from '~/components/Icons/ChevronLeftIcon'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchFilterCloseIcon from '~/components/Icons/SearchFilterCloseIcon'
import SearchFilterIcon from '~/components/Icons/SearchFilterIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SearchBar } from '~/components/SearchBar'
import { Flex } from '~/components/common/Flex'
import { FetchLoaderText } from '~/components/common/Loader'
import { getSchemaAll } from '~/network/fetchSourcesData'
import { useAiSummaryStore, useHasAiChats } from '~/stores/useAiSummaryStore'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useFilteredNodes } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useSelectedNode, useUpdateSelectedNode } from '~/stores/useGraphStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { AiSearch } from './AiSearch'
import { AiSummary } from './AiSummary'
import { LatestView } from './Latest'
import { Relevance } from './Relevance'
import { EpisodeSkeleton } from './Relevance/EpisodeSkeleton'
import { SideBarSubView } from './SidebarSubView'
import { Tab } from './Tab'
import { Trending } from './Trending'

export const MENU_WIDTH = 390

type ContentProp = {
  subViewOpen: boolean
}

// eslint-disable-next-line react/display-name
const Content = forwardRef<HTMLDivElement, ContentProp>(({ subViewOpen }, ref) => {
  const { isFetching: isLoading, setSidebarFilter, setFilters } = useDataStore((s) => s)
  const [schemaAll, setSchemaAll] = useSchemaStore((s) => [s.schemas, s.setSchemas])

  const { aiSummaryAnswers } = useAiSummaryStore((s) => s)
  const setSelectedNode = useUpdateSelectedNode()

  const filteredNodes = useFilteredNodes()

  const { setSidebarOpen, currentSearch: searchTerm, clearSearch, searchFormValue } = useAppStore((s) => s)

  const [trendingTopicsFeatureFlag] = useFeatureFlagStore((s) => [s.trendingTopicsFeatureFlag])

  const { setValue, watch } = useFormContext()
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
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

  const handleFiltersApply = () => {
    setFilters({
      node_type: selectedTypes,
    })

    // onSubmit?.()
  }

  const navigate = useNavigate()

  const hasAiChats = useHasAiChats()

  return (
    <Wrapper ref={ref} id="sidebar-wrapper">
      <TitlePlaceholder />
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
            handleApply={handleFiltersApply}
            schemaAll={schemaAll}
            selectedTypes={selectedTypes}
            setSelectedTypes={setSelectedTypes}
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
      {!subViewOpen && (
        <CollapseButton
          onClick={() => {
            setSidebarOpen(false)
          }}
        >
          <ChevronLeftIcon />
        </CollapseButton>
      )}
      <ScrollWrapper ref={componentRef}>
        {!searchTerm && !hasAiChats && trendingTopicsFeatureFlag && (
          <TrendingWrapper>
            <Trending />
          </TrendingWrapper>
        )}
        <Flex>
          {Object.keys(aiSummaryAnswers).map((i: string) => (
            <AiSummary key={i} question={i} response={aiSummaryAnswers[i]} />
          ))}

          {isLoading ? <EpisodeSkeleton /> : !hasAiChats && <LatestView isSearchResult={!!searchTerm || hasAiChats} />}
        </Flex>
        {!hasAiChats && <Relevance isSearchResult={!!searchTerm || hasAiChats} />}
      </ScrollWrapper>
      {hasAiChats ? <AiSearch /> : null}
    </Wrapper>
  )
})

const hideSubViewFor = ['topic', 'person', 'guest', 'event', 'organization', 'place', 'project', 'software']

export const SideBar = () => {
  const { sidebarIsOpen } = useAppStore((s) => s)
  const selectedNode = useSelectedNode()

  const subViewIsOpen = !!selectedNode && sidebarIsOpen && !hideSubViewFor.includes(selectedNode.node_type)

  const { showTeachMe } = useDataStore((s) => s)

  return (
    <>
      <Slide direction="right" in={sidebarIsOpen} mountOnEnter unmountOnExit>
        <Content subViewOpen={subViewIsOpen} />
      </Slide>
      <SideBarSubView open={subViewIsOpen || !!showTeachMe} />
      {!sidebarIsOpen && <Tab />}
    </>
  )
}

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'relative',
  background: colors.BG1,
  height: '100vh',
  width: '100%',
  zIndex: 30,
  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
  },
}))

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

const CollapseButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 8,
})(({ theme }) => ({
  backgroundColor: colors.BG1_NORMAL,
  cursor: 'pointer',
  transitionDuration: '0.2s',
  position: 'absolute',
  right: '0px',
  top: '50%',
  zIndex: 1,
  width: '24px',
  height: '48px',
  transform: 'translateY(-50%)',
  borderRadius: '0px 6px 6px 0px',
  boxShadow: '2px 0px 6px 0px rgba(0, 0, 0, 0.25) inset',
  color: colors.white,

  [theme.breakpoints.up('sm')]: {
    left: '100%',
  },
  '&:hover': {
    backgroundColor: colors.BG1_HOVER,
  },
  '&:active': {
    backgroundColor: colors.BG1_PRESS,
    color: colors.GRAY6,
  },
}))

const ScrollWrapper = styled(Flex)(() => ({
  overflow: 'auto',
  flex: 1,
  width: '100%',
}))

const TitlePlaceholder = styled(Flex)`
  height: 64px;
  background: ${colors.BG2};
`

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

SideBar.displayName = 'Sidebar'
