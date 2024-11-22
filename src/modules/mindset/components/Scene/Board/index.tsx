import { useThree } from '@react-three/fiber'
import { useMemo } from 'react'
import { edges, maxTimestamp, minTimestamp, nodes, normalizeTimestamp } from '~/modules/mindset/data'
import { Node } from './Node'
import { RoundedRectangle } from './RoundedRectangle'

type Props = {
  w: number
  gap: number
}

export const Board = ({ w = 16, gap = 6 }: Props) => {
  const { width } = useThree((state) => state.viewport)
  const xW = w + gap

  console.log(width, xW)

  const rangeMin = 0
  const rangeMax = 50

  const positions = useMemo(
    () =>
      edges
        .filter((edge) => edge?.properties?.mentionedStart && edge?.properties?.mentionedEnd)
        .map((edge) => {
          const st: number = (edge?.properties?.mentionedStart || 0) as number
          const ed: number = (edge?.properties?.mentionedEnd || 0) as number

          return {
            source: edge.source,
            target: edge.target,
            xStart: normalizeTimestamp(st, minTimestamp, maxTimestamp, rangeMin, rangeMax),
            xEnd: normalizeTimestamp(ed, minTimestamp, maxTimestamp, rangeMin, rangeMax),
          }
        }),
    [rangeMin, rangeMax],
  )

  return (
    true && (
      <>
        {nodes.map((node, i) => {
          const hasTimeStamp = positions.some((p) => p.source === nodes[i].ref_id)

          const position = hasTimeStamp ? positions.find((p) => p.source === nodes[i].ref_id)?.xStart || 0 : i * 35

          const y = hasTimeStamp ? 0 : 15

          return (
            <Node
              key={node.ref_id}
              height={10}
              name={node.name}
              onButtonClick={console.log}
              position={[position, y, 0]}
              type={node.node_type}
              url="logo.png"
              width={w}
            />
          )
        })}
        <mesh>
          <RoundedRectangle color="red" height={1} radius={0} width={1} />
        </mesh>
      </>
    )
  )
}
