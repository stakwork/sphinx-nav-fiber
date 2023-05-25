import { Float, Html } from '@react-three/drei'
import { memo, useMemo } from 'react'
import { MdClose, MdViewInAr } from 'react-icons/md'
import styled from 'styled-components'
import { Vector3 } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'

export const NodeControls = memo(() => {
  const data = useDataStore((s) => s.data)
  const selectedNode = useSelectedNode()
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const setShowSelectionGraph = useDataStore((s) => s.setShowSelectionGraph)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)

  const position = useMemo(() => {
    const selected = data?.nodes.find((f) => f.ref_id === selectedNode?.ref_id)
    return new Vector3(selected?.x || 0, selected?.y || 0, selected?.z || 0)
  }, [selectedNode, data])

  if (!selectedNode) {
    return null
  }

  return (
    <Float
      floatingRange={[1, 2]}
      /* Up/down float intensity, works like a multiplier with floatingRange,defaults to 1 */
      floatIntensity={1}
      /* Animation speed, defaults to 1 */
      position={position}
      speed={1}
    >
      <Html
        center
        className="control-panel"
        onClick={(e) => e.stopPropagation()}
        onKeyDown={(e) => e.stopPropagation()}
        onPointerDown={(e) => e.stopPropagation()}
        onPointerOut={(e) => e.stopPropagation()}
        onPointerOver={(e) => e.stopPropagation()}
        onPointerUp={(e) => e.stopPropagation()}
        sprite
      >
        <IconButton
          left={0}
          color="#222"
          onClick={(e) => {
            e.stopPropagation()
            setShowSelectionGraph(!showSelectionGraph)
          }}
        >
          <MdViewInAr />
        </IconButton>

        <IconButton
          left={40}
          color="#222"
          onClick={(e) => {
            e.stopPropagation()
            setSelectedNode(null)
            setShowSelectionGraph(false)
          }}
        >
          <MdClose />
        </IconButton>
      </Html>
    </Float>
  )
})

NodeControls.displayName = 'NodeControls'

type ButtonProps = {
  left: number
  color: string
}

const IconButton = styled.div<ButtonProps>`
  position: fixed;
  top: -70px;
  left: ${(p: ButtonProps) => -17 + p.left}px;
  width: 34px;
  height: 34px;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #000000bb;
  border: 3px solid ${(p: ButtonProps) => p.color};
  color: #ffffff;
  border-radius: 100%;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.4s;
`
