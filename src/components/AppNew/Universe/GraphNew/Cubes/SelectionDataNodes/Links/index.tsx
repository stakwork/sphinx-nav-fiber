import { Segment, SegmentObject } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { EdgeExtendedNew } from '~/network/fetchGraphDataNew/types'
import { useSelectedNode } from '~/stores/useGraphStore'
import { PathwayBadge } from './Badge'

type Props = {
  link: EdgeExtendedNew
  title: string
}

export const SelectionLink = ({ link, title }: Props) => {
  const ref = useRef<SegmentObject | null>(null)
  const selectedNode = useSelectedNode()
  const [start, setStart] = useState(new Vector3(0, 0, 0))
  const [end, setEnd] = useState(new Vector3(0, 0, 0))
  const [color, setColor] = useState(0x888888)

  console.warn(start)
  console.warn(end)

  useEffect(() => {
    setStart(new Vector3(link.sourcePosition?.x || 0, link.sourcePosition?.y || 0, link.sourcePosition?.z || 0))
    setEnd(new Vector3(link.targetPosition?.x || 0, link.targetPosition?.y || 0, link.targetPosition?.z || 0))
    setColor(NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, link])

  const midPoint = new Vector3().addVectors(start, end).multiplyScalar(0.5)

  return (
    <>
      <Segment ref={ref} color={'0xFFFFFF' || color} end={end} start={start} />
      <PathwayBadge position={midPoint} title={title} />
    </>
  )
}
