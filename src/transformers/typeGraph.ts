import { Vector3 } from "three";
import * as Noise from '~/utils/noise';
import { GraphData, NodeExtended, Link } from "~/types";

const universeScale = 4000

const guestCube = {
    scale: 2600,
    position: {
      x: 0,
      y: 0,
      z: universeScale
    }
}
  
const topicCube = {
  scale: 2600,
  position: {
    x: 0,
    y: 0,
    z: - universeScale
  }
}
  
  
type TopicMapItem = {
  children: string[];
  position: Vector3
}
  
type TopicMap = Record<string, TopicMapItem>
  
function generateGuestNodePosition() {
  const { scale, position } = guestCube  

  const center = {
    x: position.x + (Math.random() * scale) - (scale * 0.5),
    y: position.y + (Math.random() * scale) - (scale * 0.5),
    z: position.z + (Math.random() * scale) - (scale * 0.5)
  }
  // apply perlin noise
  const perlinNoise = Noise.perlin3(center.x,center.y,center.z)
  
  const amp = 10
  
  return new Vector3(
    center.x + (perlinNoise * amp),
    center.y + (perlinNoise * amp),
    center.z + (perlinNoise * amp)
  )
}


function generateTopicNodePosition() {
  const { scale, position } = topicCube  

  const center = {
    x: position.x + (Math.random() * scale) - (scale * 0.5),
    y: position.y + (Math.random() * scale) - (scale * 0.5),
    z: position.z + (Math.random() * scale) - (scale * 0.5)
  }
  // apply perlin noise
  const perlinNoise = Noise.perlin3(center.x,center.y,center.z)
  
  const amp = 10
  
  return new Vector3(
    center.x + (perlinNoise * amp),
    center.y + (perlinNoise * amp),
    center.z + (perlinNoise * amp)
  )
}


function generateNearbyPosition(basePosition: Vector3, nodeType?: string, childIndex = 1) {
  // const biasX = ((Math.random() - 0.5) < 0 ? -1 : 1)
  const biasY = 1 // ((Math.random() - 0.5) < 0 ? -1 : 1)
  // const biasZ = ((Math.random() - 0.5) < 0 ? -1 : 1)

  let xOffset = 0 // 10 * biasX
  let yOffset = 10 * biasY
  const zOffset = 0 // 10 * biasZ

  switch (nodeType) {
    case 'episode':
      yOffset += 50 * (childIndex || 0)
      break;
    case 'clip':
      yOffset = 0
      xOffset += 50 * (childIndex || 0)
      break;
    default:
  }

  const center = new Vector3()

  center.x = basePosition.x + xOffset
  center.y = basePosition.y + yOffset
  center.z = basePosition.z + zOffset

  return center
}


function getMyTopicNodes(nodeRefId: string | undefined, topicMap: TopicMap) {
  if (!nodeRefId) {
    return []
  }

  const myTopicNodes: TopicMapItem[] = []

  Object.values(topicMap).forEach((content) => {
    if (content.children.includes(nodeRefId)) {
      myTopicNodes.push(content)
    }
  })
  
  return myTopicNodes
}


function getMyParents(node: NodeExtended, nodes: NodeExtended[] | undefined) {
  const { ref_id: refId } = node
  if (!refId || !nodes) {
    return []
  }

  const parents = nodes.filter(f => f.children?.includes(refId))
  
  return parents
}

function getMyChildren(childrenRefIds:string[], nodes: NodeExtended[]) {
  const children = nodes.filter(f => f.ref_id && childrenRefIds.includes(f.ref_id))
  
  return children
}

function generateNodePosition(node: NodeExtended, allNodes: NodeExtended[], mappedNodes: NodeExtended[]) {
  const { ref_id: refId} = node

  const center = {
    x:(Math.random() * universeScale) - (universeScale * 0.5),
    y: (Math.random() * universeScale) - (universeScale * 0.5),
    z:(Math.random() * universeScale) - (universeScale * 0.5)
  }

   // do i have parents?
  const parents = getMyParents(node, mappedNodes)

  let relativePosition: Vector3 | null = null

  if (parents?.length){
    const parent = parents[0]
    const parentChildren = getMyChildren(parent.children || [], allNodes)
    const myChildIndex = parentChildren.findIndex(f=>f.ref_id=== refId)
    relativePosition = generateNearbyPosition(new Vector3(parent.x, parent.y, parent.z), node.node_type, myChildIndex + 1)
  }

  if (relativePosition) {
    center.x = relativePosition.x
    center.y = relativePosition.y
    center.z = relativePosition.z
  }
  
  // apply perlin noise
  const perlinNoise = 1 // Noise.perlin3(center.x,center.y,center.z)
  
  const amp = 1
  
  return new Vector3(
    center.x + (perlinNoise * amp),
    center.y + (perlinNoise * amp),
    center.z + (perlinNoise * amp)
  )
}


export const generateTypeGraphPositions = (data: GraphData) => {
  const mappedNodes:NodeExtended[] = []
  
  const updatedNodes = data.nodes.map((node) => {
    let position = new Vector3(0,0,0)
    switch (node.node_type) {
      case 'guest':
        position = generateGuestNodePosition()
        break;
      case 'topic':
        position = generateTopicNodePosition()
        break;
      case 'data_series':
        position = generateNodePosition({} as NodeExtended, data.nodes, mappedNodes)
        break;
      default:
        position = generateNodePosition(node, data.nodes, mappedNodes)
        break;
    }

    const updated = {
      ...node,
      ...position
    }

    mappedNodes.push(updated)

    return updated
  })


  // do links
  const updatedLinks = data.links.map((l) => {
    const sourceNode = updatedNodes.find(f => f.ref_id === l.source)
    const targetNode = updatedNodes.find(f=> f.ref_id === l.target)
    let onlyVisibleOnSelect = false

    if (
      (sourceNode?.node_type === 'guest' || sourceNode?.node_type === 'topic')
      || (targetNode?.node_type === 'guest' || targetNode?.node_type === 'topic')
    ) {
      onlyVisibleOnSelect = true
    }

    const sourcePosition = new Vector3(sourceNode?.x || 0, sourceNode?.y || 0, sourceNode?.z || 0)
    const targetPosition = new Vector3(targetNode?.x || 0, targetNode?.y || 0, targetNode?.z || 0)

    return {
      ...l,
      onlyVisibleOnSelect,
      sourcePosition,
      targetPosition
    }
  })

  return { nodes: updatedNodes, links: updatedLinks }
}