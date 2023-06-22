import { Mesh } from 'three'
import create from 'zustand'

type DataStore = {
  earthMesh: React.MutableRefObject<Mesh> | null
  setEarthMesh: (earthMesh: React.MutableRefObject<Mesh> | null) => void
}

const defaultData: Omit<DataStore, 'setEarthMesh'> = {
  earthMesh: null,
}

export const useRefStore = create<DataStore>((set, get) => ({
  ...defaultData,
  setEarthMesh: (earthMesh) => set({ earthMesh }),
}))
