import { useEffect, useState } from 'react'
import { MeshStandardMaterial } from 'three'
import { smoothness } from '../../constants'
import { loader, noImageMaterial, noImageTexture, noImageTransparentMaterial, transparentValue } from './constants'

type materialRecord = {
  texture: THREE.Texture
  material: THREE.MeshStandardMaterial
}

const cachedMaterials: Record<string, materialRecord> = {}

export const useMaterial = (url: string, transparent: boolean) => {
  const [texture, setTexture] = useState(noImageTexture)
  const [material, setMaterial] = useState(noImageMaterial)

  useEffect(() => {
    const cashPath = `${url}${transparent && '-transparent'}`

    if (cachedMaterials[cashPath]) {
      setTexture(cachedMaterials[cashPath].texture)
      setMaterial(cachedMaterials[cashPath].material)

      return
    }

    loader.load(
      url,
      (loadedTexture) => {
        // on load
        const newMaterial = new MeshStandardMaterial({
          map: loadedTexture,
          transparent,
          opacity: transparent ? transparentValue : 1,
          ...smoothness,
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
  }, [url, transparent])

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
