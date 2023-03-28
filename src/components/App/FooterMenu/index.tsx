import { useState } from 'react'
import { MdOutlineMenu, MdOutlineShowChart, MdOutlineTableView } from 'react-icons/md'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { SecondarySidebarActiveTab, useAppStore } from '~/stores/useAppStore'
import { colors } from '~/utils/colors'

export const FooterMenu = () => {
  const [setSecondarySidebarActiveTab] = useAppStore((s) => [s.setSecondarySidebarActiveTab])

  const [isHovered, setIsHovered] = useState(false)

  const handleOpen = (tab: SecondarySidebarActiveTab) => {
    setSecondarySidebarActiveTab(tab)
  }

  return (
    <FooterAction>
      <Flex>
        <ButtonsWrapper onMouseLeave={() => setIsHovered(false)} onMouseOver={() => setIsHovered(true)}>
          {!isHovered ? (
            <ActionButton>
              <MdOutlineMenu size={24} />
            </ActionButton>
          ) : (
            <>
              <ActionButton onClick={() => handleOpen('sentiment')}>
                <MdOutlineShowChart size={24} />
              </ActionButton>
              <ActionButton onClick={() => handleOpen('sources')}>
                <MdOutlineTableView size={24} />
              </ActionButton>
            </>
          )}
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
  width: auto%;
  transition: opacity 1s;
`

const ActionButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 5,
})`
  background: ${colors.bluePressState};
  border-radius: 50%;
  color: ${colors.white};
  cursor: pointer;
  transition-duration: 0.2s;
  height: 30px;
  width: 30px;
  & + & {
    margin-top: 8px;
  }

  &:hover {
    opacity: 1;
    box-shadow: 0 0 10px 2px ${colors.primaryBlueBorder};
  }
`

const ButtonsWrapper = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 5,
})`
  background: ${colors.primaryBlueBorder};
  border-radius: 50%;

  color: ${colors.white};
  cursor: pointer;
  transition-duration: 0.2s;

  &:hover {
    transition: none;
    border-radius: 24px;
    opacity: 1;
    box-shadow: 0 0 10px 2px ${colors.primaryBlueBorder};
  }
`
