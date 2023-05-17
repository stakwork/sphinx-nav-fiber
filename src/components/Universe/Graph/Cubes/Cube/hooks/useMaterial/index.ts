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
  const [showTexture, setShowTexture] = useState(false)
  // const { camera } = useThree()

  // useEffect(() => {
  //   console.log('camera', camera.position)
  // }, [camera.position.x, camera.position.y, camera.position.z])

  useEffect(() => {
    const cashPath = `${url}`

    if (cachedMaterials[cashPath]) {
      cachedMaterials[cashPath].texture.dispose()
      setTexture(cachedMaterials[cashPath].texture)
      return
    }

    const map = loader.load(url, undefined, undefined, () => {
      // load error
      try {
        setTexture(noImageTexture)
        // eslint-disable-next-line no-empty
      } catch (e) {}
    })

    cachedMaterials[cashPath] = {
      texture: map,
    }

    setTexture(map)

    return function cleanup() {
      texture.dispose()
    }
  }, [url])

  useEffect(() => {
    return function cleanup() {
      texture.dispose()
    }
  }, [texture])

  return texture
}
