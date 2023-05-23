import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { MdClose, MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import styled from 'styled-components'
import { CategorySelect } from '~/components/App/SideBar/CategorySelect'
import { SearchBar } from '~/components/SearchBar'
import { Flex } from '~/components/common/Flex'
import { Loader } from '~/components/common/Loader'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { media } from '~/utils/media'
import { ActionsMenu } from './ActionsMenu'
import { AskQuestion } from './AskQuestion'
import { Tab } from './Tab'
import { TeachMe } from './TeachMe'
import { View } from './View'

export const MENU_WIDTH = 433

type Props = { onSubmit?: () => void }

type ComponentsMapperType = {
  [key: string]: JSX.Element
}

const ComponentsMapper: ComponentsMapperType = {
  askQuestion: <AskQuestion />,
  searchResults: <View />,
  teachMe: <TeachMe />,
}

const Content = ({ onSubmit }: Props) => {
  const [isLoading] = useDataStore((s) => [s.isFetching])
  const [setSidebarOpen] = useAppStore((s) => [s.setSidebarOpen])
  const { setValue } = useFormContext()
  const [selectedView, setSelectedView] = useState('searchResults')

  return (
    <Wrapper id="sidebar-wrapper">
      <SearchWrapper>
        <SearchBar onSubmit={onSubmit} />

        <CloseButton
          onClick={() => {
            setValue('search', '')
          }}
        >
          <MdClose fontSize={20} />
        </CloseButton>
      </SearchWrapper>

      <ActionsMenu active={selectedView} onChange={setSelectedView} />

      <CollapseButton
        onClick={() => {
          setSidebarOpen(false)
        }}
      >
        <MdKeyboardDoubleArrowLeft fontSize={20} />
      </CollapseButton>

      {isLoading ? <Loader color="primaryText1" /> : ComponentsMapper[selectedView]}

      <CategoryWrapper direction="row">
        <Flex basis="154px">
          <CategorySelect />
        </Flex>
      </CategoryWrapper>
    </Wrapper>
  )
}

export const SideBar = ({ onSubmit }: Props) => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen)

  if (!sidebarIsOpen) {
    return <Tab />
  }

  return <Content onSubmit={onSubmit} />
}

const Wrapper = styled(Flex)`
  background: ${colors.body};
  height: 100vh;
  width: 100%;
  z-index: 30;
  ${media.large`
    width: ${MENU_WIDTH}px;
  `}
`

const SearchWrapper = styled(Flex).attrs({
  direction: 'row',
  justify: 'center',
  p: 30,
})`
  background: ${colors.dashboardHeader};
`

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
  p: 5,
})`
  background-color: ${colors.dashboardHeader};
  border-radius: 0 5px 5px 0;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  position: absolute;
  left: ${MENU_WIDTH}px;
  top: 78px;

  &:hover {
    background-color: ${colors.gray300};
  }
`

const CategoryWrapper = styled(Flex).attrs({
  align: 'center',
  justify: 'stretch',
  p: 5,
})`
  position: absolute;
  left: ${MENU_WIDTH + 10}px;
  top: 10px;
`

SideBar.displayName = 'Sidebar'
