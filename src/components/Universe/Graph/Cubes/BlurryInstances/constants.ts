import { MeshStandardMaterial } from 'three'
import { smoothness } from '../Cube/hooks/useMaterial'

const materialOptions = { ...smoothness}

export const blurryMaterial = new MeshStandardMaterial(materialOptions)
