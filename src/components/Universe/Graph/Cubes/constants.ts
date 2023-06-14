import { BoxGeometry } from 'three'
import { NodeExtended } from '~/types'

export const boxGeometry = new BoxGeometry(10, 10, 10)

export const isMainTopic = (node: NodeExtended) => node.node_type === 'topic' && (node.scale || 1) > 5

export const meshRenderLimit = 500

export const meshRenderRadius = 600

export const getNodeColorByType = (nodeType: string, returnString?: boolean) => {
  let color: string = '0x32cd32'

  switch (nodeType) {
    case 'clip':
    case 'show':
    case 'episode':
      color = '0x32cd32'
      break
    case 'guest':
      color = '0xff94ff'
      break
    case 'topic':
      color = '0x5078f2'
      break
    default:
  }

  if (returnString) {
    return color.replace('0x', '#')
  }

  return parseInt(color, 16)
}
