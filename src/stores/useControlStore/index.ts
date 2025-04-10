import { CameraControls } from '@react-three/drei'
import { create } from 'zustand'

type ControlStore = {
  isUserDragging: boolean
  isUserScrolling: boolean
  userMovedCamera: boolean
  isUserScrollingOnHtmlPanel: boolean
  cameraControlsRef: CameraControls | null
  setIsUserDragging: (isUserDragging: boolean) => void
  setIsUserScrolling: (isUserScrolling: boolean) => void
  setUserMovedCamera: (userMovedCamera: boolean) => void
  setIsUserScrollingOnHtmlPanel: (isUserScrollingOnHtmlPanel: boolean) => void
  setCameraControlsRef: (cameraControlsRef: CameraControls) => void
}

const defaultData: Omit<
  ControlStore,
  | 'setIsUserDragging'
  | 'setIsUserScrolling'
  | 'setUserMovedCamera'
  | 'setIsUserScrollingOnHtmlPanel'
  | 'setCameraControlsRef'
> = {
  isUserDragging: false,
  isUserScrolling: false,
  userMovedCamera: false,
  isUserScrollingOnHtmlPanel: false,
  cameraControlsRef: null,
}

export const useControlStore = create<ControlStore>((set) => ({
  ...defaultData,
  setIsUserDragging: (isUserDragging) => set({ isUserDragging }),
  setIsUserScrolling: (isUserScrolling) => set({ isUserScrolling }),
  setUserMovedCamera: (userMovedCamera) => set({ userMovedCamera }),
  setIsUserScrollingOnHtmlPanel: (isUserScrollingOnHtmlPanel) => set({ isUserScrollingOnHtmlPanel }),
  setCameraControlsRef: (cameraControlsRef) => set({ cameraControlsRef }),
}))
