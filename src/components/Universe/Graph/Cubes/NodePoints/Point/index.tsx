import { Billboard, Instance } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { memo, useRef } from 'react'
import { Group } from 'three'
import { useGraphStore } from '~/stores/useGraphStore'

type Props = {
  color: string
  scale: number
  name: string
}

export const Point = memo(({ color, scale, name }: Props) => {
  const nodeRef = useRef<Group | null>(null)

  useFrame(() => {
    const { searchQuery } = useGraphStore.getState()

    if (!nodeRef.current) {
      return
    }

    if (searchQuery) {
      const dynamicScale = name.toLowerCase().includes(searchQuery.toLowerCase()) ? 1 : 0.1

      nodeRef.current.scale.set(dynamicScale, dynamicScale, dynamicScale)
    } else {
      nodeRef.current.scale.set(1, 1, 1)
    }
  })

  return (
    <Billboard ref={nodeRef} follow lockX={false} lockY={false} lockZ={false}>
      <Instance color={color} scale={scale} />
    </Billboard>
  )
})

Point.displayName = 'Point'
