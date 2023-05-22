import { useEffect, useState } from 'react'
import { MeshStandardMaterial, TextureLoader } from 'three'

const loader = new TextureLoader()

type materialRecord = {
  texture: THREE.Texture
  material: THREE.MeshStandardMaterial
}

const cachedMaterials: Record<string, materialRecord> = {}

const noImageTexture = loader.load('noimage.jpeg')
const noImageMaterial = new MeshStandardMaterial({ map: noImageTexture })

export const useMaterial = (url: string) => {
  const [texture, setTexture] = useState(noImageTexture)
  const [material, setMaterial] = useState(noImageMaterial)

  useEffect(() => {
    const cashPath = `${url}`

    if (cachedMaterials[cashPath]) {
      setTexture(cachedMaterials[cashPath].texture)
      setMaterial(cachedMaterials[cashPath].material)

      return
    }

    const map = loader.load(
      url,
      (txt) => {
        // on load
        const newMaterial = new MeshStandardMaterial({ map: txt })

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
        setMaterial(noImageMaterial)
      },
    )
  }, [url])

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
