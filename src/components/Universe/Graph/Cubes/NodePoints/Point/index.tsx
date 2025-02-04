import { Billboard, Instance } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import { Group, Mesh } from 'three'
import { useDataStore } from '~/stores/useDataStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { NodeExtended } from '~/types'

type Props = {
  color: string
  scale: number
  name: string
  index: number
  node: NodeExtended
  nodeType: string
}

export const Point = memo(({ color, scale, name, index, node, nodeType }: Props) => {
  const nodeRef = useRef<Group | null>(null)
  const helperRef = useRef<Mesh | null>(null)

  useFrame(() => {
    if (!nodeRef.current || !helperRef.current) {
      return
    }

    const { searchQuery, simulation, selectedNodeTypes, selectedLinkTypes, selectedNode, selectedNodeSiblings } =
      useGraphStore.getState()

    const { nodesNormalized } = useDataStore.getState()

    const simulationNode = simulation?.nodes()[index]

    if (typeof simulationNode?.fx === 'number') {
      nodeRef.current.scale.set(scale, scale, scale)
    } else {
      nodeRef.current.scale.set(0, 0, 0)

      return
    }

    if (searchQuery) {
      const includesQuery = name.toLowerCase().includes(searchQuery.toLowerCase())
      const dynamicScale = includesQuery ? 1 : 0.1
      const isVisible = !!includesQuery

      helperRef.current.visible = isVisible

      nodeRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale)
    } else if (selectedNodeTypes.length) {
      const includesSelectedType = selectedNodeTypes.includes(nodeType)

      const dynamicScale = includesSelectedType ? 1 : 0.1
      const isVisible = !!includesSelectedType

      helperRef.current.visible = isVisible

      nodeRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale)
    } else if (selectedLinkTypes.length) {
      const normalizedNode = nodesNormalized.get(node.ref_id)
      const includesSelectedType = normalizedNode?.edgeTypes?.some((i) => selectedLinkTypes.includes(i))

      const dynamicScale = includesSelectedType ? 1 : 0.1
      const isVisible = !!includesSelectedType

      helperRef.current.visible = isVisible

      nodeRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale)
    } else if (selectedNode) {
      const show = selectedNodeSiblings.includes(node.ref_id) || selectedNode.ref_id === node.ref_id

      const dynamicScale = show ? 1 : 0.1
      const isVisible = !!show

      helperRef.current.visible = isVisible

      nodeRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale)
    } else {
      nodeRef.current.scale.set(1, 1, 1)
      helperRef.current.visible = true
    }
  })

  return (
    <Billboard ref={nodeRef} follow lockX={false} lockY={false} lockZ={false} name="group-name" visible={false}>
      <mesh ref={helperRef} name="instance-helper" scale={[scale, scale, scale]} userData={node}>
        <sphereGeometry args={[30, 16, 16]} />
        <meshBasicMaterial color="white" opacity={0} transparent />
      </mesh>
      <Instance color={color} name="instance" scale={scale} />
    </Billboard>
  )
})

Point.displayName = 'Point'
