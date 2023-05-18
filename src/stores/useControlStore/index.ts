import create from 'zustand'

type ControlStore = {
  isUserDragging: boolean
  isUserScrolling: boolean
  userMovedCamera: boolean
  isUserScrollingOnHtmlPanel: boolean
  setIsUserDragging: (isUserDragging: boolean) => void
  setIsUserScrolling: (isUserScrolling: boolean) => void
  setUserMovedCamera: (userMovedCamera: boolean) => void
  setIsUserScrollingOnHtmlPanel: (isUserScrollingOnHtmlPanel: boolean) => void
}

const defaultData: Omit<
  ControlStore,
  'setIsUserDragging' | 'setIsUserScrolling' | 'setUserMovedCamera' | 'setIsUserScrollingOnHtmlPanel'
> = {
  isUserDragging: false,
  isUserScrolling: false,
  userMovedCamera: false,
  isUserScrollingOnHtmlPanel: false,
}

export const useControlStore = create<ControlStore>((set, get) => ({
  ...defaultData,
  setIsUserDragging: (isUserDragging) => set({ isUserDragging }),
  setIsUserScrolling: (isUserScrolling) => set({ isUserScrolling }),
  setUserMovedCamera: (userMovedCamera) => set({ userMovedCamera }),
  setIsUserScrollingOnHtmlPanel: (isUserScrollingOnHtmlPanel) => set({ isUserScrollingOnHtmlPanel }),
}))
