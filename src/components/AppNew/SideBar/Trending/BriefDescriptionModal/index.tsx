import { Button } from '@mui/material'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
import BubbleChartIcon from '~/components/Icons/BubbleChartIcon'
import PauseIcon from '~/components/Icons/PauseIcon'
import SoundIcon from '~/components/Icons/SoundIcon'
import { BaseModal } from '~/components/Modal'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { useModal } from '~/stores/useModalStore'
import { Trending } from '~/types'

type Props = {
  trend: Trending
  onClose: () => void
  selectTrending: (val: string) => void
}

export const BriefDescription: FC<Props> = ({ trend, onClose, selectTrending }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { close } = useModal('briefDescription')

  const audioRef = useRef<HTMLVideoElement | null>(null)

  const handleLearnMore = () => {
    selectTrending(trend.name)
  }

  const handleClose = useCallback(() => {
    onClose()
    close()
  }, [onClose, close])

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause()
      } else {
        audioRef.current.play()
      }

      setIsPlaying(!isPlaying)
    }

    setIsPlaying(!isPlaying)
  }

  useEffect(() => {
    window.addEventListener('keydown', handleClose)

    return () => {
      window.removeEventListener('keydown', handleClose)
    }
  }, [handleClose])

  return (
    <BaseModal id="briefDescription" kind="regular" onClose={handleClose}>
      {trend.audio_EN ? (
        <>
          <Flex direction="row" justify="flex-start" mb={22}>
            <Button
              onClick={togglePlay}
              size="small"
              startIcon={isPlaying ? <PauseIcon /> : <SoundIcon />}
              style={{ marginRight: '10px' }}
            >
              Listen
            </Button>

            <Button onClick={handleLearnMore} size="small" startIcon={<BubbleChartIcon />}>
              Learn More
            </Button>
          </Flex>

          <StyledAudio ref={audioRef} src={trend.audio_EN}>
            <track kind="captions" />
          </StyledAudio>
        </>
      ) : null}
      <Title>{trend.tldr_topic ?? trend.name}</Title>
      <ScrollableContent>
        <Flex>
          <StyledText>{trend.tldr && <Markdown>{trend.tldr}</Markdown>}</StyledText>
        </Flex>
      </ScrollableContent>
    </BaseModal>
  )
}

const ScrollableContent = styled.div`
  max-height: 300px;
  overflow-y: auto;
  margin: 8px 0;
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
`

const StyledAudio = styled.audio`
  height: 0;
  width: 0;
`
