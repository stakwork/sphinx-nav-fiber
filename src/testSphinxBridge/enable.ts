import { getCurrentUser } from './helper'

export function enableSphinx() {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const user = getCurrentUser()

  if (!user) {
    return null
  }

  return { budget: 0, pubkey: user.pubkey }
}
