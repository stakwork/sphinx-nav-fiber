import { Slide } from '@mui/material'
import { forwardRef } from 'react'
import styled from 'styled-components'
import ChevronLeftIcon from '~/components/Icons/ChevronLeftIcon'
import { Flex } from '~/components/common/Flex'
import { useHasAiChats } from '~/stores/useAiSummaryStore'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'
import { AiView } from './AiView'
import { RegularView } from './RegularView'
import { SideBarSubView } from './SidebarSubView'
import { Tab } from './Tab'

export const MENU_WIDTH = 390

type ContentProp = {
  subViewOpen: boolean
}

// eslint-disable-next-line react/display-name
const Content = forwardRef<HTMLDivElement, ContentProp>(({ subViewOpen }, ref) => {
  const { setSidebarOpen } = useAppStore((s) => s)

  const hasAiChats = useHasAiChats()

  return (
    <Wrapper ref={ref} id="sidebar-wrapper">
      <TitlePlaceholder />
      {!hasAiChats ? <RegularView /> : <AiView />}
      {!subViewOpen && (
        <CollapseButton
          onClick={() => {
            setSidebarOpen(false)
          }}
        >
          <ChevronLeftIcon />
        </CollapseButton>
      )}
    </Wrapper>
  )
})

const hideSubViewFor = ['topic', 'person', 'guest', 'event', 'organization', 'place', 'project', 'software']

const hasOnlyNameProperty = (obj: object | null | undefined): boolean => {
  if (obj === undefined || obj === null) {
    return false
  }

  const keys = Object.keys(obj)
  const nonEmptyKeys = keys.filter((key) => key !== 'pubkey')

  return nonEmptyKeys.length === 1 && nonEmptyKeys[0] === 'name'
}

export const SideBar = () => {
  const { sidebarIsOpen } = useAppStore((s) => s)
  const selectedNode = useSelectedNode()

  const subViewIsOpen =
    !!selectedNode &&
    sidebarIsOpen &&
    !hideSubViewFor.includes(selectedNode.node_type) &&
    !hasOnlyNameProperty(selectedNode.properties)

  return (
    <>
      <Slide direction="right" in={sidebarIsOpen} mountOnEnter unmountOnExit>
        <Content subViewOpen={subViewIsOpen} />
      </Slide>
      <SideBarSubView open={subViewIsOpen} />
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

const TitlePlaceholder = styled(Flex)`
  flex: 0 0 64px;
  background: ${colors.BG2};
`

SideBar.displayName = 'Sidebar'
