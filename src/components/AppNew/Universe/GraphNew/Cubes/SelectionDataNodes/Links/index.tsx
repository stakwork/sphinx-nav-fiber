import { Segment, SegmentObject, Text } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { EdgeExtendedNew, NodeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'

type Props = {
  link: EdgeExtendedNew
  animated?: boolean
}

export const SelectionLink = ({ link, animated }: Props) => {
  const ref = useRef<SegmentObject | null>(null)
  const selectedNode = useSelectedNode()
  const [start, setStart] = useState(new Vector3(0, 0, 0))
  const [end, setEnd] = useState(new Vector3(0, 0, 0))
  const [color, setColor] = useState(0x888888)
  const selectionGraphData = useGraphStore((s) => s.selectionGraphData)

  console.log(start)
  console.log(end)

  useEffect(() => {
    setStart(new Vector3(link.sourcePosition?.x || 0, link.sourcePosition?.y || 0, link.sourcePosition?.z || 0))
    setEnd(new Vector3(link.targetPosition?.x || 0, link.targetPosition?.y || 0, link.targetPosition?.z || 0))
    setColor(NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, link])

  useFrame(() => {
    if (animated && ref.current) {
      const source = selectionGraphData.nodes.find(
        (f) => f.ref_id === (link.source as unknown as NodeExtendedNew)?.ref_id,
      )

      const target = selectionGraphData.nodes.find(
        (f) => f.ref_id === (link.target as unknown as NodeExtendedNew).ref_id,
      )

      ref.current.start.set(source?.x || 0, source?.y || 0, source?.z || 0)
      ref.current.end.set(target?.x || 0, target?.y || 0, target?.z || 0)
    }
  })

  const midPoint = new Vector3().addVectors(start, end).multiplyScalar(0.5)

  return (
    <>
      <Segment ref={ref} color={'0xFFFFFF' || color} end={end} start={start} />
      {false && (
        <Text
          anchorX="center"
          anchorY="middle"
          color="white"
          position={[midPoint.x, midPoint.y, midPoint.z + 0.2]}
          scale={500}
        >
          ABC
        </Text>
      )}
    </>
  )
}
