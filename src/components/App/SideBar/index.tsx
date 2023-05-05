import { useState } from 'react'
import { useFormContext } from 'react-hook-form'
import { MdClose, MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import { toast } from 'react-toastify'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import styled from 'styled-components'
import { CategorySelect } from '~/components/App/SideBar/CategorySelect'
import { Button } from '~/components/Button'
import { SearchBar } from '~/components/SearchBar'
import { Flex } from '~/components/common/Flex'
import { Loader } from '~/components/common/Loader'
import { Text } from '~/components/common/Text'
import { ToastMessage } from '~/components/common/Toast/toastMessage'
import { postTeachMe } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { media } from '~/utils/media'
import { Tab } from './Tab'
import { View } from './View'

export const MENU_WIDTH = 433

type Props = { onSubmit?: () => void }

const Content = ({ onSubmit }: Props) => {
  const [isTutorialLoading, setIsTutorialLoading] = useState(false)
  const [isLoading, data] = useDataStore((s) => [s.isFetching, s.data])
  const [setSidebarOpen, searchTerm] = useAppStore((s) => [s.setSidebarOpen, s.currentSearch])
  const { setValue } = useFormContext()

  const handleTutorialStart = async () => {
    setIsTutorialLoading(true)

    try {
      const nodesWithtranscript = data?.nodes.filter((i) => i.text)
      const firstFiveItems = nodesWithtranscript?.slice(0, 5)

      if (searchTerm) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        await sphinx.enable()

        await postTeachMe({
          term: searchTerm,
          transcripts: firstFiveItems?.length ? firstFiveItems.map((i) => i.text).join(' ') : '',
        })

        setIsTutorialLoading(false)

        toast(<ToastMessage message="We started preparing tutorial for you" />, {
          type: 'success',
        })
      }
    } catch (error) {
      setIsTutorialLoading(false)

      toast(<ToastMessage message="An error happened" />, {
        type: 'error',
      })
    }
  }

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

      <CollapseButton
        onClick={() => {
          setSidebarOpen(false)
        }}
      >
        <MdKeyboardDoubleArrowLeft fontSize={20} />
      </CollapseButton>

      {!isTutorialLoading ? (
        <Flex p={12}>
          <Button disabled={isLoading} kind="big" onClick={() => handleTutorialStart()}>
            Teach me
          </Button>
        </Flex>
      ) : (
        <Flex align="center" direction="row" justify="center" py={12}>
          <Flex px={12}>
            <Text>Generating Tutorial</Text>
          </Flex>
          <ClipLoader color={colors.white} />
        </Flex>
      )}

      {isLoading ? <Loader color="primaryText1" /> : <View />}

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
  const selectedNode = useSelectedNode()
  const searchTerm = useAppStore((s) => s.currentSearch)

  if (!sidebarIsOpen) {
    if (!selectedNode && !searchTerm) {
      return null
    }

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
