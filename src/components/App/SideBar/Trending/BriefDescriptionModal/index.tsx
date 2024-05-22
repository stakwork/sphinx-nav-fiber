import { Button } from '@mui/material'
import clsx from 'clsx'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import BubbleChartIcon from '~/components/Icons/BubbleChartIcon'
import PauseIcon from '~/components/Icons/PauseIcon'
import SoundIcon from '~/components/Icons/SoundIcon'
import { BaseModal } from '~/components/Modal'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useAppStore } from '~/stores/useAppStore'
import { useModal } from '~/stores/useModalStore'
import { Trending } from '~/types'
import { colors } from '~/utils'

type Props = {
  trend: Trending
  onClose: () => void
  selectTrending: (val: string) => void
}

export const BriefDescription: FC<Props> = ({ trend, onClose, selectTrending }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { close } = useModal('briefDescription')
  const { currentPlayingAudio, setCurrentPlayingAudio } = useAppStore((s) => s)

  const audioRef = useRef<HTMLAudioElement | null>(null)

  const handleLearnMore = () => selectTrending(trend.name)

  const handleClose = useCallback(() => {
    onClose()
    close()
  }, [onClose, close])

  const handleToggle = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }

      setIsPlaying(!isPlaying)
    }
  }

  const togglePlay = () => {
    const isBackgroundAudioPlaying = !currentPlayingAudio?.current?.paused

    if (isBackgroundAudioPlaying) {
      currentPlayingAudio?.current?.pause()
      setCurrentPlayingAudio(null)
    }

    if (currentPlayingAudio?.current?.src !== trend.audio_EN || !isBackgroundAudioPlaying) {
      handleToggle()
    }
  }

  useEffect(() => {
    const audioElement = audioRef.current
    const onAudioPlaybackComplete = () => setIsPlaying(false)

    if (audioElement) {
      audioElement.addEventListener('ended', onAudioPlaybackComplete)
    }

    window.addEventListener('keydown', handleClose)

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', onAudioPlaybackComplete)
      }

      window.removeEventListener('keydown', handleClose)
    }
  }, [handleClose])

  const showPlayBtn =
    (currentPlayingAudio?.current?.src === trend.audio_EN && !currentPlayingAudio?.current?.paused) || isPlaying

  return (
    <BaseModal id="briefDescription" kind="regular" noWrap onClose={handleClose} preventOutsideClose>
      {trend.audio_EN ? (
        <>
          <StyledHeader>
            <StyleButton
              className={clsx('default', { play: showPlayBtn })}
              onClick={togglePlay}
              size="small"
              startIcon={showPlayBtn ? <PauseIcon /> : <SoundIcon />}
            >
              {showPlayBtn ? 'Pause' : 'Listen'}
            </StyleButton>

            <StyleButton className="default" onClick={handleLearnMore} size="small" startIcon={<BubbleChartIcon />}>
              Learn More
            </StyleButton>
          </StyledHeader>
          <StyledAudio ref={audioRef} src={trend.audio_EN}>
            <track kind="captions" />
          </StyledAudio>
        </>
      ) : null}
      <Flex mt={75}>
        <Title>{trend.tldr_topic ?? trend.name}</Title>
        <ScrollableContent>
          <Flex>
            <StyledText>{trend.tldr && <Markdown>{trend.tldr}</Markdown>}</StyledText>
          </Flex>
        </ScrollableContent>
      </Flex>
    </BaseModal>
  )
}

const ScrollableContent = styled.div`
  max-height: 310px;
  overflow-y: auto;
  margin: 8px 0;
  padding: 0 20px;
`

const StyledText = styled(Text)`
  font-size: 18px;
  font-weight: 400;
  font-family: 'Barlow';
  * {
    all: revert;
  }
`

const Title = styled(Text)`
  font-weight: 600;
  font-size: 20px;
  padding: 0 20px;
`

const StyledAudio = styled.audio`
  display: none;
`

const StyleButton = styled(Button)`
  && {
    &.default {
      font-size: 13px;
      font-weight: 500;
      font-family: Barlow;
      padding: 12px, 16px, 12px, 10px;

      &.play {
        color: ${colors.BG3};
        background-color: ${colors.white};
      }
    }
  }
`

const StyledHeader = styled(Flex)`
  top: 0px;
  position: absolute;
  border-radius: 16px 16px 0px 0px;
  padding: 0px 12px;
  width: 100%;
  height: 60px;
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: ${colors.BG3};
  gap: 10px;
`
