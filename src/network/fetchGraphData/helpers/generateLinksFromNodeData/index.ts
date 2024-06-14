// import { Vector3 } from 'three'
// import { NODE_RELATIVE_HIGHLIGHT_COLORS } from '~/constants'
// import { Guests, Link, NodeExtended } from '~/types'

// const getSegmentColor = (aType: string, bType: string) => {
//   if (aType === 'topic' || bType === 'topic') {
//     return NODE_RELATIVE_HIGHLIGHT_COLORS.topics.segmentColor
//   }

//   if (aType === 'guest' || bType === 'guest') {
//     return NODE_RELATIVE_HIGHLIGHT_COLORS.guests.segmentColor
//   }

//   return NODE_RELATIVE_HIGHLIGHT_COLORS.children.segmentColor
// }

// export const generateLinksFromNodeData = (
//   nodes: NodeExtended[],
//   childLinksOnlyVisibleOnSelect: boolean,
//   guestLinksOnlyVisibleOnSelect: boolean,
// ) => {
//   const links: Link[] = []

//   // do links
//   nodes.forEach((node) => {
//     const { children, guests } = node

//     children?.forEach((childRefId: string) => {
//       if (node.ref_id) {
//         const childNode = nodes.find((f) => f.ref_id === childRefId) || null

//         if (!childNode) {
//           return
//         }

//         const sourcePosition = new Vector3(node.x || 0, node.y || 0, node.z || 0)
//         const targetPosition = new Vector3(childNode?.x || 0, childNode?.y || 0, childNode?.z || 0)

//         links.push({
//           onlyVisibleOnSelect: childLinksOnlyVisibleOnSelect,
//           color: getSegmentColor(node.node_type, childNode?.node_type || ''),
//           source: node.ref_id,
//           sourceRef: node.ref_id,
//           sourcePosition,
//           target: childRefId,
//           targetRef: childRefId,
//           targetPosition,
//         })
//       }
//     })

//     guests?.forEach((guest: string | Guests | null) => {
//       if (guest && typeof guest !== 'string' && node.ref_id) {
//         const guestNode = nodes.find((f) => f.ref_id === guest?.ref_id) || null

//         if (!guestNode) {
//           return
//         }

//         const sourcePosition = new Vector3(node.x || 0, node.y || 0, node.z || 0)
//         const targetPosition = new Vector3(guestNode?.x || 0, guestNode?.y || 0, guestNode?.z || 0)

//         links.push({
//           onlyVisibleOnSelect: guestLinksOnlyVisibleOnSelect,
//           color: getSegmentColor(node.node_type, 'guest'),
//           source: node.ref_id,
//           sourceRef: node.ref_id,
//           sourcePosition,
//           target: guest?.ref_id,
//           targetRef: guest?.ref_id,
//           targetPosition,
//         })
//       }
//     })
//   })

//   return links
// }

export {}
