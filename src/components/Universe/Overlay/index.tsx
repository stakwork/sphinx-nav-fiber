import styled from 'styled-components'
import { Button } from '~/components/Button'
import CenterCamera from '~/components/Icons/CenterCameraIcon'
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
        background="bluePressState"
        kind="small"
        onClick={() => setCameraFocusTrigger(!cameraFocusTrigger)}
        startIcon={<CenterCamera />}
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
  position: absolute;
  right: 20px;
  bottom: 102px;

  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  padding: 8px 8px 9px 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  background: var(--BG-1, #23252f);

  &:hover {
    background: #121319;
    transition: 0.2s;
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
