import { api } from '~/network/api'

export async function topUpConfirm(paymentHash: string, macaroon: string) {
  return api.post('/top_up_confirm', JSON.stringify({ payment_hash: paymentHash, macaroon }))
}
