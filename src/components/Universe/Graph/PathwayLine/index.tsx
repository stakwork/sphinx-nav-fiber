import { Line } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useRef } from 'react'
import { Line2 } from 'three/examples/jsm/lines/Line2'
import { usePathway } from '~/components/DataRetriever'

export const PathwayLine = () => {
  const { pathway } = usePathway()
  const ref = useRef<Line2>(null)

  useFrame(() => {
    if (!ref.current) {
      return
    }

    const points = pathway.map((node) => [node.x || 0, node.y || 0, node.z || 0] as const)

    if (points.length) {
      ref.current.geometry.setPositions(points.flat())
    }
  })

  return (
    <>
      <Line
        ref={ref}
        color="green"
        dashed={false}
        forceSinglePass={false}
        lineWidth={1}
        matrixWorldAutoUpdate={false}
        points={[[0, 0, 0]]}
      />
    </>
  )
}
