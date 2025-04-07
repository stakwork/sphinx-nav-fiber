import { Neighbourhood, Position } from '~/stores/useGraphStore'

export const distributeNodesOnSphere = (nodes: Neighbourhood[], radius = 20) => {
  const count = nodes.length
  const goldenRatio = (1 + Math.sqrt(5)) / 2

  return nodes.reduce((acc: Record<string, Position>, node, i) => {
    const theta = (2 * Math.PI * i) / goldenRatio // Angle for uniform distribution
    const phi = Math.acos(1 - (2 * (i + 0.5)) / count) // Elevation angle

    acc[node.ref_id] = {
      x: radius * Math.sin(phi) * Math.cos(theta),
      y: radius * Math.sin(phi) * Math.sin(theta),
      z: radius * Math.cos(phi),
    }

    return acc
  }, {})
}
