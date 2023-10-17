import { useEffect, useRef, useState } from 'react'
import ReactPlayer from 'react-player'
import styled from 'styled-components'
import { Booster } from '~/components/Booster'
import { Divider } from '~/components/common/Divider'
import { Flex } from '~/components/common/Flex'
import { useDataStore } from '~/stores/useDataStore'
import { formatDescription } from '~/utils/formatDescription'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'
import { BoostAmt } from '../../Helper/BoostAmt'
import { Description } from '../Description'
import { Episode } from '../Relevance/Episode'
import { Transcript } from '../Transcript'

export const YouTube = () => {
  const selectedNode = useDataStore((s) => s.selectedNode)
  const playerRef = useRef<ReactPlayer | null>(null)
  const scrollTargetRef = useRef<HTMLDivElement | null>(null)

  // useEffect(() => {
  //   if (scrollTargetRef.current) {
  //     scrollTargetRef.current.scrollTo({ top: 0 })
  //   }
  // }, [])

  const {
    link,
    timestamp,
    image_url: imageUrl,
    date,
    boost,
    type,
    id,
    show_title: showTitle,
    episode_title: episodeTitle,
    ref_id: refId,
  } = selectedNode || {}

  const [boostAmount, setBoostAmount] = useState<number>(boost || 0)
  const secs = videoTimetoSeconds(timestamp || '')

  useEffect(() => {
    if (playerRef.current) {
      playerRef.current?.seekTo(secs)
    }

    if (scrollTargetRef.current) {
      scrollTargetRef.current.scrollTo({ top: 0, behavior: 'auto' })

      console.log('helloyt')
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
        boostCount={boostAmount || 0}
        date={date || 0}
        episodeTitle={formatDescription(episodeTitle)}
        id={id}
        imageUrl={imageUrl || 'video_default.svg'}
        isSelectedView
        onClick={() => null}
        showTitle={showTitle}
        type={type}
      />
      <StyledDivider />
      <div ref={scrollTargetRef} style={{ overflow: 'auto', flex: 1, width: '100%' }}>
        <BoostWrapper>
          <BoostAmt amt={boostAmount} />
          <Booster content={selectedNode} count={boostAmount} refId={refId} updateCount={setBoostAmount} />
        </BoostWrapper>
        <StyledDivider />
        <TextWrapper>
          <Description node={selectedNode} stateless />
        </TextWrapper>
        <StyledDivider />
        <TextWrapper>
          <Transcript node={selectedNode} stateless />
        </TextWrapper>
      </div>
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

const BoostWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`

const TextWrapper = styled(Flex)`
  padding: 18px 18px 18px;
`

const StyledEpisode = styled(Episode)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`

const StyledDivider = styled(Divider)`
  margin: auto 0px 1px 0px;
  opacity: 75%;
`
