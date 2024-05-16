/* eslint-disable react/no-array-index-key */
import { Line, QuadraticBezierLine } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Fragment, useMemo, useRef } from 'react'
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

        const nodeStart = nodes.find((i) => i.ref_id === link.source)
        const nodeEnd = nodes.find((i) => i.ref_id === link.target)

        const startVector = new Vector3(nodeStart?.x || 0, nodeStart?.y || 0 + 0.3, nodeStart?.z || 0)
        const endVector = new Vector3(nodeEnd?.x || 0, nodeEnd?.y || 0 - 0.4, nodeEnd?.z || 0)
        // const startVector = new Vector3(start.x, start.y + 0.3, start.z)
        // const endVector = new Vector3(end.x, end.y - 0.4, end.z)
        const deltaStart = new Vector3(0, 0 * 0, -1)
        const deltaEnd = new Vector3(0, 0 * 0, -1)

        const startPosition = startVector.clone().add(deltaStart)
        const endPosition = endVector.clone().add(deltaEnd)

        const line = child as { setPoints?: (start: Vector3, end: Vector3) => void }

        if (line.setPoints) {
          line.setPoints(startPosition, endPosition)
        }
      })
    }
  })

  return (
    <group ref={group}>
      {lines.map((line, index) => (
        <Fragment key={index}>
          <QuadraticBezierLine userData={{ ind: index }} {...line} color="white" lineWidth={2} />
        </Fragment>
      ))}
    </group>
  )
}

Lines.displayName = 'Lines'
