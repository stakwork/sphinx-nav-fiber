import { ComponentType, useEffect, useState } from 'react'
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
}

export const AudioPlayer = ({ mediaUrl, timestamp, onLoaded, onError }: AudioPlayerProps) => {
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    const audioElement = document.getElementById('audio-player') as HTMLAudioElement

    if (audioElement) {
      audioElement.currentTime = timestamp ? videoTimetoSeconds(timestamp) : 0
    }
  }, [timestamp])

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

            if (onError) {
              onError()
            }
          }}
          onLoadedMetadata={() => {
            setLoadError(false)

            if (onLoaded) {
              onLoaded()
            }
          }}
          src={mediaUrl}
          volume={1}
        />
      )}
    </Flex>
  )
}
