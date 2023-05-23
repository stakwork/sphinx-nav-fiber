import { BoxGeometry } from 'three'
import { NodeExtended } from '~/types'

export const boxGeometry = new BoxGeometry(10, 10, 10)

export const isMainTopic = (node: NodeExtended) => node.node_type === 'topic' && (node.scale || 1) > 5

export const meshRenderLimit = 500

export const meshRenderRadius = 600
