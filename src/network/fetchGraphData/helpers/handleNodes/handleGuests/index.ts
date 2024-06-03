import { Guests, NodeExtended } from '~/types'
import { maxScale } from '../../../const'
import { GuestMapChild } from '../../../types'

export const generateGuestsMap = (
  currentGuest: Guests,
  id: string,
  guestMap: Record<string, GuestMapChild> = {},
): Record<string, GuestMapChild> => {
  let updatedGuestMap = { ...guestMap }

  if (currentGuest.name && currentGuest.ref_id && id) {
    updatedGuestMap = {
      ...updatedGuestMap,
      [currentGuest.ref_id]: {
        children: [...(updatedGuestMap[currentGuest.ref_id]?.children || []), id],
        imageUrl: currentGuest.profile_picture || '',
        name: currentGuest.name,
        twitterHandle: currentGuest.twitter_handle,
      },
    }
  }

  return updatedGuestMap // Return the new variable
}

export function generateGuestNodesFromMap(
  guestMap: Record<string, GuestMapChild>,
  doNodeCallback: (node: NodeExtended) => void,
) {
  Object.entries(guestMap).forEach(([guest, guestValue], index) => {
    const guestChildren = guestValue.children
    const scale = guestChildren.length * 2 > maxScale ? maxScale : guestChildren.length * 2
    const guestNodeId = guest || `guestnode_${index}`

    const guestNode: NodeExtended = {
      ...guestValue,
      x: 0,
      y: 0,
      z: 0,
      edge_count: 0,
      colors: ['#000'],
      id: guestNodeId,
      image_url: guestValue.imageUrl,
      label: guestValue.name,
      name: guestValue.name,
      node_type: 'guest',
      ref_id: guestNodeId,
      scale,
      show_title: guestValue.name,
      text: guestValue.twitterHandle,
      type: 'guest',
      weight: 0,
    }

    doNodeCallback(guestNode)
  })
}
