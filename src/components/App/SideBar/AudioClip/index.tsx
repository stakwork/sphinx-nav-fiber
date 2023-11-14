import { Divider } from '@mui/material'
import { memo, useCallback, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { AudioPlayer } from '~/components/AudioPlayer'
import { Booster } from '~/components/Booster'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { setIsTimestampLoaded, useSelectedNode } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { formatDescription } from '~/utils/formatDescription'
import { useIsMatchBreakpoint } from '~/utils/useIsMatchBreakpoint'
import { BoostAmt } from '../../Helper/BoostAmt'
import { Description } from '../Description'
import { Episode } from '../Relevance/Episode'
import { Transcript } from '../Transcript'

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

const StyledDivider = styled(Divider)`
  margin: auto 0px 2px 0px;
  opacity: 75%;
`

const StyledEpisode = styled(Episode)`
  & {
    border-top: none;
    padding-bottom: 18px;
    font-size: 16px;
  }
`

// eslint-disable-next-line no-underscore-dangle
const _AudioClip = () => {
  const selectedNode = useSelectedNode()
  const isMobile = useIsMatchBreakpoint('sm', 'down')
  const isPlay = usePlayerStore((s) => s.isPlaying)
  const setIsPlaying = usePlayerStore((s) => s.setIsPlaying)
  const scrollTargetRef = useRef<HTMLDivElement | null>(null)

  const {
    image_url: imageUrl,
    show_title: showTitle,
    date,
    boost,
    type,
    id,
    ref_id: refId,
    episode_title: episodeTitle,
  } = selectedNode || {}

  const [boostAmount, setBoostAmount] = useState<number>(boost || 0)

  useEffect(
    () => () => {
      setIsPlaying(false)

      if (scrollTargetRef.current) {
        scrollTargetRef.current.scrollTo({ top: 0, behavior: 'auto' })
      }
    },
    [setIsPlaying],
  )

  const errorHandler = useCallback(() => {
    setIsTimestampLoaded(true)
  }, [])

  const loadedHandler = useCallback(() => {
    setIsTimestampLoaded(true)
  }, [])

  const pauseHandler = useCallback(() => setIsPlaying(false), [setIsPlaying])

  const playHandler = useCallback(() => setIsPlaying(true), [setIsPlaying])

  return (
    <Wrapper>
      <PlayerWrapper>
        <Flex direction="row">
          <Flex direction="row" grow={1} justify="center" shrink={1}>
            <Avatar size={isMobile ? 45 : 188} src={selectedNode?.image_url || 'audio_default.svg'} type="audio" />
          </Flex>
        </Flex>
        <Flex pt={10}>
          <AudioPlayer
            mediaUrl={selectedNode?.link || ''}
            onError={errorHandler}
            onLoaded={loadedHandler}
            onPause={pauseHandler}
            onPlay={playHandler}
            play={isPlay}
            timestamp={selectedNode?.timestamp || ''}
          />
        </Flex>
      </PlayerWrapper>
      {/* <Flex grow={1} shrink={1}> */}
      <StyledEpisode
        boostCount={boost || 0}
        date={date || 0}
        episodeTitle={formatDescription(episodeTitle)}
        id={id}
        imageUrl={imageUrl || 'audio_default.svg'}
        isSelectedView
        onClick={() => null}
        showTitle={formatDescription(showTitle)}
        type={type}
      />
      {/* </Flex> */}
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
          <Transcript key={id} node={selectedNode} stateless />
        </TextWrapper>
      </div>
    </Wrapper>
  )
}

export const AudioClip = memo(_AudioClip)

const BoostWrapper = styled(Flex)`
  flex-direction: row;
  justify-content: space-between;
  padding: 18px 18px 18px;
`

const TextWrapper = styled(Flex)`
  padding: 18px 18px 18px;
`
