import styled from 'styled-components'
import { MENU_WIDTH } from '~/components/App/SideBar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { MediaPlayer } from '~/components/mindset/components/MediaPlayer'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { Transcript } from './Transcript'

export const SideBar = () => {
  const { selectedEpisodeLink, selectedEpisode } = useMindsetStore((s) => s)

  return (
    <Wrapper align="stretch" basis="100%" grow={1} shrink={1}>
      <MediaWrapper>
        {selectedEpisode?.name && <EpisodeTitle>{selectedEpisode?.name}</EpisodeTitle>}
        {selectedEpisode?.properties?.text && <Summary>{selectedEpisode?.properties?.text}</Summary>}
        {selectedEpisodeLink && <MediaPlayer mediaUrl={selectedEpisodeLink} />}
      </MediaWrapper>
      <Transcript />
    </Wrapper>
  )
}

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  padding: '33px 20px 20px 20px',
  background: 'transparent',
  width: '100%',

  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
  },
}))

const Summary = styled(Text)`
  font-size: 20px;
  font-weight: Bold;
  line-height: 24.2px;
  overflow-wrap: break-word;
  white-space: normal;
  word-break: break-word;
  margin-right: 10px;
  font-weight: 500;
`

const EpisodeTitle = styled(Text)`
  font-size: 14px;
  font-weight: 700;
  line-height: 16.94px;
  margin-bottom: 12px;
`

const MediaWrapper = styled(Flex)(({ theme }) => ({
  width: '100%',
  margin: '0 auto 16px',
  [theme.breakpoints.up('sm')]: {
    width: '390px',
  },
}))
