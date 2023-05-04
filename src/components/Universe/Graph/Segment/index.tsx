import { Segment as DreiSegment, SegmentObject } from '@react-three/drei'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { useSelectedNode, useDataStore } from '~/stores/useDataStore'
import { Link, NodeExtended } from '~/types'
import { useFrame } from '@react-three/fiber'


type Props = {
  link: Link<NodeExtended>
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
      if (
        selectedNode.children?.length &&
        ((link?.targetRef && selectedNode.children.includes(link.targetRef)) ||
          (link?.sourceRef && selectedNode.children.includes(link.sourceRef)))
      ) {
        setColor(NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor)
      }
      // color other linked segments
      else {
        setColor(NODE_RELATIVE_HIGHLIGHT_COLORS.source.segmentColor)
      }
    } else {
      setColor(0xcccccc)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, link])

  useFrame(() => {
    if (ref.current) {
      ref.current.start.set(link.source.x || 0, link.source.y || 0, link.source.z || 0)

      ref.current.end.set(link.target.x || 0, link.target.y || 0, link.target.z || 0)

      const { selectedNode } = useDataStore.getState()

      if (selectedNode && (selectedNode?.id === link.target.id || selectedNode?.id === link.source.id)) {
        // color children segments
        if (
          selectedNode.children?.length &&
          ((link?.target?.id && selectedNode.children.includes(link.target.id)) ||
            (link?.source?.id && selectedNode.children.includes(link.source.id)))
        ) {
          ref.current.color.setHex(NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor)
        }
        // color other linked segments
        else {
          ref.current.color.setHex(NODE_RELATIVE_HIGHLIGHT_COLORS.source.segmentColor)
        }
      } else {
        ref.current.color.setHex(0xcccccc)
      }
    }
  })

  return <DreiSegment ref={ref} color={color} end={end} start={start} />
}
