import { getCurrentUser } from './helper'

export async function getLsatSphinx(host: string) {
  try {
    const user = await getCurrentUser()

    if (user) {
      const result = await fetch(`${user.external_ip}/active_lsat?issuer=${host}`, {
        headers: { 'x-user-token': user.authToken },
      })

      const res = await result.json()

      if (res.success) {
        const { lsat } = res.response

        return {
          paymentRequest: lsat.paymentRequest,
          macaroon: lsat.macaroon,
          issuer: lsat.issuer,
          identifier: lsat.identifier,
          preimage: lsat.preimage,
          paths: lsat.paths,
          status: lsat.status,
          success: false,
        }
      }

      return {
        paymentRequest: '',
        macaroon: '',
        issuer: '',
        identifier: '',
        preimage: '',
        paths: '',
        status: '',
        success: false,
      }
    }

    return null
  } catch (error) {
    console.log(JSON.stringify(error))

    return null
  }
}
