import { Button } from '@mui/material'
import { FC, useCallback, useEffect, useRef, useState } from 'react'
import Markdown from 'react-markdown'
import styled from 'styled-components'
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
  topic: string
}

export const BriefDescription: FC<Props> = ({ trend, onClose }) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const { close } = useModal('briefDescription')

  const audioRef = useRef<HTMLVideoElement | null>(null)

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
            <Button onClick={togglePlay} size="small" startIcon={isPlaying ? <PauseIcon /> : <SoundIcon />}>
              Listen
            </Button>
          </Flex>
          <StyledAudio ref={audioRef} src={trend.audio_EN}>
            <track kind="captions" />
          </StyledAudio>
        </>
      ) : null}
      <Title>{trend.topic}</Title>
      <ScrollableContent>
        <Flex>
          <StyledText>
            <Markdown>{trend.tldr}</Markdown>
          </StyledText>
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
