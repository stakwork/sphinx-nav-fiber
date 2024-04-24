/* eslint-disable react/no-array-index-key */
import { QuadraticBezierLine, Segments } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { Fragment, useMemo, useRef } from 'react'
import { Group, Mesh, ShaderMaterial, Vector3 } from 'three'
import { SchemaLink } from '~/network/fetchSourcesData'
import { NodesLink } from './NodesLink'

type SchemaLinkExtended = SchemaLink & {
  start: { x: number; y: number; z: number }
  end: { x: number; y: number; z: number }
}

type Line = {
  start: Vector3
  end: Vector3
}

type Props = {
  links: SchemaLinkExtended[]
}

export const Links = ({ links }: Props) => (
  <Segments>
    {links.map((link: SchemaLinkExtended) => (
      <NodesLink key={link.ref_id} end={link.end} start={link.start} />
    ))}
  </Segments>
)

export const Lines = ({ links }: Props) => {
  const group = useRef<Group>(null)

  const lines = useMemo<Line[]>(() => {
    const linesArr: Line[] = []

    links.forEach((link, index) => {
      const coefficient = index % 2 === 0 ? 1 : -1

      const { start, end } = link
      const startVector = new Vector3(start.x, start.y, start.z)
      const endVector = new Vector3(end.x, end.y, end.z)
      const deltaStart = new Vector3(0, coefficient * 0.25, 0)
      const deltaEnd = new Vector3(0, coefficient * 0.25, 0)

      const startPosition = startVector.clone().add(deltaStart)
      const endPosition = endVector.clone().add(deltaEnd)

      linesArr.push({
        start: startPosition,
        end: endPosition,
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
          <QuadraticBezierLine {...line} color="white" dashed dashScale={50} gapSize={20} />
          <QuadraticBezierLine {...line} color="white" lineWidth={0.5} opacity={0.1} transparent />
        </Fragment>
      ))}
    </group>
  )
}

Lines.displayName = 'Lines'
