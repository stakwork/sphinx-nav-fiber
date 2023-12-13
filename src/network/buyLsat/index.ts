import { api } from '~/network/api'

export async function buyLsat(amount: number) {
  const data = { amount }

  const response = api.post(`/buy_lsat`, JSON.stringify(data))

  return response
}
