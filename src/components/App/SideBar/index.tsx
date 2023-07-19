import { Slide } from '@mui/material'
import { forwardRef, useMemo, useState } from 'react'
import { MdClose, MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import styled from 'styled-components'
import { CategorySelect } from '~/components/App/SideBar/CategorySelect'
import { SearchBar } from '~/components/SearchBar'
import { Flex } from '~/components/common/Flex'
import { Loader } from '~/components/common/Loader'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { SentimentAnalysis } from '../SecondarySidebar/Sentiment/SentimentAnalysis'
import { ActionsMenu, TabsVariants } from './ActionsMenu'
import { AskQuestion } from './AskQuestion'
import { Tab } from './Tab'
import { TeachMe } from './TeachMe'
import { View } from './View'

export const MENU_WIDTH = 433

type ComponentsMapperType = Record<TabsVariants, JSX.Element>

// eslint-disable-next-line react/display-name
const Content = forwardRef<HTMLDivElement>((props, ref) => {
  const ComponentsMapper: ComponentsMapperType = useMemo(
    () => ({
      askQuestion: <AskQuestion {...props} />,
      searchResults: <View {...props} />,
      teachMe: <TeachMe {...props} />,
      sentiment: <SentimentAnalysis {...props} />,
    }),
    [props],
  )

  const isLoading = useDataStore((s) => s.isFetching)
  const setCurrentSearch = useAppStore((s) => s.setCurrentSearch)
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen)

  const [selectedView, setSelectedView] = useState<TabsVariants>('searchResults')

  return (
    <Wrapper ref={ref} id="sidebar-wrapper">
      <SearchWrapper>
        <SearchBar />

        <CloseButton
          onClick={() => {
            setCurrentSearch('')
          }}
        >
          <MdClose fontSize={20} />
        </CloseButton>
        <CategoryWrapper direction="row">
          <CategorySelect />
        </CategoryWrapper>
      </SearchWrapper>
      <CollapseButton
        onClick={() => {
          setSidebarOpen(false)
        }}
      >
        <MdKeyboardDoubleArrowLeft fontSize={20} />
      </CollapseButton>

      <ActionsMenu active={selectedView} onChange={setSelectedView} />

      <ScrollWrapper>
        <Spacer />
        {isLoading ? <Loader color="primaryText1" /> : ComponentsMapper[selectedView]}
        <Spacer />
      </ScrollWrapper>
    </Wrapper>
  )
})

export const SideBar = () => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen)

  return (
    <>
      <Slide direction="right" in={sidebarIsOpen} mountOnEnter unmountOnExit>
        <Content />
      </Slide>
      {!sidebarIsOpen && <Tab />}
    </>
  )
}

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'relative',
  background: colors.body,
  height: '100vh',
  width: '100%',
  zIndex: 30,
  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
  },
}))

const SearchWrapper = styled(Flex).attrs({
  direction: 'row',
  justify: 'center',
})(({ theme }) => ({
  background: colors.dashboardHeader,
  padding: theme.spacing(3.75, 2),
  [theme.breakpoints.up('sm')]: {
    padding: theme.spacing(3.75),
  },
}))

const CloseButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 5,
})`
  background-color: ${colors.inputBg1};
  border-radius: 0 5px 5px 0;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    background-color: ${colors.gray200};
  }
`

const CollapseButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 8,
})(({ theme }) => ({
  backgroundColor: colors.dashboardHeader,
  borderRadius: '0 5px 5px 0',
  color: colors.mainBottomIcons,
  cursor: 'pointer',
  transitionDuration: '0.2s',
  position: 'absolute',
  right: '0px',
  top: '73px',
  zIndex: 1,

  [theme.breakpoints.up('sm')]: {
    right: '-36px',
  },
  '&:hover': {
    backgroundColor: colors.gray300,
  },
}))

const CategoryWrapper = styled(Flex).attrs({
  align: 'center',
  justify: 'stretch',
  p: 5,
})(({ theme }) => ({
  position: 'relative',
  flex: '1 1 158px',
  maxWidth: '100%',
  minWidth: '158px',
  zIndex: 2,
  padding: '5px 0 5px 10px',
  [theme.breakpoints.up('sm')]: {
    padding: '5px',
    position: 'absolute',
    top: '10px',
    left: MENU_WIDTH,
  },
  '& > div': {
    display: 'flex',
    width: '100%',
  },
}))

const ScrollWrapper = styled(Flex)(() => ({
  overflow: 'auto',
  height: 'calc(100% - 158px)',
  width: '100%',
}))

const Spacer = styled.div`
  height: 10px;
`

SideBar.displayName = 'Sidebar'
