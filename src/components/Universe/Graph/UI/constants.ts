import { ThreeEvent } from '@react-three/fiber'

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
