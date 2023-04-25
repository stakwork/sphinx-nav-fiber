import create from "zustand";

export const useControlStore = create(() => ({
  isUserDragging: false,
  isUserScrolling: false,
  userMovedCamera: false
}));
