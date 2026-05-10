import { MeshStandardMaterial, TextureLoader } from 'three'
import { smoothness } from '../../constants'

export const loader = new TextureLoader()

loader.setCrossOrigin('anonymous')

export const noImageTexture = loader.load('noimage.jpeg')

export const noImageMaterial = new MeshStandardMaterial({
  ...smoothness,
  map: noImageTexture,
})

export const transparentValue = 0.4

export const noImageTransparentMaterial = new MeshStandardMaterial({
  ...smoothness,
  map: noImageTexture,
  transparent: true,
  opacity: transparentValue,
})
