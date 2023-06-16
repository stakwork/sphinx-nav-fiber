import { forceCollide } from 'd3-force-3d'
import { Vector3 } from 'three'
import { generateLinksFromNodeData } from '~/network/fetchGraphData'
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

  let relativePosition: Vector3 | null = null

  if (parents?.length) {
    const parent = parents[0]

    relativePosition = new Vector3(parent.x, parent.y, parent.z)
  }

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

  const links = generateLinksFromNodeData(updatedNodes, true)

  const forceSimulation = runForceSimulation(updatedNodes, links, {
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

  // update link positions
  const updatedLinks = links.map((link) => {
    const sourceNode = updatedNodes.find((f) => f.ref_id === link.sourceRef)
    const targetNode = updatedNodes.find((f) => f.ref_id === link.targetRef)
    const sourcePosition = new Vector3(sourceNode?.x || 0, sourceNode?.y || 0, sourceNode?.z || 0)
    const targetPosition = new Vector3(targetNode?.x || 0, targetNode?.y || 0, targetNode?.z || 0)
    const onlyVisibleOnSelect = true

    return {
      ...link,
      onlyVisibleOnSelect,
      sourcePosition,
      targetPosition,
    }
  })

  return { nodes: updatedNodes, links: updatedLinks }
}
