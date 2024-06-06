import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { Perf } from 'r3f-perf'
import { useEffect } from 'react'
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
}

const bgColor = new Color(0x000)

export const Graph = ({ selectedSchemaId, links, schemasWithPositions, setSelectedSchemaId }: Props) => (
  <Canvas camera={{ zoom: 1, position: [0, 0, 200] }} id="schema-canvas" linear orthographic>
    <color args={[bgColor.r, bgColor.g, bgColor.b]} attach="background" />
    {isDevelopment && <Perf position="right-bottom" />}
    <Controls />
    <Lights />
    <ForceGraph
      filteredLinks={links}
      schemasWithPositions={schemasWithPositions}
      selectedSchemaId={selectedSchemaId}
      setSelectedSchemaId={setSelectedSchemaId}
    />
  </Canvas>
)

const Controls = () => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['Meta', 'Alt'].includes(e.key)) {
        document.body.style.cursor = 'grab'
      }
    }

    const handleKeyUp = (e: KeyboardEvent) => {
      if (['Meta', 'Alt'].includes(e.key)) {
        document.body.style.cursor = 'default'
      }
    }

    window.addEventListener('keydown', handleKeyDown, false)
    window.addEventListener('keyup', handleKeyUp, false)

    return () => {
      window.removeEventListener('keydown', handleKeyDown, false)
      window.removeEventListener('keyup', handleKeyUp, false)
    }
  }, [])

  const handleStart = () => {
    document.body.style.cursor = 'grabbing'
  }

  const handleDragEnd = () => {
    document.body.style.cursor = 'default'
  }

  return (
    <OrbitControls
      dampingFactor={1}
      enableDamping
      enablePan
      enableRotate={false}
      enableZoom
      maxZoom={20}
      minZoom={1}
      onEnd={handleDragEnd}
      onStart={handleStart}
      zoomSpeed={1.5}
      zoomToCursor
    />
  )
}
