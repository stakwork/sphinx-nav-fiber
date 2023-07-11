import { NodeExtended } from '~/types'

export const getNodeSearchableName = (node: NodeExtended) => {
  switch (node.node_type) {
    case 'show':
      return node.show_title
    case 'episode':
      return node.show_title
    case 'clip':
      return node.show_title
    case 'guest':
      return node.name
    default:
      return node.name
  }
}

export const noBoostNodeTypes = ['topic']
