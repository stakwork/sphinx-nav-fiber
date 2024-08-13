import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import ClearIcon from '~/components/Icons/ClearIcon'
import FamilyHistoryIcon from '~/components/Icons/FamilyHistoryIcon'
import { colors } from '~/utils/colors'

interface HeaderProps {
  onClose: () => void
  activeTab: 'all' | 'parent'
  setActiveTab: (tab: 'all' | 'parent') => void
}

interface TabProps {
  active: boolean
}

export const Header = ({ onClose, activeTab, setActiveTab }: HeaderProps) => (
  <HeaderWrapper>
    <IconWrapper>
      <FamilyHistoryIcon />
      <Title>Blueprint</Title>
    </IconWrapper>
    <TabsWrapper>
      <Tab active={activeTab === 'all'} onClick={() => setActiveTab('all')}>
        Show All
      </Tab>
      <Tab active={activeTab === 'parent'} onClick={() => setActiveTab('parent')}>
        Parent Only
      </Tab>
    </TabsWrapper>
    <CloseButton onClick={onClose}>
      <ClearIcon />
    </CloseButton>
  </HeaderWrapper>
)

const HeaderWrapper = styled(Flex)`
  background-color: ${colors.BG1};
  height: 64px;
  width: 100%;
  border-top-left-radius: 9px;
  border-top-right-radius: 9px;
  justify-content: space-between;
  padding: 17px;
`

const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  font-size: 22px;
  font-weight: 400;
  font-family: Barlow;

  svg {
    color: ${colors.GRAY6};
    margin-left: 4px;
  }
`

const Title = styled.span`
  color: ${colors.white};
  margin-left: 15px;
`

const TabsWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 16px;
  right: 60px;
  background-color: ${colors.divider2};
  border-radius: 6px;
  padding: 2px;
`

const Tab = styled.div<TabProps>`
  color: ${(props) => (props.active ? colors.white : colors.GRAY6)};
  background-color: ${(props) => (props.active ? colors.BUTTON1 : 'transparent')};
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  font-weight: 500;
  margin-left: 2px;
  font-family: Barlow;

  &:first-child {
    margin-left: 0;
  }
`

const CloseButton = styled.div`
  position: absolute;
  top: 16px;
  right: 12px;
  font-size: 20px;
  color: ${colors.GRAY6};
  cursor: pointer;
  z-index: 1;

  svg {
    width: 30px;
    height: 32px;
  }
`
