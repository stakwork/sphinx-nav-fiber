import { Line } from '@react-three/drei'
import gsap from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { useDataStore } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { Link } from '~/types'
import { LinkPosition } from '..'

type Props = {
  linksPositions: LinkPosition[]
}

export const Connections = memo(({ linksPositions }: Props) => {
  const data = useDataStore((s) => s.dataInitial)
  const selectedNode = useSelectedNode()

  const lineRefs = useRef<Line2[]>([])

  useEffect(() => {
    lineRefs.current.forEach((line, index) => {
      if (line) {
        console.log(
          selectedNode?.ref_id === data?.links[index].source || selectedNode?.ref_id === data?.links[index].target,
        )

        gsap.fromTo(
          line.material,
          { linewidth: 5 },
          {
            linewidth: false ? 2 : 1,
            duration: 3,
          },
        )
      }
    })
  }, [data, selectedNode])

  return (
    <group name="simulation-3d-group__connections">
      {data?.links.map((l: Link, index) => {
        const source = new Vector3(
          linksPositions[index]?.sx || 0,
          linksPositions[index]?.sy || 0,
          linksPositions[index]?.sz || 0,
        )

        const target = new Vector3(
          linksPositions[index]?.tx || 0,
          linksPositions[index]?.ty || 0,
          linksPositions[index]?.tz || 0,
        )

        return (
          <Line
            key={l.ref_id}
            ref={(el) => {
              lineRefs.current[index] = el as Line2
            }}
            color="rgba(136, 136, 136, 1)"
            isLine2
            lineWidth={1}
            opacity={1}
            points={[source, target]}
            transparent
          />
        )
      })}
    </group>
  )
})

Connections.displayName = 'Connections'
