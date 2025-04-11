import { Billboard, Edges, Html } from '@react-three/drei'
import { useMemo, useState } from 'react'
import * as THREE from 'three'
import { useControlStore } from '~/stores/useControlStore'
import { useGraphStore } from '~/stores/useGraphStore'
import { useSimulationStore } from '~/stores/useSimulationStore'
import { distributeNodesOnSphere } from '~/stores/useSimulationStore/utils/distributeNodesOnSphere'
import { NodeExtended } from '~/types'
import { nodeSize } from '../Cubes/constants'

export const Neighbourhoods = () => {
  const [selectedNeighbourhoodId, setSelectedNeighbourhoodId] = useState<string | null>(null)

  console.log(selectedNeighbourhoodId)

  const neighbourhoods = useGraphStore((s) => s.neighbourhoods)

  const neighbourhoodsWithPosition = useMemo(() => distributeNodesOnSphere(neighbourhoods, 3000), [neighbourhoods])
  const simulation = useSimulationStore((s) => s.simulation)
  const simulationInProgress = useSimulationStore((s) => s.simulationInProgress)
  const cameraControlsRef = useControlStore((s) => s.cameraControlsRef)

  const neigboorHoodsBoundingBox: Record<string, { x: number; y: number; z: number }[]> = useMemo(
    () =>
      simulationInProgress
        ? {}
        : simulation
            ?.nodes()
            .reduce((acc: Record<string, { x: number; y: number; z: number }[]>, node: NodeExtended) => {
              if (node.neighbourHood) {
                acc[node.neighbourHood] = [...(acc[node.neighbourHood] || []), { x: node.x, y: node.y, z: node.z }]
              }

              return acc
            }, {}) || {},
    [simulation, simulationInProgress],
  )

  const handleClick = (neighbourhoodId: string, center: THREE.Vector3, size: THREE.Vector3) => {
    const distance = size.length() * 1.5
    const direction = new THREE.Vector3(1, 1, 1).normalize()
    const cameraPosition = new THREE.Vector3().copy(center).addScaledVector(direction, distance)

    cameraControlsRef?.setLookAt(
      cameraPosition.x,
      cameraPosition.y,
      cameraPosition.z,
      center.x,
      center.y,
      center.z,
      true,
    )

    setSelectedNeighbourhoodId(neighbourhoodId)
  }

  return (
    <group>
      {Object.entries(neigboorHoodsBoundingBox).map(([neighbourhoodId, positions]) => {
        const labelCenter = neighbourhoodsWithPosition[neighbourhoodId]

        const name = neighbourhoods.find((n) => n.ref_id === neighbourhoodId)?.name || neighbourhoodId

        if (!labelCenter || positions.length === 0) {
          return null
        }

        const points = positions.map((p) => new THREE.Vector3(p.x, p.y, p.z))
        const box = new THREE.Box3().setFromPoints(points)

        const size = new THREE.Vector3()
        const geometricCenter = new THREE.Vector3()

        box.getSize(size)
        box.getCenter(geometricCenter)

        const width = size.x + nodeSize
        const height = size.y + nodeSize
        const depth = size.z + nodeSize

        return (
          <Billboard key={neighbourhoodId} position={geometricCenter.toArray()}>
            <mesh>
              <boxGeometry args={[width, height, depth]} />
              <meshBasicMaterial color="orange" opacity={0.1} transparent />
              <Edges color="#8c6a97" />
              <Html center>
                <div
                  onClick={() => handleClick(neighbourhoodId, geometricCenter, size)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      handleClick(neighbourhoodId, geometricCenter, size)
                    }
                  }}
                  role="button"
                  style={{
                    color: 'white',
                    background: 'rgba(0, 0, 0, 0.7)',
                    borderRadius: '6px',
                    boxShadow: '0 0 8px rgba(0,0,0,0.5)',
                    fontWeight: '600',
                    fontSize: '10px',
                    border: '1px solid white',
                    width: '100px',
                    wordBreak: 'break-word',
                    padding: '5px',
                    textAlign: 'center',
                    cursor: 'pointer',
                  }}
                  tabIndex={0}
                >
                  {name}
                </div>
              </Html>
            </mesh>
          </Billboard>
        )
      })}
    </group>
  )
}
