import { AdaptiveDpr, Html, Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Lights } from '~/components/Universe/Lights'
import { SchemaExtended, SchemaLinkExtended } from '../../types'
import { ForceGraph } from './ForceGraph'
import { Lines } from './Links'
import { Nodes } from './Nodes'

type Props = {
  schemasWithPositions: SchemaExtended[]
  linksWithPositions: SchemaLinkExtended[]
  selectedSchemaId: string
  setSelectedSchemaId: (id: string) => void
}

const Fallback = () => (
  <Html>
    <Loader />
  </Html>
)

export const Graph = ({ selectedSchemaId, linksWithPositions, schemasWithPositions, setSelectedSchemaId }: Props) => {
  const filteredLinks = selectedSchemaId
    ? linksWithPositions.filter((i) => [i.source, i.target].includes(selectedSchemaId))
    : linksWithPositions

  return (
    <Canvas camera={{ zoom: 1 }} flat id="schema-canvas" linear orthographic>
      <Suspense fallback={<Fallback />}>
        <AdaptiveDpr pixelated />
        <OrbitControls enableRotate={false} enableZoom />
        <Lights />
        {false && (
          <>
            <Lines links={filteredLinks} nodes={[]} />
            <>
              <Nodes
                nodes={schemasWithPositions}
                selectedId={selectedSchemaId}
                setSelectedSchemaId={setSelectedSchemaId}
              />
            </>
          </>
        )}
        <ForceGraph
          linksWithPositions={linksWithPositions}
          schemasWithPositions={schemasWithPositions}
          selectedSchemaId={selectedSchemaId}
          setSelectedSchemaId={setSelectedSchemaId}
        />
      </Suspense>
    </Canvas>
  )
}
