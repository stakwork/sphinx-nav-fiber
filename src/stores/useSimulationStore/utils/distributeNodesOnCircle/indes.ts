import { Neighbourhood, Position } from '~/stores/useGraphStore'

export const distributeNodesOnCircle = (nodes: Neighbourhood[], radius = 20) => {
  const goldenAngle = Math.PI * (3 - Math.sqrt(5)) // ~2.399 rad (~137.5 deg)

  return nodes.reduce((acc: Record<string, Position>, node, i) => {
    const angle = i * goldenAngle

    acc[node.ref_id] = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      z: 0, // optional, keep for 3D consistency
    }

    return acc
  }, {})
}
