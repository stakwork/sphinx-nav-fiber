import { TopUpLsatResponse } from '~/types'
import { api } from '~/network/api'

export async function topUpLsat(macaroon: string, amount: number) {
  return api.post<string, TopUpLsatResponse>('/top_up_lsat', JSON.stringify({ macaroon, amount }))
}
