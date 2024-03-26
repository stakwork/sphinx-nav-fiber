import { getCurrentUser } from './helper'

export async function saveLsat(invoice: string, macaroon: string, host: string) {
  try {
    const user = getCurrentUser()

    if (user) {
      const result = await fetch(`${user.external_ip}/lsats`, {
        method: 'POST',
        body: JSON.stringify({ paymentRequest: invoice, macaroon, issuer: host }),
        headers: { 'x-user-token': user.authToken, 'Content-Type': 'application/json' },
      })

      const res = await result.json()

      if (res.success) {
        const { lsat } = res.response

        return {
          lsat,
        }
      }

      return {
        lsat: null,
      }
    }

    return null
  } catch (error) {
    console.log(JSON.stringify(error))

    return null
  }
}
