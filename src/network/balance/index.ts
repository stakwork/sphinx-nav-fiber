import { api } from '~/network/api'
import { BalanceResponse } from '~/types'

export async function getBalance(lsatToken: string) {
  const response = api.get<BalanceResponse>(`/balance`, {
    Authorization: lsatToken,
  })

  return response
}
