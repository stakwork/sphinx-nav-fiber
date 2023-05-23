import { Segment as DreiSegment, SegmentObject } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { useSelectedNode } from '~/stores/useDataStore'
import { Link } from '~/types'

type Props = {
  link: Link
}

export const Segment = ({ link }: Props) => {
  const ref = useRef<SegmentObject | null>(null)
  const selectedNode = useSelectedNode()
  const [start, setStart] = useState(new Vector3(0, 0, 0))
  const [end, setEnd] = useState(new Vector3(0, 0, 0))
  const [color, setColor] = useState(0xcccccc)

  useEffect(() => {
    const refId = selectedNode?.ref_id || ''
    const linkIsSelected = selectedNode && (refId === link.targetRef || refId === link.sourceRef)

    if (!link.onlyVisibleOnSelect || linkIsSelected) {
      setStart(new Vector3(link.sourcePosition?.x || 0, link.sourcePosition?.y || 0, link.sourcePosition?.z || 0))
      setEnd(new Vector3(link.targetPosition?.x || 0, link.targetPosition?.y || 0, link.targetPosition?.z || 0))
    } else {
      setStart(new Vector3(0, 0, 0))
      setEnd(new Vector3(0, 0, 0))
    }

    if (linkIsSelected) {
      setColor(link.color || NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor)
    } else {
      setColor(0xcccccc)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, link])

  return <DreiSegment ref={ref} color={color} end={end} start={start} />
}
