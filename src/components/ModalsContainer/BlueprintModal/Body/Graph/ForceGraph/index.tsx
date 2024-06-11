import { useFrame } from '@react-three/fiber'
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { useEffect, useRef, useState } from 'react'
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
  const simulationRef = useRef<ForceSimulation | null>(null)

  useEffect(() => {
    if (!schemasWithPositions.length || !filteredLinks.length) {
      return
    }

    const nodes = structuredClone(schemasWithPositions)
    const links = structuredClone(filteredLinks)

    if (simulationRef.current) {
      const sim = simulationRef.current

      if (
        prevSchemas &&
        prevSchemas.length !== schemasWithPositions.length &&
        prevLinks &&
        prevLinks.length !== filteredLinks.length
      ) {
        sim
          .nodes(nodes)
          .force(
            'link',
            forceLink(links).id((d: SchemaExtended) => d.ref_id),
          )
          .force('charge', forceManyBody())
          .force('center', forceCenter())
          .force('collide', forceCollide(NODE_RADIUS + 1))
          .alpha(0.5)
          .restart()
      }

      return
    }

    const simulation = forceSimulation(nodes)
      .force(
        'link',
        forceLink(links).id((d: SchemaExtended) => d.ref_id),
      )
      .force('charge', forceManyBody())
      .force('center', forceCenter())
      .force('collide', forceCollide(NODE_RADIUS + 1))
      .alpha(0.5)
      .restart()

    simulationRef.current = simulation
    setSimulation2d(simulation)
  }, [schemasWithPositions, filteredLinks, prevSchemas, prevLinks])

  useFrame(() => {
    if (simulationRef.current) {
      simulationRef.current.tick()
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
