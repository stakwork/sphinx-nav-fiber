import { Schema, SchemaLink } from '~/network/fetchSourcesData'

export type SchemaWithChildren = Schema & {
  children: string[]
}

export type SchemaExtended = SchemaWithChildren & {
  x?: number
  y?: number
  z?: number
  fx?: number
  fy?: number
  fz?: number
  vx?: number
  vy?: number
  vz?: number
  attributes?: {
    [k: string]: string | boolean
  }
}

export type SchemaLinkExtended = SchemaLink & {
  start: { x: number; y: number; z: number }
  end: { x: number; y: number; z: number }
}
