import { MeshStandardMaterial } from 'three'
import { smoothness } from '../Cube/constants'

const materialOptions = { ...smoothness }

export const blurryMaterial = new MeshStandardMaterial(materialOptions)

export const maxInstances = 2000
