import { create } from 'zustand'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { SchemaLink } from '~/network/fetchSourcesData'

type SchemasStore = {
  schemas: SchemaExtended[]
  links: SchemaLink[]
  setSchemas: (schema: SchemaExtended[]) => void
  setSchemaLinks: (schema: SchemaLink[]) => void
}

const defaultData: Omit<SchemasStore, 'setSchemas' | 'setSchemaLinks'> = {
  schemas: [],
  links: [],
}

export const useSchemaStore = create<SchemasStore>((set) => ({
  ...defaultData,
  setSchemas: (schemas: SchemaExtended[]) => {
    set({ schemas: schemas.map((i) => ({ ...i, ref_id: i?.attributes?.ref_id || '' })) })
  },
  setSchemaLinks: (links: SchemaLink[]) => {
    set({ links })
  },
}))
