import { api } from '~/network/api'
import { AuthRequest, IsAdminResponse } from '~/types'

export async function getIsAdmin({ message, signature }: AuthRequest) {
  const response = api.get<IsAdminResponse>(`/isAdmin?msg=${message}&sig=${signature}`)

  return response
}
