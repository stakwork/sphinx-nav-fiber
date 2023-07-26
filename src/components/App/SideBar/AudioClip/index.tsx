import { memo, useCallback, useEffect } from 'react'
import styled from 'styled-components'
import { Actions } from '~/components/App/SideBar/Actions'
import { AudioPlayer } from '~/components/AudioPlayer'
import { Avatar } from '~/components/common/Avatar'
import { Flex } from '~/components/common/Flex'
import { Text } from '~/components/common/Text'
import { setIsTimestampLoaded, useSelectedNode } from '~/stores/useDataStore'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { colors } from '~/utils/colors'
import { useIsMatchBreakpoint } from '~/utils/useIsMatchBreakpoint'
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

// eslint-disable-next-line no-underscore-dangle
const _AudioClip = () => {
  const selectedNode = useSelectedNode()
  const isMobile = useIsMatchBreakpoint('sm', 'down')
  const isPlay = usePlayerStore((s) => s.isPlaying)
  const setIsPlaying = usePlayerStore((s) => s.setIsPlaying)

  useEffect(
    () => () => {
      setIsPlaying(false)
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
    <Wrapper p={20}>
      <Flex direction="row">
        <Flex pr={24}>
          <Avatar size={isMobile ? 45 : 80} src={selectedNode?.image_url || 'audio_default.svg'} />
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

      <Flex pb={10} pt={10}>
        <Actions />
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

      <Flex pt={22}>
        <Transcript node={selectedNode} stateless />
      </Flex>
    </Wrapper>
  )
}

export const AudioClip = memo(_AudioClip)
