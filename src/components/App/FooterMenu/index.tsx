import { useEffect, useRef, useState } from 'react'
import {
  MdAddLink,
  MdClose,
  MdOutlineMenu,
  MdOutlineShowChart,
  MdOutlineTableView,
  MdPostAdd,
  MdHomeFilled,
} from 'react-icons/md'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { SecondarySidebarActiveTab, useAppStore } from '~/stores/useAppStore'
import { AddNodeModalData, useModal } from '~/stores/useModalStore'
import { colors } from '~/utils/colors'

export const FooterMenu = () => {
  const [setSecondarySidebarActiveTab] = useAppStore((s) => [s.setSecondarySidebarActiveTab])
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
          {isOpened && (
            <>
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
            </>
          )}
          <ActionButton className="root" id="cy-actions-menu-toggle" onClick={() => setIsOpened(!isOpened)}>
            <IconWrapper>{isOpened ? <MdClose size={24} /> : <MdOutlineMenu size={24} />}</IconWrapper>
          </ActionButton>
        </ButtonsWrapper>
      </Flex>
    </FooterAction>
  )
}

const FooterAction = styled(Flex).attrs({
  align: 'center',
  direction: 'row',
  grow: 1,
  justify: 'space-between',
  p: 20,
})`
  position: absolute;
  bottom: 0;
  right: 0;
  width: auto;
  transition: opacity 1s;
`

const ActionButton = styled(Flex).attrs({
  align: 'center',
  justify: 'flex-end',
  p: 0,
})`
  ${Text} {
    margin-right: 8px;
    display: none;
  }
  color: ${colors.white};
  cursor: pointer;
  border-radius: 24px;
  padding: 4px 8px;
  transition-duration: 0.2s;
  width: 30px;
  flex-direction: row;
  & + & {
    margin-top: 8px;
  }

  &:hover {
    width: auto;
    opacity: 1;
    box-shadow: 0 0 10px 2px ${colors.primaryBlueBorder};
    ${Text} {
      display: block;
    }
  }

  &.root {
    border-radius: 50%;
    &:hover {
      width: 30px;
    }
    padding: 0;
    margin-right: 8px;
    align-items: center;
    justify-content: center;
    border: none;
  }
`

const IconWrapper = styled(Flex)`
  width: 30px;
  height: 30px;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: ${colors.bluePressState};
`

const ButtonsWrapper = styled(Flex).attrs({
  align: 'flex-end',
  p: 5,
})`
  border-radius: 50%;
  justify-content: flex-end;

  color: ${colors.white};
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    transition: none;
    border-radius: 24px;
    opacity: 1;
  }
`
