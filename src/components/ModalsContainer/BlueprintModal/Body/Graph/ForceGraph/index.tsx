import { useFrame } from '@react-three/fiber'
import { useEffect } from 'react'
import { ForceSimulation, runForceSimulation } from '~/transformers/forceSimulation'
import { NodeExtended } from '~/types'
import { SchemaExtended, SchemaLinkExtended } from '../../../types'
import { Lines } from '../Links'
import { Nodes } from '../Nodes'

type Props = {
  selectedSchemaId: string
  setSelectedSchemaId: (id: string) => void
  schemasWithPositions: SchemaExtended[]
  linksWithPositions: SchemaLinkExtended[]
}

let simulation2d: ForceSimulation | null = null

export const ForceGraph = ({
  schemasWithPositions,
  linksWithPositions,
  setSelectedSchemaId,
  selectedSchemaId,
}: Props) => {
  // const [update, setUpdate] = useState(false)

  useEffect(() => {
    if (!schemasWithPositions.length || !linksWithPositions.length) {
      return
    }

    if (simulation2d) {
      return
    }

    simulation2d = runForceSimulation(
      schemasWithPositions.map((s) =>
        s.type === 'Thing' ? { ...s, x: 0, y: 0, fx: 0, fy: 0, fz: 0 } : { ...s, x: 0, y: 0 },
      ),
      linksWithPositions,
      {
        numDimensions: 2,
        forceLinkStrength: 1,
        forceCenterStrength: 0.95,
        forceChargeStrength: -50,
        velocityDecay: 0.9,
        forceCollideRadiusMethod: () => 50,
        forceLinkDistanceMethod: (d: {
          source: SchemaExtended | NodeExtended
          target: SchemaExtended | NodeExtended
        }) => {
          let distance = 1

          if (d.source.type === 'Thing') {
            distance = 30
          }

          return distance
        },
      },
    )

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [schemasWithPositions, linksWithPositions])

  useFrame(() => {
    if (simulation2d) {
      simulation2d.tick()
      // setUpdate(!update)
    }
  })

  return simulation2d ? (
    <>
      <Lines links={linksWithPositions} nodes={simulation2d.nodes()} />
      <Nodes nodes={simulation2d.nodes()} selectedId={selectedSchemaId} setSelectedSchemaId={setSelectedSchemaId} />
    </>
  ) : null
}
