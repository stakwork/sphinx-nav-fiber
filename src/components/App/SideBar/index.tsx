import { Button, Slide } from '@mui/material'
import Popover from '@mui/material/Popover'
import clsx from 'clsx'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { SelectWithPopover } from '~/components/App/SideBar/Dropdown'
import ChevronLeftIcon from '~/components/Icons/ChevronLeftIcon'
import ClearIcon from '~/components/Icons/ClearIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import SearchFilterCloseIcon from '~/components/Icons/SearchFilterCloseIcon'
import SearchFilterIcon from '~/components/Icons/SearchFilterIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { SearchBar } from '~/components/SearchBar'
import { Flex } from '~/components/common/Flex'
import { FetchLoaderText } from '~/components/common/Loader'
import { api } from '~/network/api'
import { getSchemaAll } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useFilteredNodes, useSelectedNode } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { colors } from '~/utils/colors'
import { LatestView } from './Latest'
import { EpisodeSkeleton } from './Relevance/EpisodeSkeleton'
import { SideBarSubView } from './SidebarSubView'
import { Tab } from './Tab'
import { Trending } from './Trending'

export const MENU_WIDTH = 390

type Props = {
  onSubmit?: () => void
}

type ContentProp = {
  subViewOpen: boolean
  onSubmit?: () => void
}

// eslint-disable-next-line react/display-name
const Content = forwardRef<HTMLDivElement, ContentProp>(({ onSubmit, subViewOpen }, ref) => {
  const { isFetching: isLoading, setTeachMe, setSidebarFilter, setSelectedNode } = useDataStore((s) => s)

  const filteredNodes = useFilteredNodes()

  const { setSidebarOpen, currentSearch: searchTerm, clearSearch, searchFormValue } = useAppStore((s) => s)
  const [trendingTopicsFeatureFlag] = useFeatureFlagStore((s) => [s.trendingTopicsFeatureFlag])

  const { setValue, watch } = useFormContext()
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isFilterOpen, setIsFilterOpen] = useState(false)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [schemaAll, setSchemaAll] = useState<SchemaExtended[]>([])
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]) // State to store selected node types
  const [showAllSchemas, setShowAllSchemas] = useState(false)

  const handleViewMoreClick = () => {
    setShowAllSchemas(true)
  }

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

  const handleFilterIconClick = async (event: React.MouseEvent<HTMLElement>) => {
    if (isFilterOpen) {
      setAnchorEl(null)
    } else {
      setAnchorEl(event.currentTarget)

      try {
        const response = await getSchemaAll()

        setSchemaAll(response.schemas)
      } catch (error) {
        console.error('Error fetching schema:', error)
      }
    }

    setIsFilterOpen((prev) => !prev)
    setSelectedTypes([])
    setShowAllSchemas(false)
  }

  const handleSchemaTypeClick = (type: string) => {
    setSelectedTypes((prevSelectedTypes) =>
      prevSelectedTypes.includes(type) ? prevSelectedTypes.filter((t) => t !== type) : [...prevSelectedTypes, type],
    )
  }

  const handleClear = async () => {
    setSelectedTypes([])
  }

  const handleSave = async () => {
    const endPoint = 'graph/search'

    const queryParams = new URLSearchParams({
      node_type: selectedTypes.join(','),
    })

    try {
      await api.get(`/${endPoint}?${queryParams.toString()}`)
    } catch (error) {
      console.warn(error)
    }
  }

  return (
    <Wrapper ref={ref} id="sidebar-wrapper">
      <TitlePlaceholder />

      <SearchWrapper className={clsx({ 'has-shadow': isScrolled })}>
        <SearchFilterIconWrapper>
          <Search>
            <SearchBar onSubmit={onSubmit} />
            <InputButton
              data-testid="search_action_icon"
              onClick={() => {
                if (searchTerm) {
                  setValue('search', '')
                  clearSearch()
                  setSidebarFilter('all')
                  setSelectedNode(null)

                  return
                }

                if (typing.trim() === '') {
                  return
                }

                onSubmit?.()
              }}
            >
              {!isLoading ? (
                <>{searchTerm?.trim() ? <ClearIcon /> : <SearchIcon />}</>
              ) : (
                <ClipLoader color={colors.SECONDARY_BLUE} data-testid="loader" size="20" />
              )}
            </InputButton>
          </Search>
          <IconWrapper isFilterOpen={isFilterOpen} onClick={handleFilterIconClick}>
            {isFilterOpen ? <SearchFilterCloseIcon /> : <SearchFilterIcon />}
          </IconWrapper>
          <SearchFilterPopover
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left',
            }}
            anchorPosition={{
              top: 200,
              left: 0,
            }}
            onClose={() => {
              setAnchorEl(null)
              setIsFilterOpen(false)
            }}
            open={Boolean(anchorEl)}
            PaperProps={{
              style: {
                marginTop: '13px',
                marginLeft: '30px',
              },
            }}
            transformOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
          >
            <PopoverHeader>
              <div>Type</div>
              <div>{selectedTypes.length} Selected</div>
            </PopoverHeader>
            <PopoverBody>
              <SchemaTypeWrapper>
                {(showAllSchemas ? schemaAll : schemaAll.slice(0, 15)).map((schema) => (
                  <SchemaType
                    key={schema.type}
                    isSelected={selectedTypes.includes(schema.type as string)}
                    onClick={() => handleSchemaTypeClick(schema?.type as string)}
                  >
                    {schema.type}
                  </SchemaType>
                ))}
              </SchemaTypeWrapper>
              {!showAllSchemas && schemaAll.length > 15 && (
                <ViewMoreButton onClick={handleViewMoreClick}>
                  <PlusIconWrapper>
                    <PlusIcon /> View More
                  </PlusIconWrapper>
                </ViewMoreButton>
              )}
            </PopoverBody>
            <LineBar />
            <PopoverFooter>
              <Flex direction="row" mb={6}>
                <DeleteButton
                  color="secondary"
                  // disabled={topicIsLoading || !node}
                  onClick={handleClear}
                  size="large"
                  style={{ marginRight: 20 }}
                  variant="contained"
                >
                  <ClearButtonWrapper>
                    <ClearIcon />
                  </ClearButtonWrapper>
                  Clear
                </DeleteButton>
                <ShowResultButton
                  color="secondary"
                  // disabled={shouldDisableSave}
                  onClick={handleSave}
                  size="large"
                  variant="contained"
                >
                  Show Results
                  {/* {loading && (*/}
                  {/*    <ClipLoaderWrapper>*/}
                  {/*      <ClipLoader color={colors.lightGray} size={12} />*/}
                  {/*    </ClipLoaderWrapper>*/}
                  {/* )}*/}
                </ShowResultButton>
              </Flex>
            </PopoverFooter>
          </SearchFilterPopover>
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
                  {/* <TeachMe /> */}
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
            setTeachMe(false)
          }}
        >
          <ChevronLeftIcon />
        </CollapseButton>
      )}
      <ScrollWrapper ref={componentRef}>
        {!searchTerm && trendingTopicsFeatureFlag && (
          <TrendingWrapper>
            <Trending onSubmit={onSubmit} />
          </TrendingWrapper>
        )}
        <Flex>{isLoading ? <EpisodeSkeleton /> : <LatestView isSearchResult={!!searchTerm} />}</Flex>
      </ScrollWrapper>
    </Wrapper>
  )
})

const hideSubViewFor = ['topic', 'person', 'guest', 'event', 'organization', 'place', 'project', 'software']

export const SideBar = ({ onSubmit }: Props) => {
  const { sidebarIsOpen } = useAppStore((s) => s)
  const selectedNode = useSelectedNode()

  const subViewIsOpen = !!selectedNode && sidebarIsOpen && !hideSubViewFor.includes(selectedNode.node_type)

  const { showTeachMe } = useDataStore((s) => s)

  return (
    <>
      <Slide direction="right" in={sidebarIsOpen} mountOnEnter unmountOnExit>
        <Content onSubmit={onSubmit} subViewOpen={subViewIsOpen} />
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

const SearchFilterPopover = styled(Popover)`
  .MuiPaper-root {
    background: ${colors.BG2};
    padding: 16px;
    min-width: 360px;
    color: ${colors.white};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 9px;
    max-width: 361px;
    border: 2px solid ${colors.black};
  }
`

const PopoverHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 8px;
  font-weight: bold;
`

const PopoverBody = styled.div`
  padding: 16px 0;
`

const PopoverFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
`

const LineBar = styled.div`
  border: 1px solid ${colors.black};
  margin: 4px auto;
`

const PlusIconWrapper = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`

const SchemaTypeWrapper = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'flex-start',
})`
  flex-wrap: wrap;
  gap: 10px;
  max-height: 400px;
  overflow: auto;
`

const SchemaType = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  justify: 'flex-start',
})<{ isSelected: boolean }>`
  color: ${({ isSelected }) => (isSelected ? colors.black : colors.white)};
  background: ${({ isSelected }) => (isSelected ? colors.white : colors.BUTTON1_PRESS)};
  padding: 6px 10px 6px 8px;
  font-family: Barlow;
  font-size: 13px;
  font-style: normal;
  font-weight: 500;
  line-height: 15px;
  letter-spacing: 0.78px;
  margin: 0 8px;
  border-radius: 200px;
  cursor: pointer;

  &:hover {
    background: ${({ isSelected }) => (isSelected ? colors.white : colors.BUTTON1_PRESS)};
  }

  &:active {
    background: ${colors.white};
    color: ${colors.black};
  }
`

const ViewMoreButton = styled.button`
  background: transparent;
  color: ${colors.white};
  border: none;
  padding: 8px 12px;
  margin-top: 10px;
  cursor: pointer;
  border-radius: 4px;
  font-family: Barlow;
  font-size: 13px;
  font-weight: 500;

  &:hover {
    background: ${colors.BUTTON1_HOVER};
  }

  &:active {
    background: ${colors.BUTTON1_PRESS};
  }
`

// const ClipLoaderWrapper = styled.span`
//   margin-top: 3px;
// `

const DeleteButton = styled(Button)`
  && {
    color: ${colors.white};
    background-color: ${colors.BUTTON1};
    padding-left: 4px;
    &:hover,
    &:active,
    &:focus {
      color: rgba(255, 255, 255, 0.85);
      background-color: ${colors.BUTTON1};
    }
  }
`

const ClearButtonWrapper = styled.span`
  svg {
    width: 32px;
    height: 32px;
    color: ${colors.GRAY7};
    fill: none;
    margin-top: 2px;
  }
`

const ShowResultButton = styled(Button)`
  && {
    flex: 1;
    padding: 2px 55px;
  }
`

SideBar.displayName = 'Sidebar'
