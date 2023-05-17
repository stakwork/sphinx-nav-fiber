import { useEffect, useState } from 'react'
import { TextureLoader } from 'three'

const loader = new TextureLoader()

type materialRecord = {
  texture: THREE.Texture
}

const cachedMaterials: Record<string, materialRecord> = {}

const noImageTexture = loader.load('noimage.jpeg')

export const useTexture = (url: string) => {
  const [texture, setTexture] = useState(noImageTexture)

  useEffect(() => {
    const cashPath = `${url}`

    if (cachedMaterials[cashPath]) {
      setTexture(cachedMaterials[cashPath].texture)
      return
    }

    const map = loader.load(url, undefined, undefined, () => {
      // load error
      try {
        cachedMaterials[cashPath].texture = noImageTexture
        setTexture(noImageTexture)
        // eslint-disable-next-line no-empty
      } catch (e) {}
    })

    if (map) {
      cachedMaterials[cashPath] = {
        texture: map,
      }

      setTexture(map)
    } else {
      cachedMaterials[cashPath] = {
        texture: noImageTexture,
      }

      setTexture(noImageTexture)
    }
  }, [url])

  useEffect(() => {
    return function cleanup() {
      texture.dispose()
    }
  }, [texture])

  return texture
}
