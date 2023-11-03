import styled from 'styled-components'
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
      <CenterButton>
        <CenterIcon onClick={() =>
          {
            setCameraFocusTrigger(!cameraFocusTrigger);
            console.log("hello");
          }}
        />
      </CenterButton>

      {hoveredNode && (
        <div id="tooltip-portal">
          <Tooltip node={hoveredNode} />
        </div>
      )}
    </OverlayWrap>
  )
}

const CenterButton = styled.div`
  position: absolute;
  right: 20px;
  bottom: 102px;

  display: flex;
  padding: 8px 8px 9px 8px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 200px;
  background: var(--BG-1, #23252F);

  cursor: pointer;

  &:hover {
    background: #121319;
    transition: .2s;
  }
`;

// const PosText = styled.p`
//   position: absolute;
//   right: 20px;
//   bottom: 120px;
//   color: white;
// `;

const CenterIcon = styled(CenterCamera)`
`;

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
