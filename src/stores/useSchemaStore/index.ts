import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { SchemaExtended } from '~/components/ModalsContainer/BlueprintModal/types'
import { SchemaLink } from '~/network/fetchSourcesData'
import { ActionDetail } from '~/types'

const COLORS_PALETTE = [
  ['#D25353', '#362429'],
  ['#F468D4', '#38243C'],
  ['#C25AF3', '#302342'],
  ['#9368FB', '#2A2545'],
  ['#5E84F8', '#222B48'],
  ['#4FA7D9', '#1D3140'],
  ['#21B38A', '#1B3134'],
  ['#54AC52', '#22362A'],
  ['#96BD3F', '#2A3229'],
  ['#BA9D39', '#353124'],
  ['#E09242', '#392828'],
]

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
    setSchemas: (schemasWithoutColors: SchemaExtended[]) => {
      const schemas = schemasWithoutColors.map((i, index) => {
        const paletteColor = COLORS_PALETTE.find((colorsArray) => colorsArray[1] === i.primary_color)
        const cycleIndex = index % COLORS_PALETTE.length

        const secondaryColor = paletteColor?.[0]
          ? paletteColor[0]
          : COLORS_PALETTE[cycleIndex][0] || COLORS_PALETTE[0][0]

        return {
          ...i,
          primary_color: paletteColor ? i.primary_color : COLORS_PALETTE[cycleIndex][1] || COLORS_PALETTE[0][0],
          secondary_color: secondaryColor,
        }
      })

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
