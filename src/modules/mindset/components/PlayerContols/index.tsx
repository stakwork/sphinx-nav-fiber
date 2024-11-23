import { IconButton } from '@mui/material'
import styled from 'styled-components'
import ChevronLeftIcon from '~/components/Icons/ChevronLeftIcon'
import ChevronRightIcon from '~/components/Icons/ChevronRightIcon.js'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import { Flex } from '~/components/common/Flex'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { videoTimeToSeconds } from '~/utils'
import { colors } from '~/utils/colors'
import { ProgressBar } from './ProgressBar'

export const PlayerControl = () => {
  const { isPlaying, setIsPlaying, playingTime, playingNode, duration } = usePlayerStore((s) => s)

  const [start, end] = playingNode?.properties?.timestamp
    ? (playingNode.properties.timestamp as string).split('-').map((time) => videoTimeToSeconds(time))
    : [0, duration]

  const startTime = ((playingTime - start) / (end - start)) * 100

  console.log(startTime)

  const showPlayer = playingNode

  return showPlayer ? (
    <Wrapper>
      <Controls>
        <ChevronLeftIcon />
        <Action
          data-testid="play-pause-button"
          onClick={(e) => {
            setIsPlaying(!isPlaying)
            e.stopPropagation()
          }}
          size="small"
        >
          {isPlaying ? <PauseIcon data-testid="pause-icon" /> : <PlayIcon data-testid="play-icon" />}
        </Action>
        <ChevronRightIcon />
      </Controls>
      <ProgressBar duration={duration} progress={startTime} />
    </Wrapper>
  ) : null
}

const Wrapper = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'space-between',
})`
  padding: 20px;
  margin: 20px;
  background: ${colors.BG2};
  height: 96px;
  border-radius: 8px;
  box-sizing: border-box;
`

const Controls = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'flex-start',
})`
  width: 142px;
  height: 54px;
  background: ${colors.BG1};
  border-radius: 40px;
  margin-right: 54px;
  color: ${colors.white};
  font-size: 20px;
  padding: 12px;
  justify-content: space-between;
  box-sizing: border-box;
`

const Action = styled(IconButton)`
  && {
    font-size: 36px;
    padding: 2px;
    overflow: hidden;
  }
`
