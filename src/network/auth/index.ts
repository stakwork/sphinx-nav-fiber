import { api } from '~/network/api'
import { IsAdminResponse } from '~/types'

export async function getIsAdmin() {
  const response = api.get<IsAdminResponse>(`/isAdmin`)

  return response
}
