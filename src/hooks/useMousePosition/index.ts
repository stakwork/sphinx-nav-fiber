import { createUseGesture, moveAction, Vector2 } from '@use-gesture/react'
import { useState } from 'react'
import { MENU_WIDTH } from '~/components/App/SideBar'
import { useAppStore } from '~/stores/useAppStore'

const useGesture = createUseGesture([moveAction])

export const useMousePosition = () => {
  const sidebarIsOpen = useAppStore((s) => s.sidebarIsOpen)

  const [pointer, setPointer] = useState<Vector2>([0, 0])

  useGesture(
    {
      onMove: ({ xy: [clientX, clientY], target }) => {
        const canvasWidth = (target as HTMLCanvasElement).offsetWidth || 0

        const x = ((clientX - (sidebarIsOpen ? MENU_WIDTH : 0)) / canvasWidth) * 2 - 1

        const y = -(clientY / window.innerHeight) * 2 + 1

        setPointer([x, y])
      },
    },
    {
      target: document.getElementById('universe-canvas') || undefined,
    },
  )

  return pointer
}
