import { useEffect, useState } from 'react'
import { Texture } from 'three'
import { loader } from './constants'

type materialRecord = {
  texture: THREE.Texture
  material: THREE.MeshStandardMaterial
}

const cachedMaterials: Record<string, materialRecord> = {}

export const useTexture = (url: string) => {
  const [texture, setTexture] = useState<Texture | null>(null)

  useEffect(() => {
    if (!url) {
      setTexture(null)

      return
    }

    const cashPath = url

    if (cachedMaterials[cashPath]) {
      setTexture(cachedMaterials[cashPath].texture)

      return
    }

    loader.load(
      url,
      (loadedTexture) => {
        setTexture(loadedTexture)
      },
      undefined,
      () => {
        setTexture(null)
      },
    )
  }, [url])

  useEffect(
    () =>
      function cleanup() {
        if (texture) {
          texture.dispose()
        }
      },
    [texture],
  )

  return { texture }
}
