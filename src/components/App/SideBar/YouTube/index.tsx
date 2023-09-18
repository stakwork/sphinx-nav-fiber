import { useEffect, useRef } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { useSelectedNode } from '~/stores/useDataStore'
import { formatDescription } from '~/utils/formatDescription'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'
import { Episode } from '../Relevance/Episode'
import { Transcript } from '../Transcript'

export const YouTube = () => {
  const selectedNode = useSelectedNode()
  const playerRef = useRef<ReactPlayer | null>(null)

  const {
    link,
    timestamp,
    image_url: imageUrl,
    description,
    date,
    boost,
    type,
    id,
    episode_title: episodeTitle,
  } = selectedNode || {}

  const secs = videoTimetoSeconds(timestamp || '')

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current?.seekTo(secs)
    }
  }, [playerRef, secs])

  if (!selectedNode) {
    return null
  }

  return (
    <Wrapper>
      <PlayerWrapper>
        <Flex direction="row">
          <ReactPlayer ref={playerRef} controls height="200px" playing url={link} width="100%" />
        </Flex>
      </PlayerWrapper>
      <StyledEpisode
        boostCount={boost || 0}
        date={date || 0}
        description={formatDescription(description)}
        id={id}
        imageUrl={imageUrl || 'video_default.svg'}
        isSelectedView
        onClick={() => null}
        title={episodeTitle}
        type={type}
      />
      <TranscriptWrapper grow={1} shrink={1}>
        <Transcript node={selectedNode} stateless />
      </TranscriptWrapper>
    </Wrapper>
  )
}

const Wrapper = styled(Flex)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;
`

const PlayerWrapper = styled(Flex)`
  padding: 30px 18px 0;
`

const TranscriptWrapper = styled(Flex)`
  padding: 0 18px 18px;
`

const StyledEpisode = styled(Episode)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`
