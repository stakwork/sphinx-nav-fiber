import { Line } from '@react-three/drei'
import { useEffect, useState } from 'react'
import { QuadraticBezierCurve3, Vector3 } from 'three'
import { NODE_TYPE_COLORS } from '~/constants'
import { useGraphStore, useSelectedNode } from '~/stores/useGraphStore'
import { Link } from '~/types'

type Props = {
  link: Link
  animated?: boolean
}

export const Segment = ({ link, animated }: Props) => {
  const selectedNode = useSelectedNode()
  const [start, setStart] = useState(new Vector3(0, 0, 0))
  const [end, setEnd] = useState(new Vector3(0, 0, 0))
  const [color] = useState(NODE_TYPE_COLORS[0])
  const nodesNormalized = useGraphStore((s) => s.nodesNormalized)

  false && console.log(color)
  false && console.log(animated)

  useEffect(() => {
    setStart(new Vector3(link.sourcePosition?.x || 0, link.sourcePosition?.y || 0, link.sourcePosition?.z || 0))
    setEnd(new Vector3(link.targetPosition?.x || 0, link.targetPosition?.y || 0, link.targetPosition?.z || 0))

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedNode, link])

  const controlPoint = new Vector3(0, 1, 0) // Adjust this point to control the curvature

  const curve = new QuadraticBezierCurve3(start, controlPoint, end)
  const curved = nodesNormalized[link.source]?.node_type !== nodesNormalized[link.target]?.node_type
  const linkColor = !curved ? color : NODE_TYPE_COLORS[1]
  const points = curved ? curve.getPoints(50) : [start, end]

  const isVisible = !selectedNode || selectedNode.ref_id === link.source || selectedNode.ref_id === link.target

  return (
    <Line color={linkColor} opacity={0.1} points={points.map((p) => p.toArray())} transparent visible={isVisible} />
  )
}
