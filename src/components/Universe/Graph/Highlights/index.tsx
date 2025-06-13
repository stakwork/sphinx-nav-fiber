import { Billboard, Edges, Html, Line } from '@react-three/drei'
import { useCallback, useMemo, useState } from 'react'
import * as THREE from 'three'
import { useControlStore } from '~/stores/useControlStore'
import { useMindsetStore } from '~/stores/useMindsetStore'
import { usePlayerStore } from '~/stores/usePlayerStore'

export const Highlights = () => {
  const [selectedId, setSelectedId] = useState<string | null>(null)
  const cameraControlsRef = useControlStore((s) => s.cameraControlsRef)
  const { playerRef } = usePlayerStore((s) => s)
  const highlights = useMindsetStore((s) => s.highlights)

  const positions = useMemo(
    () =>
      highlights.map((_, i) => {
        const angle = (i / highlights.length) * Math.PI * 2
        const radius = 1000

        return [Math.cos(angle) * radius, (i % 2 === 0 ? 1 : -1) * 150, Math.sin(angle) * radius] as [
          number,
          number,
          number,
        ]
      }),
    [highlights],
  )

  const handleProgressChange = useCallback(
    (value: number | number[]) => {
      const newValue = Array.isArray(value) ? value[0] : value

      if (playerRef) {
        playerRef.seekTo(newValue, 'seconds')
      }
    },
    [playerRef],
  )

  const handleClick = (index: number) => {
    const position = new THREE.Vector3(...positions[index])
    const cameraOffset = new THREE.Vector3(1, 1, 1).normalize().multiplyScalar(300)

    cameraControlsRef?.setLookAt(
      position.x + cameraOffset.x,
      position.y + cameraOffset.y,
      position.z + cameraOffset.z,
      position.x,
      position.y,
      position.z,
      true,
    )

    setSelectedId(highlights[index].title)
    handleProgressChange(highlights[index].startTime)
  }

  return (
    <group>
      {/* Curved lines between sequential nodes */}
      {positions.map((pos, i) => {
        if (i === 0) {
          return null
        }

        const start = new THREE.Vector3(...positions[i - 1])
        const end = new THREE.Vector3(...positions[i])
        const mid = start.clone().lerp(end, 0.5).add(new THREE.Vector3(0, 200, 0)) // raise the curve
        const curve = new THREE.QuadraticBezierCurve3(start, mid, end)
        const points = curve.getPoints(20)

        // eslint-disable-next-line react/no-array-index-key
        return <Line key={`curve-${i}`} color="#00bfff" dashed={false} lineWidth={1.5} points={points} />
      })}

      {/* Segment nodes */}
      {highlights.map((highlight, i) => (
        <Billboard key={highlight.title} position={positions[i]}>
          <mesh>
            <circleGeometry args={[50, 64, 64]} />
            <meshBasicMaterial color={selectedId === highlight.title ? '#2e93b3' : '#8c6a97'} transparent />
            <Edges color="#ffffff" />
            <Html center>
              <button
                onClick={() => handleClick(i)}
                onPointerDown={(e) => e.stopPropagation()}
                onPointerOut={(e) => e.stopPropagation()}
                onPointerOver={(e) => e.stopPropagation()}
                onPointerUp={(e) => e.stopPropagation()}
                style={{
                  cursor: 'pointer',
                  background: 'rgba(0, 0, 0, 0.8)',
                  borderRadius: '50%',
                  padding: '6px',
                  width: '150px',
                  height: '150px',
                  color: 'white',
                  border: selectedId === highlight.title ? '2px solid #ffd700' : '1px solid #2e93b3',
                  textAlign: 'center',
                  fontWeight: 'bold',
                  fontSize: '12px',
                }}
                type="button"
              >
                {highlight.title}
              </button>
            </Html>
          </mesh>
        </Billboard>
      ))}
    </group>
  )
}
