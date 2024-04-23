import { Schema } from '~/network/fetchSourcesData'

export type SchemaWithChildren = Schema & {
  children: string[]
}

export type SchemaExtended = SchemaWithChildren & {
  x: number
  y: number
  z: number
}
