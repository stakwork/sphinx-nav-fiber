import { Slide, Stack } from '@mui/material'
import { useCallback, useEffect, useRef, useState } from 'react'
import {
  MdAddLink,
  MdClose,
  MdHomeFilled,
  MdOutlineMenu,
  MdOutlineShowChart,
  MdOutlineTableView,
  MdPostAdd,
  MdRefresh,
} from 'react-icons/md'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { SecondarySidebarActiveTab, useAppStore } from '~/stores/useAppStore'
import { graphStyles, useDataStore } from '~/stores/useDataStore'
import { AddNodeModalData, useModal } from '~/stores/useModalStore'
import { colors } from '~/utils/colors'

export const FooterMenu = () => {
  const [setSecondarySidebarActiveTab] = useAppStore((s) => [s.setSecondarySidebarActiveTab])
  const [graphStyle, setGraphStyle] = useDataStore((s) => [s.graphStyle, s.setGraphStyle])
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [isOpened, setIsOpened] = useState(false)

  const { open, setAddNodeModalData } = useModal('addNode')

  const handleOpenSidebar = (tab: SecondarySidebarActiveTab) => {
    setSecondarySidebarActiveTab(tab)
  }

  const handleOpenModal = (data: AddNodeModalData) => {
    open()
    setAddNodeModalData(data)
  }

  const changeGraphType = useCallback(() => {
    const nextStyleIndex: number = graphStyles.findIndex((f) => f === graphStyle) + 1

    if (graphStyles[nextStyleIndex]) {
      setGraphStyle(graphStyles[nextStyleIndex])
    } else {
      setGraphStyle(graphStyles[0])
    }
  }, [graphStyle, setGraphStyle])

  const handleClickOutside = (event: MouseEvent) => {
    if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
      setIsOpened(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  })

  return (
    <FooterAction ref={wrapperRef}>
      <Flex>
        <ButtonsWrapper>
          <SlideWrapper>
            <Slide direction="up" in={isOpened} mountOnEnter unmountOnExit>
              <Stack alignItems="flex-end" component="div" spacing={2}>
                <ActionButton onClick={() => handleOpenSidebar('about')}>
                  <Text>About</Text>
                  <IconWrapper>
                    <MdHomeFilled size={24} />
                  </IconWrapper>
                </ActionButton>
                <ActionButton id="cy-add-content-menu" onClick={() => handleOpenModal('content')}>
                  <Text>Add Content</Text>
                  <IconWrapper>
                    <MdAddLink size={24} />
                  </IconWrapper>
                </ActionButton>
                <ActionButton onClick={() => handleOpenModal('source')}>
                  <Text>Add Source</Text>
                  <IconWrapper>
                    <MdPostAdd size={24} />
                  </IconWrapper>
                </ActionButton>
                <ActionButton id="cy-open-soure-table" onClick={() => handleOpenSidebar('sources')}>
                  <Text>Source Table</Text>
                  <IconWrapper>
                    <MdOutlineTableView size={24} />
                  </IconWrapper>
                </ActionButton>
                <ActionButton id="cy-open-sentiment-data" onClick={() => handleOpenSidebar('sentiment')}>
                  <Text>Sentiment Data</Text>
                  <IconWrapper>
                    <MdOutlineShowChart size={24} />
                  </IconWrapper>
                </ActionButton>
                <ActionButton onClick={() => changeGraphType()}>
                  <Text>Change Display</Text>
                  <IconWrapper>
                    <MdRefresh size={24} />
                  </IconWrapper>
                </ActionButton>
              </Stack>
            </Slide>
          </SlideWrapper>
          <ActionButton className="root" id="cy-actions-menu-toggle" onClick={() => setIsOpened(!isOpened)}>
            <IconWrapper>{isOpened ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}</IconWrapper>
          </ActionButton>
        </ButtonsWrapper>
      </Flex>
    </FooterAction>
  )
}

const FooterAction = styled(Flex).attrs({
  align: 'flex-end',
  direction: 'row',
  grow: 1,
  justify: 'space-between',
})`
  position: absolute;
  bottom: 2rem;
  right: 1rem;
  width: auto;
  transition: opacity 1s;
`

const ActionButton = styled(Flex).attrs({
  align: 'center',
  justify: 'flex-end',
  p: 0,
})`
  width: min-content;
  padding: 0;
  flex-direction: row;
  border-radius: 2rem;
  color: ${colors.white};
  cursor: pointer;
  transition: ${({ theme }) => theme.transitions.create(['opacity', 'box-shadow', 'background-color'])};

  ${Text} {
    opacity: 0;
    width: 0;
    white-space: nowrap;
    visibility: hidden;
    transition: ${({ theme }) => theme.transitions.create(['opacity', 'visually'])};
  }

  &:hover {
    opacity: 1;
    box-shadow: 0 0 10px 2px ${colors.primaryBlueBorder};
    background-color: rgba(0, 0, 0, 80%);

    ${Text} {
      margin: 0 1rem;
      width: min-content;
      opacity: 1;
      visibility: visible;
    }
  }

  &.root {
    border-radius: 50%;
    padding: 0;
    align-items: center;
    justify-content: center;
    border: none;
  }
`

const IconWrapper = styled(Flex)`
  width: 48px;
  height: 48px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${colors.bluePressState};
`

const ButtonsWrapper = styled(Flex).attrs({
  align: 'flex-end',
})`
  justify-content: flex-end;
  color: ${colors.white};
  cursor: pointer;
  transition-duration: 0.2s;
`

const SlideWrapper = styled('div')`
  overflow: hidden;
  padding: 1rem 1rem 0.5rem 1rem;
  margin: -1rem -1rem 0.5rem -1rem;
`
