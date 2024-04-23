import { create } from 'zustand'
import { Schema, SchemaLink } from '~/network/fetchSourcesData'

type SchemasStore = {
  schemas: Schema[]
  links: SchemaLink[]
  setSchemas: (schema: Schema[]) => void
  setSchemaLinks: (schema: SchemaLink[]) => void
}

const defaultData: Omit<SchemasStore, 'setSchemas' | 'setSchemaLinks'> = {
  schemas: [],
  links: [],
}

export const useSchemaStore = create<SchemasStore>((set) => ({
  ...defaultData,
  setSchemas: (schemas: Schema[]) => {
    set({ schemas })
  },
  setSchemaLinks: (links: SchemaLink[]) => {
    set({ links })
  },
}))
