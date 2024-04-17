/* eslint-disable @typescript-eslint/no-unused-vars */
import { Canvas } from '@react-three/fiber'
import { Vector3 } from 'three'
import { Lights } from '~/components/Universe/Lights'
import { Schema } from '~/network/fetchSourcesData'
import { Node } from './Node'

const defaultValues = {
  type: '',
  parent: '',
}

const initialCameraPosition = new Vector3(0, 0, 1500)

export type FormData = {
  type: string
  parent?: string
  attributes?: {
    [k: string]: string | boolean
  }
}

type Props = {
  onSchemaCreate: (schema: { type: string; parent: string }) => void
  selectedSchema: Schema | null
  onDelete: (type: string) => void
}

const cameraProps = {
  aspect: window.innerWidth / window.innerHeight,
  far: 30000,
  near: 1,
  position: [initialCameraPosition.x, initialCameraPosition.y, initialCameraPosition.z],
} as const

export const Body = ({ onSchemaCreate, selectedSchema, onDelete }: Props) => {
  console.log(onSchemaCreate, selectedSchema, onDelete)

  return (
    <div>
      <Canvas camera={cameraProps} id="schema-canvas">
        <Lights />
        <Node node={{ x: 0, y: 0, z: 0, id: '0' }} />
      </Canvas>
    </div>
  )
}
