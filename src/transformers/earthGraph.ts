import { Vector3 } from 'three'
import { generateLinksFromNodeData } from '~/network/fetchGraphData'
import { NodeExtended } from '~/types'

export const EARTH_RADIUS = 2000

// function getRandomInRange(from: number, to: number, fixed: number) {
//   return parseFloat((Math.random() * (to - from) + from).toFixed(fixed))
// }

const getPositionFromLngLat = () => {
  // seattle
  const lng = 47.6062 // getRandomInRange(-180, 180, 3)
  const lat = 122.3321 // getRandomInRange(-180, 180, 3)
  //   const fakeNode = { lng: 8.9, lat: -10.2 }
  //   const { lng, lat } = fakeNode
  const phi = (90 - lat) * (Math.PI / 180)
  const theta = (lng + 180) * (Math.PI / 180)
  const x = -(EARTH_RADIUS * Math.sin(phi) * Math.cos(theta))
  const z = EARTH_RADIUS * Math.sin(phi) * Math.sin(theta)
  const y = EARTH_RADIUS * Math.cos(phi)

  return new Vector3(x, y, z)
}

export const generateEarthGraphPositions = (nodes: NodeExtended[]) => {
  const updatedNodes = nodes.map((node: NodeExtended) => {
    const position = getPositionFromLngLat()

    const updatedNode = { ...node, ...position }

    return updatedNode
  })

  const links = generateLinksFromNodeData(updatedNodes, true, true)

  return { nodes: updatedNodes, links }
}
