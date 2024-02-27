import { getCurrentUser } from './helper'

export async function signMessage(message: string) {
  const user = await getCurrentUser()

  if (user) {
    const result = await fetch(`${user.external_ip}/signer/${message}`, {
      headers: { 'x-user-token': user.authToken },
    })

    return result.json()
  }

  throw new Error('Cypress User not set')
}
