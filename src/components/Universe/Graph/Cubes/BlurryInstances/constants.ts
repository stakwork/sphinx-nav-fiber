import { MeshStandardMaterial } from 'three'

const materialOptions = { color: 'lightgray', transparent: true, opacity: 0.9 }

export const blurryMaterial = new MeshStandardMaterial(materialOptions)
