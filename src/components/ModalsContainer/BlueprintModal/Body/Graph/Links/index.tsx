/* eslint-disable react/no-array-index-key */
import { Cone, CubicBezierLine, Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Fragment, useMemo, useRef } from 'react'
import { Group, Mesh, ShaderMaterial, Vector3 } from 'three'
import { SchemaLinkExtended } from '../../../types'

type Line = {
  start: Vector3
  end: Vector3
  midA: Vector3
  midB: Vector3
}

type Props = {
  links: SchemaLinkExtended[]
}

export const Lines = ({ links }: Props) => {
  const group = useRef<Group>(null)

  const lines = useMemo<Line[]>(() => {
    const linesArr: Line[] = []

    links.forEach((link, index) => {
      const coefficient = index % 2 === 0 ? 1 : -1

      const { start, end } = link
      const startVector = new Vector3(start.x, start.y + 0.3, start.z)
      const endVector = new Vector3(end.x, end.y - 0.4, end.z)
      const deltaStart = new Vector3(0, coefficient * 0, 0)
      const deltaEnd = new Vector3(0, coefficient * 0, 0)

      const startPosition = startVector.clone().add(deltaStart)
      const endPosition = endVector.clone().add(deltaEnd)

      linesArr.push({
        start: startPosition,
        end: endPosition,
        midA: new Vector3(start.x + Math.sign(start.x) * 0, start.y + 1, start.z),
        midB: new Vector3(end.x + Math.sign(end.x) * 0, end.y - 1, start.z),
      })
    })

    return linesArr
  }, [links])

  useFrame((_, delta: number) => {
    if (group.current) {
      group.current.children.forEach((child) => {
        const mesh = child as Mesh
        const material = mesh.material as ShaderMaterial

        if (material?.uniforms && 'dashOffset' in material.uniforms) {
          material.uniforms.dashOffset.value -= delta * 10
        }
      })
    }
  })

  return (
    <group ref={group}>
      {lines.map((line, index) => (
        <Fragment key={index}>
          <CubicBezierLine
            userData={{ ind: index }}
            {...line}
            color="white"
            dashed
            dashScale={50}
            gapSize={20}
            lineWidth={2}
            opacity={0.8}
          />
          <CubicBezierLine {...line} color="white" lineWidth={2} opacity={0.2} transparent userData={{ ind: index }} />
          <Cone args={[0.08, 0.1, 32]} position={[line.end.x, line.end.y + 0.1, line.end.z]} rotation={[0, 0, 0]} />
        </Fragment>
      ))}
    </group>
  )
}

Lines.displayName = 'Lines'
