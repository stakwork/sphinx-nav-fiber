import { Float, Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useCallback, useRef } from 'react'
import { MdClose, MdViewInAr } from 'react-icons/md'
import styled from 'styled-components'
import { Group, Vector3 } from 'three'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'

const reuseableVector3 = new Vector3()

export const NodeControls = memo(() => {
  const ref = useRef<Group | null>(null)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const allGraphData = useDataStore((s) => s.data)
  const selectedNode = useSelectedNode()
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const setShowSelectionGraph = useDataStore((s) => s.setShowSelectionGraph)

  // useEffect(() => {
  //   setPosition()
  // }, [showSelectionGraph, selectedNode])

  useFrame(() => {
    setPosition()
  })

  const setPosition = useCallback(() => {
    const data = showSelectionGraph ? selectionGraphData : allGraphData

    if (ref.current) {
      const selected = data?.nodes.find((f) => f.ref_id === selectedNode?.ref_id)
      if (selected) {
        const newPosition = reuseableVector3.set(selected?.x, selected?.y, selected?.z)
        ref.current.position.copy(newPosition)
      }
    }
  }, [ref.current, selectedNode, showSelectionGraph, selectionGraphData, allGraphData])

  if (!selectedNode) {
    return null
  }

  return (
    <Float
      ref={ref}
      floatingRange={[1, 2]}
      /* Up/down float intensity, works like a multiplier with floatingRange,defaults to 1 */
      floatIntensity={1}
      /* Animation speed, defaults to 1 */
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
          borderColor={showSelectionGraph ? '#FFDB58bb' : '#fff'}
          backgroundColor={showSelectionGraph ? '#FFDB58bb' : '#fff'}
          fontColor={showSelectionGraph ? '#fff' : '#000'}
          onClick={(e) => {
            e.stopPropagation()
            setShowSelectionGraph(!showSelectionGraph)
          }}
        >
          <MdViewInAr />
        </IconButton>

        <IconButton
          left={40}
          borderColor="#fff"
          backgroundColor="#00000066"
          fontColor="#fff"
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

type ButtonProps = {
  left: number
  backgroundColor?: string
  borderColor?: string
  fontColor?: string
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
  background: ${(p: ButtonProps) => (p.backgroundColor ? p.backgroundColor : '#000000bb')};
  border: 3px solid ${(p: ButtonProps) => (p.borderColor ? p.borderColor : '#222')};
  color: ${(p: ButtonProps) => (p.fontColor ? p.fontColor : '#ffffff')};
  border-radius: 100%;
  font-size: 20px;
  cursor: pointer;
  transition: opacity 0.4s;
`
