import { LinearProgress } from '@mui/material'
import styled from 'styled-components'
import { Flex } from '~/components/common/Flex'
import { Tooltip } from '~/components/common/ToolTip'
import { colors } from '~/utils'
import { Marker } from '../../Marker'
import { NodeExtended } from '~/types'

type Props = {
  duration: number
  progress: number
  markers: NodeExtended[]
}

export const ProgressBar = ({ duration, progress, markers }: Props) => {
  console.log('s')

  return (
    <ProgressWrapper>
      <Progress value={progress} variant="determinate" />
      {markers.map((node) => {
        const position = ((node?.start || 0) / duration) * 100
        const type = node?.node_type || ''

        return (
          <MarkerWrapper key={node?.ref_id} style={{ left: `${position}%` }}>
            <Tooltip content={`${node?.name || ''}|${node?.start}`}>
              <Marker type={type} />
            </Tooltip>
          </MarkerWrapper>
        )
      })}
    </ProgressWrapper>
  )
}

const Progress = styled(LinearProgress)`
  && {
    height: 2px;
    background-color: ${colors.white};
    color: blue;
    flex-grow: 1;

    .MuiLinearProgress-bar {
      background: ${colors.GRAY6};
    }
  }
`

const ProgressWrapper = styled(Flex)`
  position: relative;
  flex: 1 1 100%;
`

const MarkerWrapper = styled.div`
  position: absolute;
  top: -4px; /* Adjust as needed to center above the progress bar */
  width: 8px;
  height: 8px;
  background-color: ${colors.white};
  border-radius: 50%;
  transform: translateX(-50%); /* Center the marker horizontally */
  transform: translateX(-50%) translateY(-50%);
  top: 50%;
`
