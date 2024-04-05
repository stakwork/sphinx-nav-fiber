import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useCallback, useMemo, useRef } from 'react'
import { MdClose, MdViewInAr } from 'react-icons/md'
import styled from 'styled-components'
import { Group, Vector3 } from 'three'
import EditIcon from '~/components/Icons/EditIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore, useSelectedNode } from '~/stores/useDataStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { buttonColors } from './constants'

const reuseableVector3 = new Vector3()

export const NodeControls = memo(() => {
  const ref = useRef<Group | null>(null)
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen)

  const { open: openEditNodeNameModal } = useModal('editNodeName')
  const { open: addEdgeToNodeModal } = useModal('addEdgeToNode')

  const [isAdmin] = useUserStore((s) => [s.isAdmin])

  const showSelectionGraph = useDataStore((s) => s.showSelectionGraph)
  const selectionGraphData = useDataStore((s) => s.selectionGraphData)
  const allGraphData = useDataStore((s) => s.data)
  const selectedNode = useSelectedNode()
  const setSelectedNode = useDataStore((s) => s.setSelectedNode)
  const setShowSelectionGraph = useDataStore((s) => s.setShowSelectionGraph)

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

  const buttons = useMemo(() => {
    const conditionalActions = isAdmin
      ? [
          {
            key: 'control-key-1',
            colors: buttonColors(showSelectionGraph).focus,
            icon: <PlusIcon />,
            left: -80,
            className: 'add',
            onClick: () => {
              addEdgeToNodeModal()
            },
          },
          {
            key: 'control-key-2',
            colors: buttonColors(showSelectionGraph).focus,
            icon: <EditIcon />,
            left: -40,
            className: 'edit',
            onClick: () => {
              openEditNodeNameModal()
            },
          },
        ]
      : []

    const baseActions = [
      {
        key: 'control-key-4',
        colors: buttonColors(showSelectionGraph).focus,
        icon: <MdViewInAr />,
        left: 0,
        className: 'expand',
        onClick: () => {
          const nextState = !showSelectionGraph

          setShowSelectionGraph(nextState)

          if (nextState) {
            setSidebarOpen(true)
          }
        },
      },
      {
        key: 'control-key-5',
        colors: buttonColors(true).close,
        icon: <MdClose />,
        left: 40,
        className: 'exit',
        onClick: () => {
          setSelectedNode(null)
          setShowSelectionGraph(false)
        },
      },
    ]

    return [...conditionalActions, ...baseActions].map((i, index) => ({ ...i, left: -80 + index * 40 }))
  }, [
    showSelectionGraph,
    addEdgeToNodeModal,
    openEditNodeNameModal,
    setShowSelectionGraph,
    setSidebarOpen,
    setSelectedNode,
    isAdmin,
  ])

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
        zIndexRange={[16777271, 16777272]}
      >
        {buttons.map((b) => (
          <IconButton
            key={b.key}
            backgroundColor={b.colors.backgroundColor}
            borderColor={b.colors.borderColor}
            className={b.className}
            fontColor={b.colors.fontColor}
            left={b.left}
            onClick={(e) => {
              e.stopPropagation()
              b.onClick()
            }}
          >
            {b.icon}
          </IconButton>
        ))}
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
  top: -60px;
  left: ${(p: ButtonProps) => -7 + p.left}px;
  width: 24px;
  height: 24px;

  border-radius: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(p: ButtonProps) => (p.backgroundColor ? p.backgroundColor : '#000000bb')};
  color: ${(p: ButtonProps) => (p.fontColor ? p.fontColor : '#ffffff')};
  border-radius: 100%;
  font-size: 16px;
  cursor: pointer;
  transition: opacity 0.4s;
  box-shadow: 0px 2px 12px rgba(0, 0, 0, 0.5);
`
