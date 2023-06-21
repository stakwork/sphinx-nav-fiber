import { forceCollide } from 'd3-force-3d'
import { Vector3 } from 'three'
import { generateLinksFromNodeData } from '~/network/fetchGraphData'
import { NodeExtended } from '~/types'
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

export const generateForceGraphPositions = (nodes: NodeExtended[]) => {
  const updatedNodes = nodes.map((node: NodeExtended) => ({ ...node, x: 0, y: 0, z: 0 }))

  const links = generateLinksFromNodeData(updatedNodes, false, false)

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

  // update link positions
  const updatedLinks = links.map((link) => {
    const sourceNode = updatedNodes.find((f) => f.ref_id === link.sourceRef)
    const targetNode = updatedNodes.find((f) => f.ref_id === link.targetRef)

    const onlyVisibleOnSelect = ['guest', 'topic'].some(
      (i) => i === sourceNode?.node_type || i === targetNode?.node_type,
    )

    const sourcePosition = new Vector3(sourceNode?.x || 0, sourceNode?.y || 0, sourceNode?.z || 0)
    const targetPosition = new Vector3(targetNode?.x || 0, targetNode?.y || 0, targetNode?.z || 0)

    return {
      ...link,
      onlyVisibleOnSelect,
      sourcePosition,
      targetPosition,
    }
  })

  return { nodes: updatedNodes, links: updatedLinks }
}
