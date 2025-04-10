import styled from 'styled-components'
import { MENU_WIDTH } from '~/components/App/SideBar'
import { Flex } from '~/components/common/Flex'
import { MediaPlayer } from '~/components/mindset/components/MediaPlayer'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { Transcript } from './Transcript'

export const SideBar = () => {
  const selectedEpisode = useMindsetStore((s) => s.selectedEpisode)

  return (
    <Wrapper align="stretch" basis="100%" grow={1} shrink={1}>
      <MediaWrapper>
        {selectedEpisode?.properties?.media_url && <MediaPlayer mediaUrl={selectedEpisode.properties.media_url} />}
      </MediaWrapper>
      <Transcript name={selectedEpisode?.name || ''} />
    </Wrapper>
  )
}

const Wrapper = styled(Flex)(({ theme }) => ({
  position: 'relative',
  display: 'flex',
  padding: '0 20px 0 20px',
  background: 'transparent',
  width: '100%',
  height: 'calc(100vh - 180px)',
  overflow: 'auto',

  [theme.breakpoints.up('sm')]: {
    width: MENU_WIDTH,
    gap: '10px',
  },
}))

const MediaWrapper = styled(Flex)(({ theme }) => ({
  width: '100%',
  marginBottom: '20px',
  [theme.breakpoints.up('sm')]: {
    width: '390px',
    margin: '0 auto',
  },
}))
