import Button from '@mui/material/Button'
import clsx from 'clsx'
import moment from 'moment'
import { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'
import { Divider } from '~/components/common/Divider'
import { Flex } from '~/components/common/Flex'
import { highlightSearchTerm } from '~/components/common/Highlight/Highlight'
import { Text } from '~/components/common/Text'
import { TypeBadge } from '~/components/common/TypeBadge'
import AiPauseIcon from '~/components/Icons/AiPauseIcon'
import AiPlayIcon from '~/components/Icons/AiPlayIcon'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { colors } from '~/utils/colors'

export const Default = () => {
  const selectedNode = useSelectedNode()
  const audioRef = useRef<HTMLAudioElement | null>(null)
  const { currentPlayingAudio, setCurrentPlayingAudio } = useAppStore((s) => s)
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audioElement = audioRef.current

    const onAudioPlaybackComplete = () => {
      setCurrentPlayingAudio(null)
      setIsPlaying(false)
    }

    if (audioElement) {
      audioElement.addEventListener('ended', onAudioPlaybackComplete)
    }

    return () => {
      if (audioElement) {
        audioElement.removeEventListener('ended', onAudioPlaybackComplete)
      }
    }
  }, [setCurrentPlayingAudio])

  const togglePlay = () => {
    if (currentPlayingAudio?.current && currentPlayingAudio.current !== audioRef.current) {
      currentPlayingAudio.current.pause()
      setCurrentPlayingAudio(null)
    }

    if (audioRef.current) {
      if (audioRef.current.paused) {
        audioRef.current.play()
        setCurrentPlayingAudio(audioRef)
        setIsPlaying(true)
      } else {
        audioRef.current.pause()
        setCurrentPlayingAudio(null)
        setIsPlaying(false)
      }
    }
  }

  if (!selectedNode) {
    return null
  }

  const hasImage = !!selectedNode.properties?.image_url
  const hasAudio = !!selectedNode.properties?.audio_EN
  const customKeys = selectedNode.properties || {}

  return (
    <StyledContainer>
      {hasImage ? (
        <StyledImageWrapper>
          <img
            alt="img_a11y"
            onError={(e) => {
              e.currentTarget.src = 'generic_placeholder_img.png'
              e.currentTarget.className = 'default-img'
            }}
            src={selectedNode.properties?.image_url}
          />
        </StyledImageWrapper>
      ) : null}

      <StyledContent grow={1} justify="flex-start" pt={hasImage ? 0 : 8} shrink={1}>
        <Flex ml={24} mt={20} style={{ width: 'fit-content' }}>
          <TypeBadge type={selectedNode.node_type || ''} />
        </Flex>

        <StyledWrapper>
          {Object.entries(customKeys)
            .filter(([key]) => key !== 'media_url' && key !== 'link')
            .map(([key, value]) => (
              <NodeDetail
                key={key}
                hasAudio={hasAudio}
                isPlaying={isPlaying}
                label={formatLabel(key)}
                togglePlay={togglePlay}
                value={key === 'date' && value ? moment(value * 1000).format('MMMM Do YYYY') : value}
              />
            ))}
        </StyledWrapper>
      </StyledContent>

      {hasAudio && selectedNode.properties?.audio_EN && (
        <StyledAudio ref={audioRef} src={selectedNode.properties.audio_EN}>
          <track kind="captions" />
        </StyledAudio>
      )}
    </StyledContainer>
  )
}

const formatLabel = (label: string) => label.replace(/_/g, ' ').replace(/\b\w/g, (char) => char.toUpperCase())

type Props = { label: string; value: unknown; hasAudio: boolean; isPlaying: boolean; togglePlay: () => void }

const NodeDetail = ({ label, value, hasAudio, isPlaying, togglePlay }: Props) => {
  const isLong = (value as string).length > 140
  const searchTerm = useAppStore((s) => s.currentSearch)

  if (!value || label === 'Audio EN') {
    return null
  }

  return (
    <>
      <StyledDetail className={clsx('node-detail', { 'node-detail__long': isLong })}>
        <Text className="node-detail__label">
          {label}
          {label === 'Text' && hasAudio && (
            <AudioButton onClick={togglePlay}>{isPlaying ? <AiPauseIcon /> : <AiPlayIcon />}</AudioButton>
          )}
        </Text>
        <Text className="node-detail__value">{highlightSearchTerm(String(value), searchTerm)}</Text>
      </StyledDetail>
      <StyledDivider />
    </>
  )
}

const StyledContent = styled(Flex)`
  overflow: auto;
  width: 100%;
  flex-grow: 1;
  padding-top: 16px;
`

const StyledWrapper = styled(Flex)`
  padding: 4px 24px;
`

const StyledImageWrapper = styled(Flex)`
  width: 100%;
  height: 240px;
  padding-top: 20px;
  justify-content: center;
  align-items: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }

  .default-img {
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    width: 100px;
    height: 100px;
    border-radius: 2px;
  }
`

const StyledDetail = styled(Flex)`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
  font-family: Barlow;
  padding: 12px 0;
  font-size: 14px;
  line-height: 22px;

  &.node-detail {
    .node-detail__label {
      min-width: 116px;
      font-weight: 600;
      display: flex;
      align-items: center;
    }

    .node-detail__value {
      font-weight: 400;
      word-wrap: normal;
      word-break: break-word;
    }

    &__long {
      flex-direction: column;
    }
  }
`

const StyledDivider = styled(Divider)`
  margin: auto 0px 2px 0px;
  opacity: 0.75;
`

const StyledContainer = styled(Flex)`
  flex-direction: column;
  height: 100%;
`

const AudioButton = styled(Button)`
  &&.MuiButton-root {
    background-color: ${colors.COLLAPSE_BUTTON};
    border: none;
    cursor: pointer;
    flex-shrink: 0;
    padding: 0px;
    width: 27px;
    height: 26px;
    min-width: 26px;
    border-radius: 6px;
    left: 84%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  svg {
    width: 29px;
    height: 12px;
    color: white;
  }
`

const StyledAudio = styled.audio`
  display: none;
`
