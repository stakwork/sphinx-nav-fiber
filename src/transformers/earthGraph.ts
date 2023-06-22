import { Vector3 } from 'three'
import { generateLinksFromNodeData } from '~/network/fetchGraphData'
import { NodeExtended } from '~/types'

export const EARTH_RADIUS = 2000
export const EARTH_DATA_PADDING = 50

const dataRadius = EARTH_RADIUS + EARTH_DATA_PADDING

function getRandomLngLat() {
  const from = -180
  const to = 180
  return parseFloat((Math.random() * (to - from) + from).toFixed(4))
}

const getPositionFromLngLat = (node: NodeExtended) => {
  const { lng, lat } = node.coordinates ? node.coordinates : { lng: getRandomLngLat(), lat: getRandomLngLat() }
  const latRad = (lat * Math.PI) / 180
  const lonRad = (lng * Math.PI) / 180

  // Calculate the Cartesian coordinates
  const x = dataRadius * Math.cos(latRad) * Math.cos(lonRad)
  const y = dataRadius * Math.sin(latRad)
  const z = dataRadius * Math.cos(latRad) * Math.sin(lonRad)

  return new Vector3(x, y, z)
}

export const generateEarthGraphPositions = (nodes: NodeExtended[]) => {
  const updatedNodes = nodes.map((node: NodeExtended) => {
    const position = getPositionFromLngLat(node)

    const updatedNode = { ...node, ...position }

    return updatedNode
  })

  const links = generateLinksFromNodeData(updatedNodes, true, true)

  return { nodes: updatedNodes, links }
}
