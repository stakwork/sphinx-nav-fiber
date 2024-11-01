import { Slide } from '@mui/material'
import { MdClose } from 'react-icons/md'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { SecondarySidebarActiveTab, useAppStore } from '~/stores/useAppStore'
import { colors } from '~/utils/colors'
import { SourcesView } from '../../SourcesTableModal/SourcesView'
import { About } from './About'
import { Sentiment } from './Sentiment'

export const MENU_WIDTH = 600

const ComponentsMapper: Record<SecondarySidebarActiveTab, React.ReactNode> = {
  about: <About />,
  sentiment: <Sentiment />,
  sources: <SourcesView />,
  '': null,
}

export const SecondarySideBar = () => {
  const [secondarySidebarActiveTab, setSecondarySidebarActiveTab] = useAppStore((s) => [
    s.secondarySidebarActiveTab,
    s.setSecondarySidebarActiveTab,
  ])

  return (
    <Slide direction="left" in={!!secondarySidebarActiveTab} mountOnEnter unmountOnExit>
      <Wrapper id="secondary-sidebar-wrapper">
        <CloseButton id="cy-close-secondary-sidebar" onClick={() => setSecondarySidebarActiveTab('')}>
          <MdClose />
        </CloseButton>
        {ComponentsMapper[secondarySidebarActiveTab]}
      </Wrapper>
    </Slide>
  )
}

const Wrapper = styled(Flex)(({ theme }) => ({
  background: colors.BG1,
  height: '100vh',
  padding: '16px 20px',
  width: '100%',
  zIndex: 30,
  display: 'flex',
  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
  },
}))

const CloseButton = styled(Flex).attrs({
  align: 'center',
  justify: 'center',
  p: 5,
})`
  background-color: ${colors.inputBg1};
  border-radius: 50%;
  color: ${colors.mainBottomIcons};
  cursor: pointer;
  transition-duration: 0.2s;
  align-self: flex-end;
  margin-bottom: 16px;

  &:hover {
    background-color: ${colors.gray200};
  }
`
