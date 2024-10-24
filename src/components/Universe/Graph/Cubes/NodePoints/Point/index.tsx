import { Instance } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import { throttle } from 'lodash'
import { useRef } from 'react'
import { Mesh, MeshStandardMaterial, Vector3 } from 'three'

type Props = {
  color: string
}

export const Point = ({ color }: Props) => {
  const ref = useRef<MeshStandardMaterial | null>(null)
  const instanceRef = useRef<Mesh | null>(null)

  useFrame(({ camera }) => {
    if (!instanceRef.current || !ref.current) {
      return
    }

    const checkDistance = throttle(() => {
      const nodePosition = new Vector3().setFromMatrixPosition(instanceRef.current!.matrixWorld)
      const distance = nodePosition.distanceTo(camera.position)
      const isLess = distance < 2500

      if (ref.current) {
        ref.current.visible = !isLess
      }

      // Set visibility based on distance
    }, 1500) // Throttle checks to run only every 500ms

    checkDistance()
  })

  return (
    <>
      <meshStandardMaterial ref={ref} />
      <Instance ref={instanceRef} color={color} position={[1, 2, 3]} rotation={[Math.PI / 3, 0, 0]} scale={20} />
    </>
  )
}
