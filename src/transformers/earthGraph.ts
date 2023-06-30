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
  const latRad = (lat * Math.PI) / 180
  const lonRad = (lng * Math.PI) / 180

  // Calculate the Cartesian coordinates
  const x = radius * Math.cos(latRad) * Math.cos(lonRad)
  const y = radius * Math.sin(latRad)
  const z = radius * Math.cos(latRad) * Math.sin(lonRad)

  return new Vector3(x, y, z)
}

export const getLngLatFromPosition = (position: Vector3) => {
  let { x, y, z } = position

  // Calculate longitude
  const lng = (Math.atan2(z, x) * 180) / Math.PI

  // Calculate latitude
  const hyp = Math.sqrt(x * x + z * z)
  const lat = (Math.atan2(y, hyp) * 180) / Math.PI

  return { lat, lng }
}

export const generateEarthGraphPositions = (nodes: NodeExtended[]) => {
  const updatedNodes = nodes.map((node: NodeExtended) => {
    const { lng, lat } = node.coordinates ? node.coordinates : { lng: getRandomLngLat(), lat: getRandomLngLat() }
    const position = getPositionFromLngLat(lng, lat, dataRadius)

    const updatedNode = { ...node, ...position }

    return updatedNode
  })

  const links = generateLinksFromNodeData(updatedNodes, true, true)

  return { nodes: updatedNodes, links }
}
