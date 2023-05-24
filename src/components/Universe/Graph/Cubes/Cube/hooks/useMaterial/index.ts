import { useEffect, useState } from 'react'
import { MeshStandardMaterial, TextureLoader } from 'three'

const loader = new TextureLoader()

type materialRecord = {
  texture: THREE.Texture
  material: THREE.MeshStandardMaterial
}

const cachedMaterials: Record<string, materialRecord> = {}
const transparentValue = 0.2
const noImageTexture = loader.load('noimage.jpeg')
const noImageMaterial = new MeshStandardMaterial({ map: noImageTexture })
const noImageTransparentMaterial = new MeshStandardMaterial({
  map: noImageTexture,
  transparent: true,
  opacity: transparentValue,
})

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

    const map = loader.load(
      url,
      (txt) => {
        // on load
        const newMaterial = new MeshStandardMaterial({
          map: txt,
          transparent,
          opacity: transparent ? transparentValue : 1,
        })

        cachedMaterials[cashPath] = {
          texture: map,
          material: newMaterial,
        }

        setTexture(map)
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
