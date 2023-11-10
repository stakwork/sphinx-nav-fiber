import { Button } from '@mui/material'
import styled from 'styled-components'
import CameraCenterIcon from '~/components/Icons/CameraCenterIcon'
import { useDataStore } from '~/stores/useDataStore'
import { Tooltip } from '../Graph/Cubes/Cube/components/Tooltip'

export const Overlay = () => {
  const [hoveredNode, cameraFocusTrigger, setCameraFocusTrigger] = useDataStore((s) => [
    s.hoveredNode,
    s.cameraFocusTrigger,
    s.setCameraFocusTrigger,
  ])

  return (
    <OverlayWrap>
      <CameraCenterButton
        href=""
        onClick={() => setCameraFocusTrigger(!cameraFocusTrigger)}
        size="medium"
        startIcon={<CameraCenterIcon />}
      />

      {hoveredNode && (
        <div id="tooltip-portal">
          <Tooltip node={hoveredNode} />
        </div>
      )}
    </OverlayWrap>
  )
}

const CameraCenterButton = styled(Button)`
  && {
    position: absolute;
    right: 20px;
    bottom: 102px;
    padding: 0;
    width: 32px;
    min-width: auto;
    justify-content: center;
    align-items: center;
    pointer-events: all;

    .MuiButton-startIcon {
      margin-left: 0;
      filter: brightness(0.65);
    }
  }
`

const OverlayWrap = styled('div')(({ theme }) => ({
  position: 'absolute',
  zIndex: 1,
  top: 0,
  left: 0,
  userSelect: 'none',
  pointerEvents: 'none',
  display: 'flex',

  justifyContent: 'flex-end',
  alignItems: 'flex-start',
  height: '100%',
  width: '100%',
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    top: 50,
  },
}))
