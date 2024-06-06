import { useFrame } from '@react-three/fiber'
import { forceCenter, forceCollide, forceLink, forceManyBody, forceSimulation } from 'd3-force-3d'
import { useEffect, useRef } from 'react'
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
}

export const ForceGraph = ({ schemasWithPositions, filteredLinks, setSelectedSchemaId, selectedSchemaId }: Props) => {
  const simulation2dRef = useRef<ForceSimulation | null>(null)
  const prevSchemas = usePrevious<SchemaExtended[]>(schemasWithPositions)
  const prevLinks = usePrevious<SchemaLink[]>(filteredLinks)

  useEffect(() => {
    if (!schemasWithPositions.length || !filteredLinks.length) {
      return
    }

    const nodes = structuredClone(schemasWithPositions)
    const links = structuredClone(filteredLinks)

    if (simulation2dRef.current) {
      if (
        prevSchemas &&
        prevSchemas.length !== schemasWithPositions.length &&
        prevLinks &&
        prevLinks.length !== filteredLinks.length
      ) {
        simulation2dRef.current
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

    simulation2dRef.current = simulation
  }, [schemasWithPositions, filteredLinks, prevSchemas, prevLinks])

  useFrame(() => {
    if (simulation2dRef.current) {
      simulation2dRef.current.tick()
    }
  })

  return simulation2dRef.current ? (
    <>
      <Lines links={filteredLinks} nodes={simulation2dRef.current.nodes()} />
      <Nodes
        selectedId={selectedSchemaId}
        setSelectedSchemaId={setSelectedSchemaId}
        simulation={simulation2dRef.current}
      />
    </>
  ) : null
}
