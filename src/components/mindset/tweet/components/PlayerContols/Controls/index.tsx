import { IconButton } from '@mui/material'
import { useCallback } from 'react'
import styled from 'styled-components'
import PauseIcon from '~/components/Icons/PauseIcon'
import PlayIcon from '~/components/Icons/PlayIcon'
import { Flex } from '~/components/common/Flex'
import { useTweetMindsetStore } from '~/stores/useTweetMindsetStore'
import { colors } from '~/utils/colors'

type Props = {
  onPlaybackRestart?: () => void
}

export const Controls = ({ onPlaybackRestart }: Props) => {
  const tweetIsPlaying = useTweetMindsetStore((s) => s.tweetIsPlaying)
  const setTweetIsPlaying = useTweetMindsetStore((s) => s.setTweetIsPlaying)

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleRewind = () => {}

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  const handleFastForward = () => {}

  const handlePlayPause = useCallback(() => {
    if (onPlaybackRestart) {
      onPlaybackRestart()
    }

    setTweetIsPlaying(!tweetIsPlaying)
  }, [tweetIsPlaying, setTweetIsPlaying, onPlaybackRestart])

  return (
    <Wrapper>
      <RewindIconWrapper onClick={handleRewind}>
        <img alt="" src="/RewindIcon.svg" />
      </RewindIconWrapper>
      <Action data-testid="play-pause-button" onClick={handlePlayPause} size="small">
        {tweetIsPlaying ? <PauseIcon data-testid="pause-icon" /> : <PlayIcon data-testid="play-icon" />}
      </Action>
      <ForwardIconWrapper onClick={handleFastForward}>
        <img alt="" src="/ForwardIcon.svg" />
      </ForwardIconWrapper>
    </Wrapper>
  )
}

Controls.displayName = 'Controls'

const Wrapper = styled(Flex).attrs({
  direction: 'row',
  align: 'center',
  justify: 'flex-start',
})`
  width: 200px;
  height: 54px;
  background: ${colors.BG1};
  border-radius: 40px;
  margin-right: 30px;
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
  cursor: pointer;
  img {
    width: 20px;
    height: auto;
  }
`

const ForwardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  img {
    width: 24px;
    height: auto;
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const MuteWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  cursor: pointer;
  border-radius: 50%;
  transition: background-color 0.3s ease;
  color: ${colors.GRAY6};

  svg {
    margin-top: 3px;
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: ${colors.DROPDOWN_BG};
  }
`

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const SpeedButton = styled.button`
  margin-top: 4px;
  background: ${colors.BG1};
  color: ${colors.GRAY6};
  border: none;
  width: 8px;
  border-radius: 20px;
  padding: 8px 20px 8px 8px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s ease;
`
