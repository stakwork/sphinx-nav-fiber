import { create } from 'zustand'
import { Schema } from '~/network/fetchSourcesData'

type SchemasStore = {
  schemas: Schema[]
  setSchemas: (schema: Schema[]) => void
}

const defaultData: Omit<SchemasStore, 'setSchemas'> = {
  schemas: [],
}

export const useSchemaStore = create<SchemasStore>((set) => ({
  ...defaultData,
  setSchemas: (schemas: Schema[]) => {
    set({ schemas })
  },
}))
