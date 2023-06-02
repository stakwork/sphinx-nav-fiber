import { forceCollide } from 'd3-force-3d'
import { Vector3 } from 'three'
import { generateLinksFromNodeData } from '~/network/fetchGraphData'
import { NodeExtended } from '~/types'
import { ForceSimulation, runForceSimulation } from './forceSimulation'

const simulationTicks = 60
const collisionTicks = 20

const runSimulationPhase = async (simulation: ForceSimulation) => {
  for (let i = 0; i < simulationTicks; i += 1) {
    await simulation.tick()
  }
}

const runCollisionPhase = async (simulation: ForceSimulation) => {
  simulation.force(
    'collide',
    forceCollide()
      .radius((n: NodeExtended) => (n.scale || 1) * 20)
      .iterations(1),
  )

  for (let i = 0; i < collisionTicks; i += 1) {
    await simulation.tick()
  }
}

export const generateForceGraphPositions = async (nodes: NodeExtended[], usingCurrentData: boolean) => {
  const updatedNodes = nodes.map((node: NodeExtended) => ({ ...node, x: 0, y: 0, z: 0 }))

  let links = generateLinksFromNodeData(updatedNodes, true)

  const forceSimulation = runForceSimulation(updatedNodes, links, {
    numDimensions: 3,
    forceLinkStrength: 0.4,
    forceChargeStrength: -20,
    forceCenterStrength: 0.1,
    velocityDecay: 0.5,
  })

  await runSimulationPhase(forceSimulation)
  await runCollisionPhase(forceSimulation)

  forceSimulation.stop()

  // update link positions
  const updatedLinks = links.map((link) => {
    const source = link.source as unknown as NodeExtended
    const target = link.target as unknown as NodeExtended

    const sourcePosition = new Vector3(source?.x || 0, source?.y || 0, source?.z || 0)
    const targetPosition = new Vector3(target?.x || 0, target?.y || 0, target?.z || 0)

    // give positions to nodes explicitly from links
    if (usingCurrentData) {
      const sourceNode = updatedNodes.find((f) => f.ref_id === source.ref_id)
      const targetNode = updatedNodes.find((f) => f.ref_id === target.ref_id)

      if (sourceNode) {
        const { x, y, z } = sourcePosition

        sourceNode.x = x
        sourceNode.y = y
        sourceNode.z = z
      }

      if (targetNode) {
        const { x, y, z } = targetPosition

        targetNode.x = x
        targetNode.y = y
        targetNode.z = z
      }
    }

    return {
      ...link,
      onlyVisibleOnSelect: false,
      sourcePosition,
      targetPosition,
    }
  })

  return { nodes: updatedNodes, links: updatedLinks }
}
