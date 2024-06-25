import { Line } from '@react-three/drei'
import gsap from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Vector3 } from 'three'
import { Line2 } from 'three-stdlib'
import { useDataStore } from '~/stores/useDataStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { Link } from '~/types'

export const Connections = memo(() => {
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
      {data?.links.map((l: Link, index) => (
        <Line
          key={l.ref_id}
          ref={(el) => {
            lineRefs.current[index] = el as Line2
          }}
          color="rgba(136, 136, 136, 1)"
          isLine2
          lineWidth={1}
          opacity={1}
          points={[new Vector3(0, 0, 0), new Vector3(100, 100, 100)]}
          transparent
        />
      ))}
    </group>
  )
})

Connections.displayName = 'Connections'
