import { Segment as DreiSegment, SegmentObject } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { useEffect, useRef, useState } from 'react'
import { Vector3 } from 'three'
import { SchemaLinkExtended } from '~/components/ModalsContainer/BlueprintModal/types'

type Props = {
  link: SchemaLinkExtended
}

export const Link = ({ link }: Props) => {
  const ref = useRef<SegmentObject | null>(null)

  useFrame(() => {
    if (animated && ref.current) {
      const source = selectionGraphData.nodes.find((f) => f.ref_id === link.sourceRef)
      const target = selectionGraphData.nodes.find((f) => f.ref_id === link.targetRef)

      ref.current.start.set(source?.x || 0, source?.y || 0, source?.z || 0)
      ref.current.end.set(target?.x || 0, target?.y || 0, target?.z || 0)
    }
  })

  return <DreiSegment ref={ref} color={'0xFFFFFF' || color} end={end} start={start} />
}
