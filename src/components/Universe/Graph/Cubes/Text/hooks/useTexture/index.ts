import { useEffect, useState } from 'react'
import * as THREE from 'three' // Use * as THREE for consistency
import { loader } from './constants'

type MaterialRecord = {
  texture: THREE.Texture
  material: THREE.MeshStandardMaterial
}

const cachedMaterials: Record<string, MaterialRecord> = {}

export const useTexture = (url: string) => {
  const [texture, setTexture] = useState<THREE.Texture | null>(null)

  useEffect(() => {
    if (!url) {
      setTexture(null)

      return
    }

    const cachePath = url

    // Check if texture is already cached
    if (cachedMaterials[cachePath]?.texture) {
      setTexture(cachedMaterials[cachePath].texture)

      return
    }

    // Load texture and cache it
    loader.load(
      url,
      (loadedTexture) => {
        cachedMaterials[cachePath] = {
          texture: loadedTexture,
          material: new THREE.MeshStandardMaterial({ map: loadedTexture }),
        }

        setTexture(loadedTexture)
      },
      undefined,
      () => {
        setTexture(null) // Handle loading error
      },
    )
  }, [url])

  useEffect(
    () => () => {
      if (texture) {
        // Avoid disposing of cached textures
        const isCached = Object.values(cachedMaterials).some((entry) => entry.texture === texture)

        if (!isCached) {
          texture.dispose()
        }
      }
    },
    [texture],
  )

  return { texture }
}
