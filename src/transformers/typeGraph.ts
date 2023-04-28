import { Vector3 } from "three";
// import * as Noise from '~/utils/noise';
import { GraphData, NodeExtended, Link } from "~/types";

const universeScale = 5000
const padding = 300

const guestCube = {
    scale: universeScale/2,
    position: {
      x: 0,
      y: 0,
      z: (universeScale/2 + padding)
    }
}
  
const topicCube = {
  scale: universeScale/2,
  position: {
    x: 0,
    y: 0,
    z: - (universeScale/2 + padding)
  }
}

const dataCube = {
  scale: universeScale/2,
  position: {
    x: 0,
    y: 0,
    z: 0
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
  const perlinNoise = 1 // Noise.perlin3(center.x,center.y,center.z)
  
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
  const perlinNoise = 1 // Noise.perlin3(center.x,center.y,center.z)
  
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

  const { ref_id: refId } = node
  const { scale, position } = dataCube  

  const center = {
    x: position.x + (Math.random() * scale) - (scale * 0.5),
    y: position.y + (Math.random() * scale) - (scale * 0.5),
    z: position.z + (Math.random() * scale) - (scale * 0.5)
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

const sortAB = (aType:string, bType:string, type:string) => {
  let direction = -2
  if (aType === type && bType === type) {
    direction = 0
  } else if (aType === type && bType !== type) {
    direction = -1  
  } else if (aType !== type && bType === type){
    direction = 1  
  }
  return direction
}

const sortNodes = (nodes:NodeExtended[]) => {
  const sortedNodes = nodes.map((n) => n).sort((a, b) => {
    let direction = 0

    if (a.node_type === 'show' || b.node_type === 'show') {
      direction = sortAB(a.node_type, b.node_type, 'show')
    }
    else if (a.node_type === 'episode' || b.node_type === 'episode') {
      direction = sortAB(a.node_type, b.node_type, 'episode')
    }
    else if (a.node_type === 'clip' || b.node_type === 'clip') {
      direction = sortAB(a.node_type, b.node_type, 'clip')
    }
    else if (a.node_type !== 'guest' && b.node_type === 'guest') {
      direction = sortAB(a.node_type, b.node_type, 'guest') 
    } 
    else {
      direction = 0
    }

    return direction
  })

  return sortedNodes
}

const getBoundaryNodes = () => {
  const pad = 10
  const guestPerimeterNode = {
    ...guestCube.position,
    scale: guestCube.scale/10 + pad,
    label: 'People',
    node_type: 'boundary',
    type:'boundary',
  } as NodeExtended

  const topicPerimeterNode = {
    ...topicCube.position,
    scale: guestCube.scale/10 + pad,
    label: 'Topics',
    node_type: 'boundary',
    type:'boundary',
  } as NodeExtended

  const dataPerimeterNode = {
    ...dataCube.position,
    scale: dataCube.scale/10 + pad,
    label: 'Media',
    node_type: 'boundary',
    type:'boundary',
  } as NodeExtended
  

  return [
    guestPerimeterNode,
    topicPerimeterNode,
    dataPerimeterNode
  ]
  
}

export const generateTypeGraphPositions = (data: GraphData, usingCurrentData: boolean) => {
  console.log('generateTypeGraphPositions', usingCurrentData)
  // recharacterize noise
  // Noise.seed(Math.random());

  // sort parent then children
  const cleanNodes = sortNodes(data.nodes)

  const cleanLinks = data.links.map((l) => l)

  const mappedNodes:NodeExtended[] = []
  
  const updatedNodes:NodeExtended[] = cleanNodes.map((node:NodeExtended) => {
    let position = new Vector3(0,0,0)
    switch (node.node_type) {
      case 'guest':
        position = generateGuestNodePosition()
        break;
      case 'topic':
        position = generateTopicNodePosition()
        break;
      case 'data_series':
        position = generateNodePosition({} as NodeExtended, cleanNodes, mappedNodes)
        break;
      default:
        position = generateNodePosition(node, cleanNodes, mappedNodes)
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
  const updatedLinks = cleanLinks.map((l: Link) => {
    const sourceNode = updatedNodes.find(f => f.ref_id === l.sourceRef)
    const targetNode = updatedNodes.find(f=> f.ref_id === l.targetRef)
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

  // const boundaryNodes = getBoundaryNodes()
  // boundaryNodes.forEach(b=>updatedNodes.push(b))

  return { nodes: updatedNodes, links: updatedLinks }
}