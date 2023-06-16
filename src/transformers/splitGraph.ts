import { Vector3 } from 'three'
import { generateLinksFromNodeData } from '~/network/fetchGraphData'
import { Link, NodeExtended } from '~/types'
import { getMyChildren, getMyParents, sortNodesByHierarchy } from './helpers'

const universeScale = 5000
const padding = 300

const guestCube = {
  scale: universeScale / 2,
  position: {
    x: 0,
    y: 0,
    z: universeScale / 2 + padding,
  },
}

const topicCube = {
  scale: universeScale / 2,
  position: {
    x: 0,
    y: 0,
    z: -(universeScale / 2 + padding),
  },
}

const dataCube = {
  scale: universeScale / 2,
  position: {
    x: 0,
    y: 0,
    z: 0,
  },
}

function generateGuestNodePosition() {
  const { scale, position } = guestCube

  const center = {
    x: position.x + Math.random() * scale - scale * 0.5,
    y: position.y + Math.random() * scale - scale * 0.5,
    z: position.z + Math.random() * scale - scale * 0.5,
  }
  // apply perlin noise

  const perlinNoise = 1

  const amp = 10

  return new Vector3(center.x + perlinNoise * amp, center.y + perlinNoise * amp, center.z + perlinNoise * amp)
}

function generateTopicNodePosition() {
  const { scale, position } = topicCube

  const center = {
    x: position.x + Math.random() * scale - scale * 0.5,
    y: position.y + Math.random() * scale - scale * 0.5,
    z: position.z + Math.random() * scale - scale * 0.5,
  }
  // apply perlin noise

  const perlinNoise = 1

  const amp = 10

  return new Vector3(center.x + perlinNoise * amp, center.y + perlinNoise * amp, center.z + perlinNoise * amp)
}

function generateNearbyPosition(basePosition: Vector3, nodeType?: string, childIndex = 1) {
  // use this formula for positional bias: ((Math.random() - 0.5) < 0 ? -1 : 1)
  const biasY = 1

  let xOffset = 0
  let yOffset = 10 * biasY
  const zOffset = 0

  switch (nodeType) {
    case 'episode':
      yOffset += 50 * (childIndex || 0)
      break
    case 'clip':
      yOffset = 0
      xOffset += 50 * (childIndex || 0)
      break
    default:
  }

  const center = new Vector3()

  center.x = basePosition.x + xOffset
  center.y = basePosition.y + yOffset
  center.z = basePosition.z + zOffset

  return center
}

function generateNodePosition(node: NodeExtended, allNodes: NodeExtended[], mappedNodes: NodeExtended[]) {
  const { ref_id: refId } = node
  const { scale, position } = dataCube

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
    const parentChildren = getMyChildren(parent.children || [], allNodes)
    const myChildIndex = parentChildren.findIndex((f) => f.ref_id === refId)

    relativePosition = generateNearbyPosition(
      new Vector3(parent.x, parent.y, parent.z),
      node.node_type,
      myChildIndex + 1,
    )
  }

  if (relativePosition) {
    center.x = relativePosition.x
    center.y = relativePosition.y
    center.z = relativePosition.z
  }

  // apply perlin noise
  const perlinNoise = 1 // Noise.perlin3(center.x,center.y,center.z)

  const amp = 1

  return new Vector3(center.x + perlinNoise * amp, center.y + perlinNoise * amp, center.z + perlinNoise * amp)
}

export const generateSplitGraphPositions = (nodes: NodeExtended[]) => {
  // sort parent then children
  const sortedNodes = sortNodesByHierarchy(nodes)

  const mappedNodes: NodeExtended[] = []

  const updatedNodes: NodeExtended[] = sortedNodes.map((node: NodeExtended) => {
    let position = new Vector3(0, 0, 0)

    switch (node.node_type) {
      case 'guest':
        position = generateGuestNodePosition()
        break
      case 'topic':
        position = generateTopicNodePosition()
        break
      case 'data_series':
        position = generateNodePosition({} as NodeExtended, sortedNodes, mappedNodes)
        break
      default:
        position = generateNodePosition(node, sortedNodes, mappedNodes)
        break
    }

    const updated = {
      ...node,
      ...position,
    }

    mappedNodes.push(updated)

    return updated
  })

  const links = generateLinksFromNodeData(updatedNodes, true)

  // do links
  const updatedLinks = links.map((l: Link) => {
    const sourceNode = updatedNodes.find((f) => f.ref_id === l.sourceRef)
    const targetNode = updatedNodes.find((f) => f.ref_id === l.targetRef)
    let onlyVisibleOnSelect = false

    if (
      sourceNode?.node_type === 'guest' ||
      sourceNode?.node_type === 'topic' ||
      targetNode?.node_type === 'guest' ||
      targetNode?.node_type === 'topic'
    ) {
      onlyVisibleOnSelect = true
    }

    const sourcePosition = new Vector3(sourceNode?.x || 0, sourceNode?.y || 0, sourceNode?.z || 0)
    const targetPosition = new Vector3(targetNode?.x || 0, targetNode?.y || 0, targetNode?.z || 0)

    return {
      ...l,
      onlyVisibleOnSelect,
      sourcePosition,
      targetPosition,
    }
  })

  // sort back to weighted sort
  updatedNodes.sort((a, b) => (b.weight || 0) - (a.weight || 0))

  return { nodes: updatedNodes, links: updatedLinks }
}
