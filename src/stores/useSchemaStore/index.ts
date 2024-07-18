import { create } from 'zustand'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { SchemaLink } from '~/network/fetchSourcesData'

type SchemasStore = {
  schemas: SchemaExtended[]
  links: SchemaLink[]
  setSchemas: (schema: SchemaExtended[]) => void
  setSchemaLinks: (schema: SchemaLink[]) => void
  getPrimaryColorByType: (type: string) => string | undefined
}

const defaultData: Omit<SchemasStore, 'setSchemas' | 'setSchemaLinks' | 'getPrimaryColorByType'> = {
  schemas: [],
  links: [],
}

export const useSchemaStore = create<SchemasStore>((set, get) => ({
  ...defaultData,
  setSchemas: (schemas: SchemaExtended[]) => {
    set({ schemas: schemas.map((i) => ({ ...i })) })
  },
  setSchemaLinks: (links: SchemaLink[]) => {
    set({ links })
  },
  getPrimaryColorByType: (type: string) => {
    const schema = get().schemas.find((schem) => schem.type === type)

    return schema ? schema.primary_color : undefined
  },
}))
