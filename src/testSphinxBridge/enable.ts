import { getCurrentUser } from './helper'

export function enableSphinx() {
  const user = getCurrentUser()

  if (!user) {
    return null
  }

  return { budget: 0, pubkey: user.pubkey }
}
