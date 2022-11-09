import { useMemo } from "react";
import * as THREE from "three";
import { MeshStandardMaterial } from "three";

const loader = new THREE.TextureLoader();

const cachedMaterials: Record<string, THREE.MeshStandardMaterial> = {};

export const useMaterial = (url: string) => {
  const material = useMemo(() => {
    if (cachedMaterials[url]) {
      return cachedMaterials[url];
    }

    const map = loader.load(url);

    const m = new MeshStandardMaterial({ map });

    cachedMaterials[url] = m;

    return m;
  }, [url]);

  return material;
};
