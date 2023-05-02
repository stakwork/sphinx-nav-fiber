import { ComponentType, useEffect, useState } from 'react'
import ReactAudioPlayer from 'react-audio-player'
import styled from 'styled-components'
import { Actions } from '~/components/App/SideBar/Actions'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { setIsTimestampLoaded, useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'
import { Transcript } from '../Transcript'

const Wrapper = styled(Flex)`
  flex: 1;
  min-height: 100%;
  flex-direction: column;
  background: ${colors.dashboardHeader};
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;
`

const Audio = styled(ReactAudioPlayer as unknown as ComponentType<typeof ReactAudioPlayer.defaultProps>)`
  width: 100%;
`

export const AudioClip = () => {
  const selectedNode = useSelectedNode()
  const [loadError, setLoadError] = useState(false)
  const timestamp = selectedNode?.timestamp

  useEffect(() => {
    const audioElement = document.getElementById('audio-player') as HTMLAudioElement

    if (audioElement) {
      audioElement.currentTime = timestamp ? videoTimetoSeconds(timestamp) : 0
    }
  }, [timestamp])

  return (
    <Wrapper p={20}>
      <Flex direction="row">
        <Flex pr={24}>
          <Avatar size={130} src={selectedNode?.image_url || 'audio_default.svg'} />
        </Flex>

        <Flex grow={1} shrink={1}>
          <Text kind="bigHeading">{selectedNode?.show_title || 'Unknown'}</Text>
          <Flex pt={10}>
            <Text color="mainBottomIcons" kind="medium">
              {selectedNode?.episode_title}
            </Text>
          </Flex>
          <Flex pt={10}>
            <Text kind="regular">{selectedNode?.timestamp}</Text>
          </Flex>
        </Flex>
      </Flex>

      <Flex pb={10} pt={30}>
        <Actions />
      </Flex>

      <Flex pt={10}>
        {loadError ? (
          <Text color="primaryRed" kind="medium">
            Audio failed to load
          </Text>
        ) : (
          <Audio
            controls
            id="audio-player"
            onError={() => {
              setIsTimestampLoaded(true)
              setLoadError(true)
            }}
            onLoadedMetadata={() => {
              setIsTimestampLoaded(true)
            }}
            src={selectedNode?.link}
            volume={1}
          />
        )}
      </Flex>

      <Flex pt={50}>
        <Transcript stateless />
      </Flex>
    </Wrapper>
  )
}
