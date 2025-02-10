import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { SchemaLink } from '~/network/fetchSourcesData'
import { ActionDetail } from '~/types'

type SchemasStore = {
  schemas: SchemaExtended[]
  links: SchemaLink[]
  normalizedSchemasByType: { [type: string]: SchemaExtended }
  selectedAction: ActionDetail | null
  setSchemas: (schemas: SchemaExtended[]) => void
  setSchemaLinks: (schema: SchemaLink[]) => void
  getPrimaryColorByType: (type: string) => string | undefined
  getNodeKeysByType: (type: string) => string | undefined
  getIndexByType: (type: string) => string | undefined
  getSchemaByType: (type: string) => SchemaExtended | undefined
  setSelectedActionDetail: (action: ActionDetail) => void
  getSelectedActionDetail: () => ActionDetail | null
  removeSelectedActionDetail: () => void
}

const defaultData: Omit<
  SchemasStore,
  | 'setSchemas'
  | 'setSchemaLinks'
  | 'getPrimaryColorByType'
  | 'getNodeKeysByType'
  | 'getSchemaByType'
  | 'getIndexByType'
  | 'setSelectedActionDetail'
  | 'getSelectedActionDetail'
  | 'removeSelectedActionDetail'
> = {
  schemas: [],
  links: [],
  normalizedSchemasByType: {},
  selectedAction: null,
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
    getIndexByType: (type: string) => {
      const schema = get().normalizedSchemasByType[type]

      return schema ? schema.index : 'name'
    },
    getNodeKeysByType: (type: string) => {
      const schema = get().normalizedSchemasByType[type]

      return schema ? schema.index || schema.node_key : undefined
    },
    getSchemaByType: (type: string) => get().normalizedSchemasByType[type],
    setSelectedActionDetail: (action: ActionDetail) => {
      set({ selectedAction: action })
    },
    getSelectedActionDetail: () => get().selectedAction,
    removeSelectedActionDetail: () => {
      set({ selectedAction: null })
    },
  })),
)
