import { IconButton } from '@mui/material'
import styled from 'styled-components'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import { Flex } from '~/components/common/Flex'
import { usePlayerStore } from '~/stores/usePlayerStore'
import { NodeExtended } from '~/types'
import { videoTimeToSeconds } from '~/utils'
import { colors } from '~/utils/colors'
import { ProgressBarCanvas } from './CanvasProgressbar'
import { ProgressBar } from './ProgressBar'

type Props = {
  markers: NodeExtended[]
}

export const PlayerControl = ({ markers }: Props) => {
  const { isPlaying, setIsPlaying, playingTime, setPlayingTime, playingNode, duration } = usePlayerStore((s) => s)

  const [start, end] = playingNode?.properties?.timestamp
    ? (playingNode.properties.timestamp as string).split('-').map((time) => videoTimeToSeconds(time))
    : [0, duration]

  const startTime = ((playingTime - start) / (end - start)) * 100

  const handleRewind = () => {
    const newTime = playingTime - 15

    setPlayingTime(newTime < 0 ? 0 : newTime)
  }

  const handleFastForward = () => {
    const newTime = playingTime + 15

    setPlayingTime(newTime > duration ? duration : newTime)
  }

  const showPlayer = playingNode

  return showPlayer ? (
    <Wrapper>
      <Controls>
        <RewindIconWrapper onClick={handleRewind}>
          <img alt="" src="public/svg-icons/RewindIcon.svg" />
        </RewindIconWrapper>
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
        <ForwardIconWrapper onClick={handleFastForward}>
          <img alt="" src="public/svg-icons/ForwardIcon.svg" />
        </ForwardIconWrapper>
      </Controls>
      <ProgressBar duration={duration} markers={markers} progress={startTime} />
      {false && <ProgressBarCanvas duration={duration} progress={startTime} />}
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

const RewindIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 1px 0 0 1px;

  img {
    width: 20px;
    height: auto;
  }
`

const ForwardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 24px;
    height: auto;
  }
`
