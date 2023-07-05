import { Mesh } from 'three'
import create from 'zustand'

type DataStore = {
  earthRef: React.MutableRefObject<Mesh | null> | null
  setEarthRef: (earthMesh: React.MutableRefObject<Mesh | null> | null) => void
}

const defaultData: Omit<DataStore, 'setEarthRef'> = {
  earthRef: null,
}

export const useRefStore = create<DataStore>((set) => ({
  ...defaultData,
  setEarthRef: (earthRef) => set({ earthRef }),
}))
