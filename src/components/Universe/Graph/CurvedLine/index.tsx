import { Line } from '@react-three/drei'
import { useEffect, useMemo, useState } from 'react'
import { Vector3 } from 'three'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { useSelectedNode } from '~/stores/useDataStore'
import { Link } from '~/types'
import { getCurvedLineFromStartAndEnd } from './constants'

type Props = {
  link: Link
}

export const CurvedLine = ({ link }: Props) => {
  const selectedNode = useSelectedNode()
  const [color, setColor] = useState(0x888888)

  useEffect(() => {
    const refId = selectedNode?.ref_id || ''
    const linkIsSelected = selectedNode && (refId === link.targetRef || refId === link.sourceRef)

    if (linkIsSelected) {
      setColor(link.color || NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor)
    } else if (selectedNode) {
      setColor(0x555555)
    } else {
      setColor(0x888888)
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, link])

  const points = useMemo(() => {
    const refId = selectedNode?.ref_id || ''
    const linkIsSelected = selectedNode && (refId === link.targetRef || refId === link.sourceRef)

    if (!(!link.onlyVisibleOnSelect || linkIsSelected)) {
      return []
    }

    const start = new Vector3(link.sourcePosition?.x || 0, link.sourcePosition?.y || 0, link.sourcePosition?.z || 0)
    const end = new Vector3(link.targetPosition?.x || 0, link.targetPosition?.y || 0, link.targetPosition?.z || 0)

    return getCurvedLineFromStartAndEnd(start, end)
  }, [link, selectedNode])

  if (!points.length) {
    return null
  }

  return (
    <Line
      color={color} // Default
      dashed={false} // Default
      lineWidth={3} // In pixels (default)
      points={points} // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
    />
  )
}
