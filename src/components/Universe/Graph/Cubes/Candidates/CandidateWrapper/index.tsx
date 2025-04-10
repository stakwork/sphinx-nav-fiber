import { gsap } from 'gsap'
import { memo, useEffect, useRef } from 'react'
import { Mesh } from 'three'
import { NodeExtended } from '~/types'
import { NodeSprite } from './NodeSprite'

type Props = {
  node: NodeExtended
  x: number
  y: number
  z: number
  iX: number
  iY: number
  iZ: number
  isFixed: boolean
  isLast: boolean
  onRemove?: (ref_id: string) => void
}

export const CandidateWrapper = memo((props: Props) => {
  const { node, x, y, z, iX, iY, iZ, onRemove, isFixed, isLast } = props
  const meshRef = useRef<Mesh | null>(null)

  useEffect(() => {
    if (meshRef.current && !isFixed) {
      // Move from center to initial position
      gsap.fromTo(meshRef.current.position, { x: iX, y: iY, z: iZ }, { x, y, z, duration: 1, ease: 'power3.out' })
    }
  }, [x, y, z, iX, iY, iZ, isFixed])

  useEffect(() => {
    if (meshRef.current && isFixed) {
      // Move to fixed position and remove
      gsap.to(meshRef.current.position, {
        x,
        y,
        z,
        duration: 2,
        ease: 'power3.out',
        onComplete: () => {
          if (onRemove) {
            onRemove(node.ref_id)
          } // Notify parent to remove the node
        },
      })
    }
  }, [node.fx, node.fy, node.fz, node.ref_id, onRemove, isFixed, x, y, z])

  return (
    <mesh ref={meshRef} position={[iX, iY, iZ]} scale={node.scale || 1} userData={node}>
      <NodeSprite isFixed={isFixed} isLast={isLast} node={node} />
    </mesh>
  )
})

CandidateWrapper.displayName = 'CandidateWrapper'
