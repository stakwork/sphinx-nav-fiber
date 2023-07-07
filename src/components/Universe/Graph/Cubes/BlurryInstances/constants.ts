import { MeshStandardMaterial } from 'three'
import { smoothness } from '../Cube/constants'

const materialOptions = { ...smoothness}

export const blurryMaterial = new MeshStandardMaterial(materialOptions)
