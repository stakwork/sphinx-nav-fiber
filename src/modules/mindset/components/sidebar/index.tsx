import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { colors } from '~/utils'
import { MENU_WIDTH } from '~/components/App/SideBar'
import { Text } from '~/components/common/Text'
import { MediaPlayer } from '~/modules/mindset/components/MediaPlayer'

export const SideBar = () => (
  <Wrapper>
    <Summary>What is the Deep State Party and what are their goals?</Summary>
    <EpisodeTitle>John Mearsheimer and Jeffrey Sachs | All-In Summit 2024</EpisodeTitle>
    <MediaWrapper>
      <MediaPlayer />
    </MediaWrapper>
  </Wrapper>
)

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  alignItems: 'flex-start',
  padding: '20px',
  background: colors.BG1,
  height: '100vh',
  width: '100%',
  zIndex: 30,
  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
  },
}))

const Summary = styled(Text)`
  font-size: 20px;
  font-weight: 700;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
`

const EpisodeTitle = styled(Text)`
  margin-top: 15px;
  font-size: 14px;
  font-weight: 500;
  line-height: 19.6px;
`

const MediaWrapper = styled(Flex)(({ theme }) => ({
  background: colors.BG1,
  width: '100%',
  margin: '16px auto',
  zIndex: 29,
  [theme.breakpoints.up('sm')]: {
    width: '390px',
  },
}))
