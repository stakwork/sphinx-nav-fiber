/* eslint-disable react/no-array-index-key */
import { Line, QuadraticBezierLine } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { Group, Vector3 } from 'three'
import { SchemaLink } from '~/network/fetchSourcesData'
import { SchemaExtended } from '../../../types'

type Line = {
  start: Vector3
  end: Vector3
  midA?: Vector3
  midB?: Vector3
}

type Props = {
  links: SchemaLink[]
  nodes?: SchemaExtended[]
}

export const Lines = ({ links, nodes }: Props) => {
  const group = useRef<Group>(null)

  const lines = useMemo<Line[]>(() => {
    const linesArr: Line[] = []

    links.forEach((link, index) => {
      const coefficient = index % 2 === 0 ? 1 : -1

      if (!nodes) {
        return
      }

      const nodeStart = nodes.find((i) => i.ref_id === link.source)
      const nodeEnd = nodes.find((i) => i.ref_id === link.target)

      const startVector = new Vector3(nodeStart?.x || 0, nodeStart?.y || 0 + 0.3, nodeStart?.z || 0)
      const endVector = new Vector3(nodeEnd?.x || 0, nodeEnd?.y || 0 - 0.4, nodeEnd?.z || 0)
      const deltaStart = new Vector3(0, coefficient * 0, 0)
      const deltaEnd = new Vector3(0, coefficient * 0, 0)

      const startPosition = startVector.clone().add(deltaStart)
      const endPosition = endVector.clone().add(deltaEnd)

      linesArr.push({
        start: startPosition,
        end: endPosition,
      })
    })

    return linesArr
  }, [links, nodes])

  useFrame(() => {
    if (group.current && nodes) {
      group.current.children.forEach((child, index) => {
        const link = links[index]

        if (!link) {
          return
        }

        const nodeStart = nodes.find((i) => i.ref_id === link.source)
        const nodeEnd = nodes.find((i) => i.ref_id === link.target)

        const startVector = new Vector3(nodeStart?.x || 0, (nodeStart?.y || 0) + 0.3, nodeStart?.z || 0)
        const endVector = new Vector3(nodeEnd?.x || 0, (nodeEnd?.y || 0) - 0.4, nodeEnd?.z || 0)

        const startPosition = startVector.clone()
        const endPosition = endVector.clone()
        const middlePoint = new Vector3().lerpVectors(startPosition, endPosition, 0.5)

        const line = child.children[0] as { setPoints?: (start: Vector3, middlePoint: Vector3, end: Vector3) => void }
        const arrow = child.children[1]

        // Set line points
        line.setPoints?.(startPosition, middlePoint, endPosition)

        // Set arrow position
        arrow.position.set(endPosition.x, endPosition.y, endPosition.z)

        // Make the arrow point towards the start position
        arrow.lookAt(startPosition)
        arrow.rotateX(Math.PI / 2)
      })
    }
  })

  return (
    <group ref={group}>
      {lines.map((line, index) => (
        <group key={index}>
          <QuadraticBezierLine userData={{ ind: index }} {...line} color="white" lineWidth={2} />
          <mesh position={new Vector3(0, 0, 0)}>
            <coneGeometry args={[18, 18, 32]} />
            <meshBasicMaterial color="red" />
          </mesh>
        </group>
      ))}
    </group>
  )
}

Lines.displayName = 'Lines'
