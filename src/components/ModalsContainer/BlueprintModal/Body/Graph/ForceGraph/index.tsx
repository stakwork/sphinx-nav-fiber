import { useFrame } from '@react-three/fiber'
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { useEffect, useState, useCallback } from 'react'
import { usePrevious } from '~/hooks/usePrevious'
import { SchemaLink } from '~/network/fetchSourcesData'
import { ForceSimulation } from '~/transformers/forceSimulation'
import { SchemaExtended } from '../../../types'
import { Lines } from '../Links'
import { Nodes } from '../Nodes'
import { NODE_RADIUS } from '../constants'

type Props = {
  selectedSchemaId: string
  setSelectedSchemaId: (id: string) => void
  schemasWithPositions: SchemaExtended[]
  filteredLinks: SchemaLink[]
  setIsAddEdgeNode: (b: boolean) => void
}

export const ForceGraph = ({
  schemasWithPositions,
  filteredLinks,
  setSelectedSchemaId,
  selectedSchemaId,
  setIsAddEdgeNode,
}: Props) => {
  const [simulation2d, setSimulation2d] = useState<ForceSimulation | null>(null)

  const prevSchemas = usePrevious<SchemaExtended[]>(schemasWithPositions)
  const prevLinks = usePrevious<SchemaLink[]>(filteredLinks)

  // Custom force to handle link separation
  const linkSeparationForce = useCallback(
    () => (alpha: number) => {
      filteredLinks.forEach((link, i) => {
        for (let j = i + 1; j < filteredLinks.length; j += 1) {
          const otherLink = filteredLinks[j]

          if (link.source === otherLink.source && link.target === otherLink.target) {
            const linkSource = schemasWithPositions.find((node) => node.ref_id === link.source)
            const linkTarget = schemasWithPositions.find((node) => node.ref_id === link.target)
            const otherLinkSource = schemasWithPositions.find((node) => node.ref_id === otherLink.source)
            const otherLinkTarget = schemasWithPositions.find((node) => node.ref_id === otherLink.target)

            if (linkSource && linkTarget && otherLinkSource && otherLinkTarget) {
              const dx = (otherLinkTarget.x ?? 0) - (linkTarget.x ?? 0)
              const dy = (otherLinkTarget.y ?? 0) - (linkTarget.y ?? 0)
              const dz = (otherLinkTarget.z ?? 0) - (linkTarget.z ?? 0)

              const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)
              const minDistance = 10 // Minimum distance to avoid overlap

              if (distance < minDistance) {
                const angle = Math.atan2(dy, dx)
                const separation = ((minDistance - distance) / distance) * alpha
                const displacementX = Math.cos(angle) * separation
                const displacementY = Math.sin(angle) * separation

                otherLinkTarget.x = (otherLinkTarget.x ?? 0) + displacementX
                otherLinkTarget.y = (otherLinkTarget.y ?? 0) + displacementY
                linkTarget.x = (linkTarget.x ?? 0) - displacementX
                linkTarget.y = (linkTarget.y ?? 0) - displacementY
              }
            }
          }
        }
      })
    },
    [filteredLinks, schemasWithPositions],
  )

  useEffect(() => {
    if (!schemasWithPositions.length || !filteredLinks.length) {
      return
    }

    const nodes = structuredClone(schemasWithPositions)
    const links = structuredClone(filteredLinks)

    if (simulation2d) {
      if (
        prevSchemas &&
        prevSchemas.length !== schemasWithPositions.length &&
        prevLinks &&
        prevLinks.length !== filteredLinks.length
      ) {
        simulation2d
          .nodes(nodes)
          .force(
            'link',
            forceLink(links)
              .id((d: SchemaExtended) => d.ref_id)
              .distance(100),
          )
          .force('charge', forceManyBody())
          .force('center', forceCenter())
          .force('collide', forceCollide(NODE_RADIUS + 5))
          .force('linkSeparation', linkSeparationForce())
          .alpha(0.5)
          .restart()

        setSimulation2d({ ...simulation2d })
      }

      return
    }

    const simulation = forceSimulation(nodes)
      .force(
        'link',
        forceLink(links)
          .id((d: SchemaExtended) => d.ref_id)
          .distance(100),
      )
      .force('charge', forceManyBody())
      .force('center', forceCenter())
      .force('collide', forceCollide(NODE_RADIUS + 5))
      .force('linkSeparation', linkSeparationForce())

    setSimulation2d(simulation)
  }, [schemasWithPositions, simulation2d, filteredLinks, prevSchemas, prevLinks, linkSeparationForce])

  useFrame(() => {
    if (simulation2d) {
      // simulation2d.tick()
      // setUpdate(!update)
    }
  })

  return simulation2d ? (
    <>
      <Lines links={filteredLinks} nodes={simulation2d.nodes()} />
      <Nodes
        selectedId={selectedSchemaId}
        setIsAddEdgeNode={setIsAddEdgeNode}
        setSelectedSchemaId={setSelectedSchemaId}
        simulation={simulation2d}
      />
    </>
  ) : null
}
