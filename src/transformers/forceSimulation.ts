import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { Link, NodeExtended } from '~/types'

export type ForceSimulation = typeof forceSimulation

const simulation: ForceSimulation = forceSimulation().stop()

type SimulationProps = {
  numDimensions?: 2 | 3
  velocityDecay?: number
  forceChargeStrength?: number
  forceChargeMinDistance?: number
  forceChargeMaxDistance?: number
  forceLinkStrength?: number
  forceCenterStrength?: number
  forceLinkDistanceMethod?: (link: { source: NodeExtended; target: NodeExtended }) => void
  forceCollideRadiusMethod?: (node: NodeExtended) => void
  disableCollide?: boolean
  disableCenter?: boolean
  disableLink?: boolean
  disableCharge?: boolean
}

const defaults: Required<SimulationProps> = {
  numDimensions: 3,
  velocityDecay: 0.9,
  forceChargeStrength: -20,
  forceChargeMinDistance: 10,
  forceChargeMaxDistance: 8000,
  forceLinkStrength: 0.04,
  forceCenterStrength: 0.85,
  disableCollide: false,
  disableCenter: false,
  disableLink: false,
  disableCharge: false,
  forceCollideRadiusMethod: (n: NodeExtended) => (n.scale || 1) * 6 + 200,
  forceLinkDistanceMethod: (d: { source: NodeExtended; target: NodeExtended }) => {
    const sourceType = (d.source as NodeExtended).node_type

    let distance = 50

    switch (sourceType) {
      case 'topic':
        distance = 30
        break
      case 'guest':
        distance = 30
        break
      case 'clip':
        distance = 10
        break
      case 'episode':
        distance = 15
        break
      default:
    }

    return (distance * 2) / 50
  },
}

export const runForceSimulation = (
  nodes: NodeExtended[],
  links: Link[],
  {
    numDimensions = defaults.numDimensions,
    velocityDecay = defaults.velocityDecay,
    forceChargeStrength = defaults.forceChargeStrength,
    forceChargeMinDistance = defaults.forceChargeMinDistance,
    forceChargeMaxDistance = defaults.forceChargeMaxDistance,
    forceLinkStrength = defaults.forceLinkStrength,
    forceCenterStrength = defaults.forceCenterStrength,
    forceLinkDistanceMethod = defaults.forceLinkDistanceMethod,
    forceCollideRadiusMethod = defaults.forceCollideRadiusMethod,
    disableCollide = defaults.disableCollide,
    disableCenter = defaults.disableCenter,
    disableLink = defaults.disableLink,
    disableCharge = defaults.disableCharge,
  }: SimulationProps,
) => {
  simulation
    .alpha(1)
    .stop()
    .numDimensions(numDimensions)
    .velocityDecay(velocityDecay)
    .force('collide', disableCollide ? null : forceCollide().radius(forceCollideRadiusMethod).iterations(1))
    .force('center', disableCenter ? null : forceCenter().strength(forceCenterStrength))
    .force(
      'charge',
      disableCharge
        ? null
        : forceManyBody()
            .strength(forceChargeStrength)
            .distanceMin(forceChargeMinDistance)
            .distanceMax(forceChargeMaxDistance),
    )
    .nodes(nodes)
    .force(
      'link',
      disableLink
        ? null
        : forceLink(links)
            .id((d: NodeExtended) => d.ref_id)
            .distance(forceLinkDistanceMethod)
            .strength(forceLinkStrength),
    )
    .alpha(1)
    .restart()

  return simulation
}
