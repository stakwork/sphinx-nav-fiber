import { useEffect } from 'react'
import styled from 'styled-components'
import { Actions } from '~/components/App/SideBar/Actions'
import { AudioPlayer } from '~/components/AudioPlayer'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { setIsTimestampLoaded, useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { videoTimetoSeconds } from '~/utils/videoTimetoSeconds'

export const CREATOR_HEADING_HEIGHT = 240

const Wrapper = styled(Flex)`
  flex-direction: column;
  background: ${colors.dashboardHeader};
  border-bottom: 1px solid #101317;
  box-shadow: 0px 5px 6px rgba(0, 0, 0, 0.5);
  z-index: 0;
`

export const Heading = () => {
  const selectedNode = useSelectedNode()
  const selectedTimestamp = useDataStore((s) => s.selectedTimestamp)

  useEffect(() => {
    if (!selectedTimestamp) {
      return
    }

    const { timestamp } = selectedTimestamp

    const audioElement = document.getElementById('audio-player') as HTMLAudioElement

    if (audioElement) {
      audioElement.currentTime = timestamp ? videoTimetoSeconds(timestamp) : 0
    }
  }, [selectedTimestamp])

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
        </Flex>
      </Flex>

      <Flex pb={10} pt={30}>
        <Actions transcript />
      </Flex>

      <Flex pt={10}>
        <AudioPlayer
          mediaUrl={selectedTimestamp?.link || ''}
          onError={() => {
            setIsTimestampLoaded(true)
          }}
          onLoaded={() => {
            setIsTimestampLoaded(true)
          }}
          timestamp={selectedTimestamp?.timestamp || ''}
        />
      </Flex>
    </Wrapper>
  )
}
