import { useFrame, useThree } from '@react-three/fiber'
import { useRef } from 'react'
import * as THREE from 'three'

type Props = {
  children: React.ReactNode
  margin?: number // e.g. 0.1 = 10% screen margin
  minScale?: number // optional min scale clamp
}

export const AutoFitHUD = ({ children, margin = 0.1, minScale = 0.2 }: Props) => {
  const wrapperRef = useRef<THREE.Group>(null!)
  const contentRef = useRef<THREE.Group>(null!)

  const { viewport } = useThree()

  useFrame(() => {
    if (!contentRef.current || !wrapperRef.current) {
      return
    }

    const box = new THREE.Box3().setFromObject(contentRef.current)
    const size = new THREE.Vector3()
    const center = new THREE.Vector3()

    box.getSize(size)
    box.getCenter(center)

    const maxDim = Math.max(size.x, size.y)

    if (maxDim === 0) {
      return
    } // avoid divide by zero

    const scale = Math.max((viewport.width * (1 - margin)) / maxDim, minScale)

    wrapperRef.current.position.set(-center.x, -center.y, 0)
    wrapperRef.current.scale.setScalar(scale)
  })

  return (
    <group ref={wrapperRef}>
      <group ref={contentRef}>{children}</group>
    </group>
  )
}
