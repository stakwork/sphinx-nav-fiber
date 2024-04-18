import { Slide } from '@mui/material'
import clsx from 'clsx'
import { forwardRef, useEffect, useRef, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import SearchIcon from '~/components/Icons/SearchIcon'
import { SearchBar } from '~/components/SearchBar'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'
import { SideBarSubView } from './SidebarSubView'
import { Tab } from './Tab'

export const MENU_WIDTH = 390

type Props = {
  onSubmit?: () => void
}

type ContentProp = {
  onSubmit?: () => void
}

// eslint-disable-next-line react/display-name
const Content = forwardRef<HTMLDivElement, ContentProp>(({ onSubmit }, ref) => {
  const [isLoading] = useGraphStore((s) => [s.isFetching])

  const [searchTerm, clearSearch] = useAppStore((s) => [s.currentSearch, s.clearSearch])

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
            data-testid="search_action_icon"
            onClick={() => {
              if (searchTerm) {
                setValue('search', '')
                clearSearch()

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
      </SearchWrapper>
    </Wrapper>
  )
})

const hideSubViewFor = ['topic', 'person', 'guest', 'event', 'organization', 'place', 'project', 'software']

export const SideBar = ({ onSubmit }: Props) => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen)
  const selectedNode = useSelectedNode()

  const subViewIsOpen = !!selectedNode && sidebarIsOpen && !hideSubViewFor.includes(selectedNode.node_type)

  const [showTeachMe] = useDataStore((s) => [s.showTeachMe])

  return (
    <>
      <Slide direction="right" in={sidebarIsOpen} mountOnEnter unmountOnExit>
        <Content onSubmit={onSubmit} />
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

const TitlePlaceholder = styled(Flex)`
  height: 64px;
  background: ${colors.BG2};
`

SideBar.displayName = 'Sidebar'
