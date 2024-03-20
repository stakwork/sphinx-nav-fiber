import styled from 'styled-components'
import { ActionsToolbar } from '~/components/App/ActionsToolbar'
import { useGraphStore } from '~/stores/useGraphStore'
import { Tooltip } from '../GraphNew/Cubes/Cube/components/Tooltip'
import { TypesNavigation } from './TypesNavigation'

type Props = {
  onSubmit: () => void
}

export const Overlay = ({ onSubmit }: Props) => {
  const [selectedNode] = useGraphStore((s) => [s.selectedNode])

  return (
    <OverlayWrap>
      {/* <GraphSearch /> */}
      <TypesNavigation onSubmit={onSubmit} />
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
  userSelect: 'none',
  pointerEvents: 'none',
  display: 'flex',

  justifyContent: 'flex-start',
  alignItems: 'flex-start',
  height: '100%',
  width: '100%',
  padding: '16px',
  [theme.breakpoints.down('sm')]: {
    top: 50,
  },
}))
