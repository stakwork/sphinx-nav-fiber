import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useCallback, useMemo, useRef } from 'react'
import { MdMenu, MdViewInAr } from 'react-icons/md'
import styled from 'styled-components'
import { Group, Vector3 } from 'three'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { panelIsHidden } from '../constants'
import { buttonColors } from './constants'

const reuseableVector3 = new Vector3()

const labelKeysByNodeType: Record<string, string> = {
  episode: 'episode_title',
  show: 'show_title',
  clip: 'title',
  guest: 'label',
}

const getNodeLabelKey = (node_type: string | null) => {
  if (node_type && labelKeysByNodeType[node_type]) {
    return labelKeysByNodeType[node_type]
  }
  return 'label'
}

export const NodeControls = memo(() => {
  const ref = useRef<Group | null>(null)
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen)
  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const allGraphData = useDataStore((s) => s.data)
  const selectedNode = useSelectedNode()
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const setHideNodeDetails = useDataStore((s) => s.setHideNodeDetails)
  const hideNodeDetails = useDataStore((s) => s.hideNodeDetails)
  const setShowSelectionGraph = useDataStore((s) => s.setShowSelectionGraph)
  const searchButtonRef = useRef<Group | null>(null)

  useFrame(({ camera }) => {
    if (searchButtonRef?.current) {
      // Make text face the camera
      searchButtonRef.current.quaternion.copy(camera.quaternion)
    }
  })

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
  }, [selectedNode, showSelectionGraph, selectionGraphData, allGraphData])

  const buttons = useMemo(
    () => [
      {
        key: 'control-key-0',
        colors: buttonColors(hideNodeDetails).menu,
        icon: <MdMenu />,
        left: -40,
        onClick: () => {
          setHideNodeDetails(!hideNodeDetails)
        },
        hide: showSelectionGraph || panelIsHidden(selectedNode?.node_type),
      },
      {
        key: 'control-key-1',
        colors: buttonColors(showSelectionGraph).focus,
        icon: <MdViewInAr />,
        left: 0,
        onClick: () => {
          const nextState = !showSelectionGraph

          setShowSelectionGraph(nextState)

          if (nextState) {
            setSidebarOpen(true)
          }
        },
      },
    ],
    [
      setShowSelectionGraph,
      setSelectedNode,
      setSidebarOpen,
      setHideNodeDetails,
      hideNodeDetails,
      showSelectionGraph,
      selectedNode,
    ],
  )

  if (!selectedNode) {
    return null
  }

  return (
    <group ref={ref}>
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
        {buttons.map((b) => {
          if (b.hide) {
            return null
          }

          return (
            <IconButton
              key={b.key}
              backgroundColor={b.colors.backgroundColor}
              borderColor={b.colors.borderColor}
              fontColor={b.colors.fontColor}
              left={b.left}
              onClick={(e) => {
                e.stopPropagation()
                b.onClick()
              }}
            >
              {b.icon}
            </IconButton>
          )
        })}
      </Html>
    </group>
  )
})

NodeControls.displayName = 'NodeControls'

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
