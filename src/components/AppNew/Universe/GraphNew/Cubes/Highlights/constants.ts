import { Color, MeshStandardMaterial, Vector3 } from 'three'

import { NodeExtendedNew } from '~/network/fetchGraphDataNew/types'

export type HighlightProps = {
  scale: number
  position: Vector3
  userData: NodeExtendedNew
  color: string
}

export type HighlightRecords = Record<string, HighlightProps[]>

export type HighlightParentProps = {
  highlights: HighlightProps[]
}

export const highlightMaterial = new MeshStandardMaterial({
  emissive: new Color('green'),
  emissiveIntensity: 20,
  opacity: 0.3,
  toneMapped: false,
  transparent: true,
})
