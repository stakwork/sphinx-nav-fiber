import { forceCollide } from 'd3-force-3d'
import { Link, NodeExtended } from '~/types'
import { ForceSimulation, runForceSimulation } from './forceSimulation'

const simulationTicks = 60
const collisionTicks = 20

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

export const generateForceGraphPositions = (nodes: NodeExtended[], links: Link[]) => {
  const updatedNodes = nodes.map((node: NodeExtended) => ({ ...node, x: 0, y: 0, z: 0 }))

  const forceSimulation = runForceSimulation(updatedNodes, links, {
    numDimensions: 3,
    forceLinkStrength: 0.5,
    forceChargeStrength: -40,
    forceCenterStrength: 0.3,
    velocityDecay: 0.5,
  })

  runSimulationPhase(forceSimulation)

  runCollisionPhase(forceSimulation)

  forceSimulation.stop()

  return { nodes: updatedNodes, links }
}
