import { useMemo } from 'react'
import * as THREE from 'three'
import { MeshStandardMaterial } from 'three'

const loader = new THREE.TextureLoader()

const cachedMaterials: Record<string, THREE.MeshStandardMaterial> = {}

export const useMaterial = (url: string, highlight: boolean, highlightColor = 'green') => {
  const material = useMemo(() => {
    const cashPath = `${url}${String(highlight)}${highlightColor}`

    if (cachedMaterials[cashPath]) {
      return cachedMaterials[cashPath]
    }

    const map = loader.load(url)

    const materialProp = highlight
      ? {
          emissive: highlightColor,
          emissiveIntensity: 20,
          map,
          opacity: 0.5,
          toneMapped: false,
          transparent: true,
        }
      : { map }

    const m = new MeshStandardMaterial(materialProp)

    cachedMaterials[cashPath] = m

    return m
  }, [url, highlight, highlightColor])

  return material
}
