/* eslint-disable react/no-array-index-key */
import { QuadraticBezierLine, Text } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import { Group, Vector3 } from 'three'
import { getLoopControlPoints, truncateText } from '~/components/ModalsContainer/BlueprintModal/Body/Editor/utils'
import { fontProps } from '~/components/Universe/Graph/Cubes/Text/constants'
import { SchemaLink } from '~/network/fetchSourcesData'
import { SchemaExtended } from '../../../types'
import { NODE_RADIUS } from '../constants'

type Props = {
  links: SchemaLink[]
  nodes?: SchemaExtended[]
  onEdgeClick: (refId: string, edgeType: string, source: string, target: string) => void
}

const CONE_RADIUS = 2
const CONE_HEIGHT = 2
const MAX_TEXT_LENGTH = 10
const OFFSET_DISTANCE = 10

const getPointOnLineAtDistance = (start: Vector3, end: Vector3, r: number): Vector3 => {
  const direction = new Vector3().subVectors(end, start)
  const unitDirection = direction.normalize()
  const displacement = unitDirection.multiplyScalar(r)

  return new Vector3().addVectors(start, displacement)
}

const getCurvedControlPoint = (start: Vector3, end: Vector3, offsetIndex: number, totalLinks: number): Vector3 => {
  const middle = new Vector3().lerpVectors(start, end, 0.5)
  const direction = new Vector3().subVectors(end, start).normalize()
  const perpendicular = new Vector3(-direction.y, direction.x, direction.z).normalize()
  const offset = (offsetIndex - totalLinks / 2) * OFFSET_DISTANCE

  return new Vector3().addVectors(middle, perpendicular.multiplyScalar(offset))
}

export const Lines = ({ links, nodes, onEdgeClick }: Props) => {
  const group = useRef<Group>(null)
  const { camera } = useThree()

  const startVector = new Vector3()
  const endVector = new Vector3()
  const middlePoint = new Vector3()
  const textOffset = new Vector3()
  const firstLineEnd = new Vector3()
  const secondLineStart = new Vector3()
  const endPosition = new Vector3()
  const startPosition = new Vector3()

  useFrame(() => {
    if (group.current && nodes) {
      group.current.children.forEach((child, index) => {
        const link = links[index]

        if (!link) {
          return
        }

        const nodeEnd = nodes.find((i) => i.ref_id === link.source)
        const nodeStart = nodes.find((i) => i.ref_id === link.target)

        startVector.set(nodeStart?.x || 0, nodeStart?.y || 0, nodeStart?.z || 0)
        endVector.set(nodeEnd?.x || 0, nodeEnd?.y || 0, nodeEnd?.z || 0)

        const lineStart = child.children[0] as {
          setPoints?: (start: Vector3, end: Vector3, middlePoint: Vector3) => void
        }

        const lineEnd = child.children[1] as {
          setPoints?: (start: Vector3, end: Vector3, middlePoint: Vector3) => void
        }

        const arrow = child.children[2]
        // eslint-disable-next-line  @typescript-eslint/no-explicit-any
        const text = child.children[3] as any

        const totalLinksBetweenNodes = links.filter(
          (l) =>
            (l.source === link.source && l.target === link.target) ||
            (l.source === link.target && l.target === link.source),
        ).length

        const offsetIndex = links.filter(
          (l, i) =>
            i < index &&
            ((l.source === link.source && l.target === link.target) ||
              (l.source === link.target && l.target === link.source)),
        ).length

        if (nodeStart?.ref_id === nodeEnd?.ref_id) {
          const [controlPoint1, endPoint, controlPoint2] = getLoopControlPoints(startVector)

          lineStart.setPoints?.(startVector, controlPoint2, controlPoint1)
          lineEnd.setPoints?.(controlPoint2, endVector, controlPoint1)

          arrow.position.set(controlPoint2.x, controlPoint2.y, endPoint.z)
          arrow.lookAt(controlPoint1)
          arrow.rotateX(-Math.PI / 2)

          text.position.set(controlPoint2.x, controlPoint2.y, endPoint.z)
          text.lookAt(camera.position)
        } else {
          startPosition.copy(getPointOnLineAtDistance(startVector, endVector, NODE_RADIUS))
          endPosition.copy(getPointOnLineAtDistance(endVector, startVector, NODE_RADIUS + 0.5))
          middlePoint.lerpVectors(startPosition, endPosition, 0.5)

          if (totalLinksBetweenNodes > 1) {
            middlePoint.copy(getCurvedControlPoint(startPosition, endPosition, offsetIndex, totalLinksBetweenNodes))
          } else {
            middlePoint.lerpVectors(startPosition, endPosition, 0.5)
          }

          // line.setPoints?.(startPosition, endPosition, totalLinksBetweenNodes > 1 ? middlePoint : undefined)

          const textWidth = 30

          textOffset
            .subVectors(endPosition, startPosition)
            .normalize()
            .multiplyScalar(textWidth / 2)

          firstLineEnd.subVectors(middlePoint, textOffset)
          secondLineStart.addVectors(middlePoint, textOffset)

          const midpointStart = new Vector3().addVectors(startPosition, firstLineEnd).multiplyScalar(0.5)
          const midpointEnd = new Vector3().addVectors(secondLineStart, endPosition).multiplyScalar(0.5)

          lineStart.setPoints?.(startPosition, firstLineEnd, midpointStart)
          lineEnd.setPoints?.(secondLineStart, endPosition, midpointEnd)

          arrow.position.set(endPosition.x, endPosition.y, endPosition.z)
          arrow.lookAt(startPosition)
          arrow.rotateX(-Math.PI / 2)

          text.position.set(middlePoint.x, middlePoint.y, middlePoint.z)
          text.lookAt(camera.position)

          let angle = Math.atan2(endPosition.y - startPosition.y, endPosition.x - startPosition.x)

          if (angle > Math.PI / 2 || angle < -Math.PI / 2) {
            angle += Math.PI
          }

          text.rotation.set(0, 0, angle)

          const distance = startPosition.distanceTo(endPosition)
          const fontSize = distance < textWidth ? 2 : 4

          if (distance < textWidth) {
            text.text = truncateText(link.edge_type, MAX_TEXT_LENGTH)
          } else {
            text.text = link.edge_type
          }

          text.fontSize = fontSize
        }
      })
    }
  })

  const handleEdgeClick = (edgeType: string, source: string, target: string, refId: string) => {
    if (edgeType === 'CHILD_OF' || source === 'string' || target === 'string') {
      return
    }

    const sourceNode = nodes?.find((node) => node.ref_id === source)
    const targetNode = nodes?.find((node) => node.ref_id === target)

    const sourceName = sourceNode?.type || ''
    const targetName = targetNode?.type || ''

    onEdgeClick(refId, edgeType, sourceName, targetName)
  }

  return (
    <group ref={group}>
      {links.map((link) => (
        <group key={link.ref_id}>
          <QuadraticBezierLine color="white" end={[0, 0, 0]} lineWidth={1} start={[0, 0, 0]} />
          <QuadraticBezierLine color="white" end={[0, 0, 0]} lineWidth={1} start={[0, 0, 0]} />
          <mesh position={new Vector3(0, 0, 0)}>
            <coneGeometry args={[CONE_RADIUS, CONE_HEIGHT, 32]} />
            <meshBasicMaterial color="white" />
          </mesh>
          <Text
            anchorX="center"
            anchorY="middle"
            color="white"
            {...fontProps}
            lineHeight={1}
            maxWidth={20}
            onClick={() => handleEdgeClick(link.edge_type, link.source, link.target, link.ref_id)}
            rotation={[0, 0, 0]}
            textAlign="center"
          >
            {truncateText(link.edge_type, MAX_TEXT_LENGTH)}
          </Text>
        </group>
      ))}
    </group>
  )
}

Lines.displayName = 'Lines'
