import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { SchemaLink } from '~/network/fetchSourcesData'

type SchemasStore = {
  schemas: SchemaExtended[]
  links: SchemaLink[]
  normalizedSchemasByType: { [type: string]: SchemaExtended }
  setSchemas: (schemas: SchemaExtended[]) => void
  setSchemaLinks: (schema: SchemaLink[]) => void
  getPrimaryColorByType: (type: string) => string | undefined
  getNodeKeysByType: (type: string) => string | undefined
  getSchemaByType: (type: string) => SchemaExtended | undefined
}

const defaultData: Omit<
  SchemasStore,
  'setSchemas' | 'setSchemaLinks' | 'getPrimaryColorByType' | 'getNodeKeysByType' | 'getSchemaByType'
> = {
  schemas: [],
  links: [],
  normalizedSchemasByType: {},
}

export const useSchemaStore = create<SchemasStore>()(
  devtools((set, get) => ({
    ...defaultData,
    setSchemas: (schemas: SchemaExtended[]) => {
      const normalizedSchemas = schemas.reduce((acc, schema) => {
        acc[schema.type] = schema

        return acc
      }, {} as { [type: string]: SchemaExtended })

      set({ schemas: schemas.map((i) => ({ ...i })), normalizedSchemasByType: normalizedSchemas })
    },
    setSchemaLinks: (links: SchemaLink[]) => {
      set({ links })
    },
    getPrimaryColorByType: (type: string) => {
      const schema = get().normalizedSchemasByType[type]

      return schema ? schema.primary_color : undefined
    },
    getNodeKeysByType: (type: string) => {
      const schema = get().normalizedSchemasByType[type]

      return schema ? schema.node_key : undefined
    },
    getSchemaByType: (type: string) => get().normalizedSchemasByType[type],
  })),
)
