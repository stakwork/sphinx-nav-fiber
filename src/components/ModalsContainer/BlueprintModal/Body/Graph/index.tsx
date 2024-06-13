import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { Color } from 'three'
import { Lights } from '~/components/Universe/Lights'
import { isDevelopment } from '~/constants'
import { SchemaLink } from '~/network/fetchSourcesData'
import { SchemaExtended } from '../../types'
import { ForceGraph } from './ForceGraph'

type Props = {
  schemasWithPositions: SchemaExtended[]
  links: SchemaLink[]
  selectedSchemaId: string
  setSelectedSchemaId: (id: string) => void
  setIsAddEdgeNode: (b: boolean) => void
}

const bgColor = new Color(0x000)

export const Graph = ({
  selectedSchemaId,
  links,
  schemasWithPositions,
  setSelectedSchemaId,
  setIsAddEdgeNode,
}: Props) => (
  <Canvas camera={{ zoom: 1, position: [0, 0, 200] }} id="schema-canvas" linear orthographic>
    <color args={[bgColor.r, bgColor.g, bgColor.b]} attach="background" />
    {isDevelopment && <Perf position="right-bottom" />}
    <OrbitControls enableRotate={false} enableZoom />
    <Lights />
    <ForceGraph
      filteredLinks={links}
      schemasWithPositions={schemasWithPositions}
      selectedSchemaId={selectedSchemaId}
      setIsAddEdgeNode={setIsAddEdgeNode}
      setSelectedSchemaId={setSelectedSchemaId}
    />
  </Canvas>
)
