import Popover from '@mui/material/Popover'
import { Html } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { memo, useCallback, useMemo, useRef } from 'react'
import { MdClose, MdViewInAr } from 'react-icons/md'
import styled from 'styled-components'
import { Group, Vector3 } from 'three'
import { useGraphData } from '~/components/DataRetriever'
import AddCircleIcon from '~/components/Icons/AddCircleIcon'
import EditIcon from '~/components/Icons/EditIcon'
import MergeIcon from '~/components/Icons/MergeIcon'
import NodesIcon from '~/components/Icons/NodesIcon'
import PlusIcon from '~/components/Icons/PlusIcon'
import { Flex } from '~/components/common/Flex'
import { fetchNodeEdges } from '~/network/fetchGraphData'
import { useAppStore } from '~/stores/useAppStore'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { NodeExtended } from '~/types'
import { colors } from '~/utils/colors'
import { buttonColors } from './constants'

const reuseableVector3 = new Vector3()

export const NodeControls = memo(() => {
  const ref = useRef<Group | null>(null)
  const setSidebarOpen = useAppStore((s) => s.setSidebarOpen)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  const { open: openEditNodeNameModal } = useModal('editNodeName')
  const { open: addEdgeToNodeModal } = useModal('addEdgeToNode')
  const { open: mergeTopicModal } = useModal('mergeToNode')

  const [isAdmin] = useUserStore((s) => [s.isAdmin])
  const [addNewNode] = useDataStore((s) => [s.addNewNode])

  const selectedNode = useSelectedNode()

  const { showSelectionGraph, selectionGraphData, setSelectedNode, setShowSelectionGraph } = useGraphStore((s) => s)

  const allGraphData = useGraphData()

  const getChildren = useCallback(async () => {
    try {
      if (selectedNode?.ref_id) {
        const res = await fetchNodeEdges(selectedNode?.ref_id, selectionGraphData.nodes.length || 0)

        if (res) {
          addNewNode(res)
        }
      }
    } catch (error) {
      console.log(error)
    }
  }, [addNewNode, selectedNode?.ref_id, selectionGraphData.nodes.length])

  useFrame(() => {
    setPosition()
  })

  const setPosition = useCallback(() => {
    const data = showSelectionGraph ? selectionGraphData : allGraphData

    if (ref.current) {
      const selected = data?.nodes.find((f: NodeExtended) => f.ref_id === selectedNode?.ref_id)

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
            onClick: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
              setAnchorEl(event.currentTarget as unknown as HTMLButtonElement)
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
        icon: <NodesIcon />,
        left: 40,
        className: 'exit',
        onClick: () => {
          getChildren()
        },
      },
      {
        key: 'control-key-5',
        colors: buttonColors(true).close,
        icon: <MdClose />,
        left: 40,
        className: 'exit',
        onClick: () => {
          setShowSelectionGraph(false)
          setSelectedNode(null)
        },
      },
    ]

    return [...conditionalActions, ...baseActions].map((i, index) => ({ ...i, left: -80 + index * 40 }))
  }, [
    isAdmin,
    showSelectionGraph,
    openEditNodeNameModal,
    setShowSelectionGraph,
    setSidebarOpen,
    getChildren,
    setSelectedNode,
  ])

  if (!selectedNode) {
    return null
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const open = Boolean(anchorEl)

  const id = open ? 'simple-popover' : undefined

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
              b.onClick(e)
            }}
          >
            {b.icon}
          </IconButton>
        ))}

        <PopoverWrapper
          anchorEl={anchorEl}
          anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
          id={id}
          onClose={handleClose}
          open={open}
          transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        >
          <PopoverOption
            data-testid="merge"
            onClick={() => {
              mergeTopicModal()
              handleClose()
            }}
          >
            <MergeIcon data-testid="MergeIcon" /> Merge
          </PopoverOption>
          <PopoverOption
            data-testid="add_edge"
            onClick={() => {
              addEdgeToNodeModal()
              handleClose()
            }}
          >
            <AddCircleIcon data-testid="AddCircleIcon" /> Add edge
          </PopoverOption>
        </PopoverWrapper>
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

const PopoverOption = styled(Flex).attrs({
  direction: 'row',
  px: 12,
  py: 8,
})`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 12px;
  cursor: pointer;
  background: ${colors.BUTTON1};
  color: ${colors.white};

  &:hover {
    background: ${colors.BUTTON1_HOVER};
    color: ${colors.GRAY3};
  }
`

const PopoverWrapper = styled(Popover)`
  && {
    z-index: 9999;
  }
  .MuiPaper-root {
    min-width: 149px;
    color: ${colors.GRAY3};
    box-shadow: 0px 1px 6px 0px rgba(0, 0, 0, 0.2);
    border-radius: 6px;
    z-index: 1;
    font-family: Barlow;
    font-size: 14px;
    font-weight: 500;
  }
`
