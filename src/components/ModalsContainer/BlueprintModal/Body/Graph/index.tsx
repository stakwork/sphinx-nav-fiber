import { AdaptiveDpr, Html, Loader, OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Suspense } from 'react'
import { Lights } from '~/components/Universe/Lights'
import { SchemaExtended, SchemaLinkExtended } from '../../types'
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
    <Canvas camera={{ zoom: 80 }} flat id="schema-canvas" linear orthographic>
      <Suspense fallback={<Fallback />}>
        <AdaptiveDpr pixelated />
        <OrbitControls enableRotate={false} enableZoom />
        <Lights />
        <Lines links={filteredLinks} />
        <>
          <Nodes nodes={schemasWithPositions} selectedId={selectedSchemaId} setSelectedSchemaId={setSelectedSchemaId} />
        </>
      </Suspense>
    </Canvas>
  )
}
