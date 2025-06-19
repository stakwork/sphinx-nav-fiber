import clsx from 'clsx'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import { MENU_WIDTH } from '~/components/App/SideBar'
import { Flex } from '~/components/common/Flex'
import { MediaPlayer } from '~/components/mindset/components/MediaPlayer'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors } from '~/utils'
import { Chapters } from './Chapters'
import { Transcript } from './Transcript'

const CHAPTERS = 'chapters'
const TRANSCRIPT = 'transcript'

export const SideBar = () => {
  const selectedEpisode = useMindsetStore((s) => s.selectedEpisode)

  const isPlaying = usePlayerStore((s) => s.isPlaying)
  const [tabState, setTabState] = useState(CHAPTERS)

  useEffect(() => {
    if (isPlaying) {
      setTabState(TRANSCRIPT)
    }
  }, [isPlaying])

  return (
    <Wrapper align="stretch" basis="100%" grow={1} shrink={1}>
      <MediaWrapper>
        {selectedEpisode?.properties?.media_url && <MediaPlayer mediaUrl={selectedEpisode.properties.media_url} />}
      </MediaWrapper>
      <Flex className="heading">{selectedEpisode?.properties?.episode_title}</Flex>
      <TabsWrapper direction="row">
        <Tab className={clsx({ selected: tabState === CHAPTERS })} onClick={() => setTabState(CHAPTERS)}>
          Chapters
        </Tab>
        <Tab className={clsx({ selected: tabState === TRANSCRIPT })} onClick={() => setTabState(TRANSCRIPT)}>
          Transcript
        </Tab>
      </TabsWrapper>
      <ContentWrapper>
        {tabState === CHAPTERS && <Chapters onChangeChapter={() => setTabState(TRANSCRIPT)} />}
        {tabState === TRANSCRIPT && <Transcript />}
      </ContentWrapper>
    </Wrapper>
  )
}

const ContentWrapper = styled(Flex)`
  .heading {
    font-weight: 700;
    font-size: 16px;
    margin-bottom: 16px;
  }
  color: ${colors.white};
  background: ${colors.BG1};
  border-radius: 8px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  padding: 0 24px 24px;
  overflow-y: auto;
  margin-top: 0;
  flex: 1 1 100%;
  @media (max-width: 768px) {
    max-width: 100vw;
  }
`

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
  },

  '@media (max-width: 768px)': {
    padding: 0,
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

const Tab = styled(Flex)`
  color: ${colors.white};
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  padding: 10px;

  &.selected {
    opacity: 0.5;
    cursor: default;
    pointer-events: none;
  }
`

const TabsWrapper = styled(Flex)`
  background: ${colors.primaryBlue};
  padding: 12px 24px;
  background: ${colors.BG1};
  border-radius: 8px;
  margin-bottom: 0;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
`
