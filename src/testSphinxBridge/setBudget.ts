import { getCurrentUser } from './helper'

export function setBudget() {
  const user = getCurrentUser()

  /* eslint-disable  @typescript-eslint/no-explicit-any */
  const budget = (window as any).CYPRESS_USER_BUDGET

  if (!user) {
    return null
  }

  return { budget: budget || 0, pubkey: user.pubkey }
}
