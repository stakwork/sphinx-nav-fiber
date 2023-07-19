import { isUndefined, noop } from 'lodash'
import { ComponentType, memo, useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'

const Audio = styled(ReactAudioPlayer as unknown as ComponentType<typeof ReactAudioPlayer.defaultProps>)`
  width: 100%;
`

type AudioPlayerProps = {
  onLoaded?: () => void
  onError?: () => void
  timestamp: string
  mediaUrl: string
  play?: boolean
  onPlay?: () => void
  onPause?: () => void
}

// eslint-disable-next-line no-underscore-dangle
const _AudioPlayer = ({
  mediaUrl,
  timestamp,
  play,
  onLoaded = noop,
  onError = noop,
  onPause = noop,
  onPlay = noop,
}: AudioPlayerProps) => {
  const [loadError, setLoadError] = useState(false)

  const [player, setPlayer] = useState<HTMLAudioElement | null>(null)

  useEffect(() => {
    if (isUndefined(play) || !player) {
      return
    }

    if (play) {
      player.play()
    } else {
      player.pause()
    }
  }, [play, player])

  useEffect(() => {
    const audioElement = document.getElementById('audio-player') as HTMLAudioElement

    if (audioElement) {
      setPlayer(audioElement)
    }
  }, [])

  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (player) {
      player.addEventListener('play', onPlay)
      player.addEventListener('pause', onPause)

      return () => {
        player.removeEventListener('play', onPlay)
        player.removeEventListener('pause', onPause)
      }
    }
  }, [onPause, onPlay, player])

  useEffect(
    () => () => {
      onPause()
    },
    [onPause],
  )

  useEffect(() => {
    onPause()
  }, [mediaUrl, onPause])

  useEffect(() => {
    if (player) {
      player.currentTime = timestamp ? videoTimetoSeconds(timestamp).start : 0
    }
  }, [timestamp, player])

  return (
    <Flex>
      {loadError ? (
        <Text color="primaryRed" kind="medium">
          Audio failed to load
        </Text>
      ) : (
        <Audio
          controls
          id="audio-player"
          onError={() => {
            setLoadError(true)
            onError()
          }}
          onLoadedMetadata={() => {
            setLoadError(false)
            onLoaded()
          }}
          src={mediaUrl}
          volume={1}
        />
      )}
    </Flex>
  )
}

export const AudioPlayer = memo(_AudioPlayer)
