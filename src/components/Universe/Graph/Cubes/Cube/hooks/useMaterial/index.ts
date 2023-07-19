import { useEffect, useState } from 'react'
import { MeshBasicMaterial, MeshStandardMaterial, Texture } from 'three'
import { smoothness } from '../../constants'
import {
  loader,
  noImageMaterial,
  noImageMaterialBasic,
  noImageTexture,
  noImageTransparentMaterial,
  transparentValue,
} from './constants'

type materialRecord = {
  texture: Texture
  material: MeshStandardMaterial | MeshBasicMaterial
}

const cachedMaterials: Record<string, materialRecord> = {}

type Options = {
  transparent?: boolean
  material?: string
}

export const useMaterial = (url: string, key: string, options: Options) => {
  const { transparent, material: materialOption } = options

  const [texture, setTexture] = useState(noImageTexture)

  const [material, setMaterial] = useState(materialOption === 'basic' ? noImageMaterialBasic : noImageMaterial)

  useEffect(() => {
    const cashPath = `${url}-${key}${transparent && '-transparent'}`

    if (cachedMaterials[cashPath]) {
      setTexture(cachedMaterials[cashPath].texture)
      setMaterial(cachedMaterials[cashPath].material)

      return
    }

    loader.load(
      url,
      (loadedTexture) => {
        const M = materialOption === 'basic' ? MeshBasicMaterial : MeshStandardMaterial
        // on load

        const added = materialOption === 'basic' ? { metalness: 0, roughness: 1 } : smoothness

        const newMaterial = new M({
          map: loadedTexture,
          transparent,
          opacity: transparent ? transparentValue : 1,
          ...added,
        })

        cachedMaterials[cashPath] = {
          texture: loadedTexture,
          material: newMaterial,
        }

        setTexture(loadedTexture)
        setMaterial(newMaterial)
      },
      undefined,
      () => {
        // on error, set blank meterial
        setTexture(noImageTexture)

        if (transparent) {
          setMaterial(noImageTransparentMaterial)
        } else {
          setMaterial(noImageMaterial)
        }
      },
    )
  }, [url, transparent, materialOption, key])

  useEffect(
    () =>
      function cleanup() {
        texture.dispose()
        material.dispose()
      },
    [texture, material],
  )

  return material
}
