// LineInstance.tsx
import { Segment as DreiSegment, SegmentObject } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import { Vector3 } from 'three'

type LineComponentProps = {
  sourceX: number
  sourceY: number
  sourceZ: number
  targetX: number
  targetY: number
  targetZ: number
  color: string
}

const vec = new Vector3(0, 0, 0)

export const LineInstance = memo((props: LineComponentProps) => {
  const { sourceX, sourceY, sourceZ, targetX, targetY, targetZ, color } = props

  const ref = useRef<SegmentObject | null>(null)

  useFrame(() => {
    if (ref.current) {
      ref.current.start.set(sourceX || 0, sourceY || 0, sourceZ || 0)
      ref.current.end.set(targetX, targetY, targetZ)
    }
  })

  return (
    <>
      <DreiSegment ref={ref} color={color} end={vec} start={vec} />
    </>
  )
})

LineInstance.displayName = 'LineInstance'
