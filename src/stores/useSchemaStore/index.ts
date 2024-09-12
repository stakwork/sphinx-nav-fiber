import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { SchemaLink } from '~/network/fetchSourcesData'

type SchemasStore = {
  schemas: SchemaExtended[]
  links: SchemaLink[]
  setSchemas: (schema: SchemaExtended[]) => void
  setSchemaLinks: (schema: SchemaLink[]) => void
  getPrimaryColorByType: (type: string) => string | undefined
  getNodeKeysByType: (type: string) => string | undefined
}

const defaultData: Omit<SchemasStore, 'setSchemas' | 'setSchemaLinks' | 'getPrimaryColorByType' | 'getNodeKeysByType'> =
  {
    schemas: [],
    links: [],
  }

export const useSchemaStore = create<SchemasStore>()(
  devtools((set, get) => ({
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
    getNodeKeysByType: (type: string) => {
      const schema = get().schemas.find((schem) => schem.type === type)

      return schema ? schema.node_key : undefined
    },
  })),
)
