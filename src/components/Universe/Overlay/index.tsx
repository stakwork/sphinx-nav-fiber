import { useEffect } from 'react'
import styled from 'styled-components'
import { Button } from '~/components/Button'
import { useControlStore } from '~/stores/useControlStore'
import { useDataStore } from '~/stores/useDataStore'
import { Tooltip } from '../Graph/Cubes/Cube/components/Tooltip'

export const Overlay = () => {
  const [selectedNode, hoveredNode, cameraFocusTrigger, setCameraFocusTrigger] = useDataStore((s) => [
    s.selectedNode,
    s.hoveredNode,
    s.cameraFocusTrigger,
    s.setCameraFocusTrigger,
  ])

  const userMovedCamera = useControlStore((s) => s.userMovedCamera)

  useEffect(() => {
    document.body.style.cursor = hoveredNode ? 'pointer' : 'auto'
  }, [hoveredNode])

  return (
    <OverlayWrap>
      {!!selectedNode && userMovedCamera && (
        <Button background="bluePressState" kind="small" onClick={() => setCameraFocusTrigger(!cameraFocusTrigger)}>
          Re-center map
        </Button>
      )}

      {hoveredNode && (
        <div id="tooltip-portal">
          <Tooltip node={hoveredNode} />
        </div>
      )}
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
