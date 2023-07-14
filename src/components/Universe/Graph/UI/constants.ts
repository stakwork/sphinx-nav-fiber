import { ThreeEvent } from '@react-three/fiber'
import { Color } from 'three'

const hidePanelForNodeType = ['guest', 'topic']

export const panelIsHidden = (nodeType: string | undefined) => {
  if (!nodeType) {
    return false
  }

  return hidePanelForNodeType.includes(nodeType)
}

export const stopBubbling = (e: ThreeEvent<MouseEvent>) => {
  e.stopPropagation()
}

export const setPointerHoverStyle = (hovered: boolean) => {
  document.body.style.cursor = hovered ? 'pointer' : 'auto'
}

export const white = new Color('white')
