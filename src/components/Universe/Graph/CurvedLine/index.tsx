import { Line } from '@react-three/drei'
import { useEffect, useMemo, useState } from 'react'
import { CatmullRomCurve3, Quaternion, Vector3 } from 'three'
import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
import { useSelectedNode } from '~/stores/useDataStore'
import { EARTH_RADIUS } from '~/transformers/earthGraph'
import { Link } from '~/types'

type Props = {
  link: Link
}

const earthPadding = 90

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

    // Create quaternions from the vectors
    const quaternionA = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), start.clone().normalize())
    const quaternionB = new Quaternion().setFromUnitVectors(new Vector3(0, 1, 0), end.clone().normalize())

    // Set up a quaternion-based interpolation
    const quaternion = new Quaternion()
    const divisions = 50 // Number of divisions along the curve

    // Calculate the points along the curved line using slerp
    const curvePoints = []
    for (let i = 0; i <= divisions; i++) {
      const t = i / divisions
      quaternion.slerpQuaternions(quaternionA, quaternionB, t)
      const pointOnCurve = new Vector3(0, 1, 0).applyQuaternion(quaternion).multiplyScalar(EARTH_RADIUS + earthPadding)
      curvePoints.push(pointOnCurve)
    }

    // Create a Three.js curve from the points
    const curve = new CatmullRomCurve3(curvePoints)

    return curve.getPoints(divisions)
  }, [link, selectedNode])

  if (!points.length) {
    return null
  }

  return (
    <Line
      points={points} // Array of points, Array<Vector3 | Vector2 | [number, number, number] | [number, number] | number>
      color={color} // Default
      lineWidth={3} // In pixels (default)
      //   segments // If true, renders a THREE.LineSegments2. Otherwise, renders a THREE.Line2
      dashed={false} // Default
    />
  )
}
