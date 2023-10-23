import { Slide } from '@mui/material'
import clsx from 'clsx'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { SelectWithPopover } from '~/components/App/SideBar/Dropdown'
import ChevronLeftIcon from '~/components/Icons/ChevronLeftIcon'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SearchBar } from '~/components/SearchBar'
import { Flex } from '~/components/common/Flex'
import { FetchLoaderText } from '~/components/common/Loader'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useFilteredNodes, useSelectedNode } from '~/stores/useDataStore'
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
  const [isLoading, setTeachMe, setSidebarFilter] = useDataStore((s) => [
    s.isFetching,
    s.setTeachMe,
    s.setSidebarFilter,
  ])

  const filteredNodes = useFilteredNodes()

  const [setSidebarOpen, searchTerm, clearSearch] = useAppStore((s) => [
    s.setSidebarOpen,
    s.currentSearch,
    s.clearSearch,
  ])

  const { setValue } = useFormContext()
  const componentRef = useRef<HTMLDivElement | null>(null)
  const [isScrolled, setIsScrolled] = useState(false)

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

  return (
    <Wrapper ref={ref} id="sidebar-wrapper">
      <TitlePlaceholder />

      <SearchWrapper className={clsx({ 'has-shadow': isScrolled })}>
        <Search>
          <SearchBar onSubmit={onSubmit} />
          <InputButton
            onClick={() => {
              if (searchTerm) {
                setValue('search', '')
                clearSearch()
                setSidebarFilter('all')

                return
              }

              onSubmit?.()
            }}
          >
            {!isLoading ? (
              <>{searchTerm ? <ClearIcon /> : <SearchIcon />}</>
            ) : (
              <ClipLoader color={colors.SECONDARY_BLUE} size="20" />
            )}
          </InputButton>
        </Search>
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
                <div className="right">
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
        {!searchTerm && (
          <TrendingWrapper>
            <Trending onSubmit={onSubmit} />
          </TrendingWrapper>
        )}
        <Flex>{isLoading ? <EpisodeSkeleton /> : <LatestView isSearchResult={!!searchTerm} />}</Flex>
      </ScrollWrapper>
    </Wrapper>
  )
})

export const SideBar = ({ onSubmit }: Props) => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen)
  const selectedNode = useSelectedNode()
  const subViewIsOpen = !!selectedNode && selectedNode.node_type !== 'topic' && sidebarIsOpen
  const [showTeachMe] = useDataStore((s) => [s.showTeachMe])

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

SideBar.displayName = 'Sidebar'
