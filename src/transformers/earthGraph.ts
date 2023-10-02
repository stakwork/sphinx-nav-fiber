import { Vector3 } from 'three'
import { generateLinksFromNodeData } from '~/network/fetchGraphData'
import { NodeExtended } from '~/types'

export const EARTH_RADIUS = 1800
export const EARTH_DATA_PADDING = 50

const dataRadius = EARTH_RADIUS + EARTH_DATA_PADDING

function getRandomLngLat() {
  const from = -180
  const to = 180

  return parseFloat((Math.random() * (to - from) + from).toFixed(4))
}

export const getPointAbove = (point: Vector3, radius: number) => {
  const normalizedPoint = point.clone().normalize()
  const vectorToOrigin = normalizedPoint.clone().negate()
  const normalizedVectorToOrigin = vectorToOrigin.normalize()

  return normalizedVectorToOrigin.multiplyScalar(radius).add(point)
}

export const getPositionFromLngLat = (lng: number, lat: number, radius: number) => {
  const phi = (lat * Math.PI) / 180
  const theta = ((lng - 180) * Math.PI) / 180

  const x = -radius * Math.cos(phi) * Math.cos(theta)
  const y = radius * Math.sin(phi)
  const z = radius * Math.cos(phi) * Math.sin(theta)

  return new Vector3(x, y, z)
}

export const generateEarthGraphPositions = (nodes: NodeExtended[]) => {
  const updatedNodes = nodes.map((node: NodeExtended) => {
    const { longitude, latitude } =
      node.longitude && node.latitude ? node : { longitude: getRandomLngLat(), latitude: getRandomLngLat() }

    const position = getPositionFromLngLat(longitude as number, latitude as number, dataRadius)

    const updatedNode = { ...node, ...position }

    return updatedNode
  })

  const links = generateLinksFromNodeData(updatedNodes, true, true)

  return { nodes: updatedNodes, links }
}
