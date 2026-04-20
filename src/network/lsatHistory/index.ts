import { LsatHistoryResponse } from '~/types'
import { api } from '~/network/api'

export async function getLsatHistory(lsatToken: string) {
  return api.get<LsatHistoryResponse>('/lsat_history', { Authorization: lsatToken })
}
