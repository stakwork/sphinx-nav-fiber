import { Neighbourhood, Position } from '~/stores/useGraphStore'

export const distributeNodesOnCircle = (
  nodes: Neighbourhood[],
  radius = 20,
  excludedAngles: [number, number][] = [
    [-Math.PI / 3, Math.PI / 3],
    [2 * Math.PI - Math.PI / 3, 2 * Math.PI],
  ],
) => {
  const validAngles: number[] = []
  const step = (2 * Math.PI) / (nodes.length * 2) // small steps to generate options

  for (let a = 0; validAngles.length < nodes.length && a < 2 * Math.PI; a += step) {
    const inExcluded = excludedAngles.some(([start, end]) =>
      start < end ? a >= start && a <= end : a >= start || a <= end,
    )

    if (!inExcluded) {
      validAngles.push(a)
    }
  }

  return nodes.reduce((acc: Record<string, Position>, node, i) => {
    const angle = validAngles[i % validAngles.length]

    acc[node.ref_id] = {
      x: radius * Math.cos(angle),
      y: radius * Math.sin(angle),
      z: 0,
    }

    return acc
  }, {})
}
