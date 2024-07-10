import { forceCollide } from 'd3-force-3d'
import { Vector3 } from 'three'
import { NodeExtended } from '~/types'
import { ForceSimulation, runForceSimulation } from './forceSimulation'
import { getMyParents } from './helpers'

const simulationTicks = 60
const collisionTicks = 20

const universeScale = 5000

const universeCube = {
  scale: universeScale / 2,
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
}

function generateNodePosition(node: NodeExtended, mappedNodes: NodeExtended[]) {
  const { scale, position } = universeCube

  const center = {
    x: position.x + Math.random() * scale - scale * 0.5,
    y: position.y + Math.random() * scale - scale * 0.5,
    z: position.z + Math.random() * scale - scale * 0.5,
  }

  // do i have parents?
  const parents = getMyParents(node, mappedNodes)

  const relativePosition: Vector3 | null = parents?.length
    ? new Vector3(parents[0].x, parents[0].y, parents[0].z)
    : null

  if (relativePosition) {
    center.x = relativePosition.x
    center.y = relativePosition.y
    center.z = relativePosition.z
  }

  return new Vector3(center.x, center.y, center.z)
}

const runSimulationPhase = (simulation: ForceSimulation) => {
  for (let i = 0; i < simulationTicks; i += 1) {
    simulation.tick()
  }
}

const runCollisionPhase = (simulation: ForceSimulation) => {
  simulation.force(
    'collide',
    forceCollide()
      .radius((n: NodeExtended) => (n.scale || 1) * 20)
      .iterations(1),
  )

  for (let i = 0; i < collisionTicks; i += 1) {
    simulation.tick()
  }
}

export const generateSphereGraphPositions = (nodes: NodeExtended[]) => {
  const mappedNodes: NodeExtended[] = []

  const updatedNodes = nodes.map((node: NodeExtended) => {
    const position = generateNodePosition(node, mappedNodes)

    const updatedNode = { ...node, ...position }

    mappedNodes.push(updatedNode)

    return updatedNode
  })

  const forceSimulation = runForceSimulation(updatedNodes, [], {
    numDimensions: 3,
    forceLinkStrength: 0.01,
    forceChargeStrength: -80,
    velocityDecay: 0.5,
    disableCenter: true,
    disableCharge: true,
  })

  runSimulationPhase(forceSimulation)

  runCollisionPhase(forceSimulation)

  forceSimulation.stop()

  return { nodes: updatedNodes, links: [] }
}
