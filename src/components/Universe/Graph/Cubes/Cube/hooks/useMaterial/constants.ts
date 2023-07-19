import { MeshBasicMaterial, MeshStandardMaterial, TextureLoader } from 'three'
import { smoothness } from '../../constants'

export const loader = new TextureLoader()

export const noImageTexture = loader.load('noimage.jpeg')

export const noImageMaterial = new MeshStandardMaterial({
  ...smoothness,
  map: noImageTexture,
})

export const noImageMaterialBasic = new MeshBasicMaterial({
  map: noImageTexture,
})

export const transparentValue = 0.4

export const noImageTransparentMaterial = new MeshStandardMaterial({
  ...smoothness,
  map: noImageTexture,
  transparent: true,
  opacity: transparentValue,
})
