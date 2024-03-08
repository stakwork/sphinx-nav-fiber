import styled from 'styled-components'
import { ActionsToolbar } from '~/components/App/ActionsToolbar'
import { useGraphStore } from '~/stores/useGraphStore'
import { Tooltip } from '../GraphNew/Cubes/Cube/components/Tooltip'

export const Overlay = () => {
  const [selectedNode] = useGraphStore((s) => [s.selectedNode])

  return (
    <OverlayWrap>
      <div id="tooltip-portal" />
      {selectedNode && (
        <div id="tooltip-portal">
          <Tooltip node={selectedNode} />
        </div>
      )}
      <ActionsToolbar />
    </OverlayWrap>
  )
}

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
