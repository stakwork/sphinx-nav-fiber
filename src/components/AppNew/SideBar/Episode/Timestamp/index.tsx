import { IconButton } from '@mui/material'
import { MdAccessTime, MdPlayArrow } from 'react-icons/md'
import { ClipLoader } from 'react-spinners'
import styled from 'styled-components'
import InfoIcon from '~/components/Icons/InfoIcon'
import ScheduleIcon from '~/components/Icons/ScheduleIcon'
import { Flex } from '~/components/common/Flex'
import { NodeExtended } from '~/types'
import { ColorName, colors } from '~/utils/colors'
import { formatDescription } from '~/utils/formatDescription'
import { formatTimestamp } from '~/utils/formatTimestamp'
import { Equalizer } from './Equalizer'

const Wrapper = styled(Flex).attrs<{ isSelected?: boolean }>(() => ({
  direction: 'row',
}))<{ isSelected?: boolean }>`
  cursor: pointer;
  color: ${colors.primaryText1};
  border-top: 1px solid ${colors.black};
  background: ${(props) => (props.isSelected ? 'rgba(97, 138, 255, 0.1)' : `${colors.BG1}`)};

  .play-pause {
    font-size: 24px;
    border-radius: 4px;
    color: ${colors.GRAY7};
    cursor: pointer;
  }

  .info {
    margin-left: auto;
    color: ${colors.GRAY7};
    font-size: 24px;
  }

  &:hover {
    .play-pause {
      color: ${colors.white};
    }
  }
`

type Props = {
  timestamp: NodeExtended
  isSelected: boolean
  onClick?: () => void
  setOpenClip: (timestamp: NodeExtended) => void
}

export const Timestamp = ({ onClick, timestamp, isSelected, setOpenClip }: Props) => {
  const color: ColorName = isSelected ? 'blueTextAccent' : 'placeholderText'

  const icon = isSelected ? (
    <MdPlayArrow color={colors[color]} data-testid="play-arrow-icon" fontSize={18} />
  ) : (
    <MdAccessTime color={colors[color]} data-testid="access-time-icon" fontSize={18} />
  )

  return (
    <Wrapper
      align="center"
      data-testid="wrapper"
      direction="row"
      isSelected={isSelected}
      justify="flex-start"
      onClick={onClick}
      px={20}
      py={20}
    >
      <div>
        <IconButton className="play-pause">{!isSelected ? <ScheduleIcon /> : <Equalizer />}</IconButton>
        {false && (
          <Flex direction="row" px={20}>
            {isSelected ? <ClipLoader color={colors[color]} loading size={14} /> : icon}
          </Flex>
        )}
      </div>

      <About align="flex-start" direction="column" justify="center">
        {timestamp.timestamp && <span className="timestamp">{formatTimestamp(timestamp.timestamp)}</span>}
        <span className="title">{formatDescription(timestamp.show_title)}</span>
      </About>
      <div className="info">
        <Flex data-testid="info-icon-wrapper" onClick={() => setOpenClip(timestamp)} pt={4}>
          <InfoIcon />
        </Flex>
      </div>
    </Wrapper>
  )
}

const About = styled(Flex)`
  font-size: 13px;
  color: ${colors.white};
  font-family: 'Barlow';
  margin: 0 16px;
  flex-shrink: 1;
  .title {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 100%;
  }
  .timestamp {
    color: ${colors.GRAY6};
  }
`
