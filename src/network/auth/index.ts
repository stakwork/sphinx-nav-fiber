import { api } from '~/network/api'
import { AuthRequest, IsAdminResponse } from '~/types'

export async function getIsAdmin({ message, tribeHost, tribeUuid, signature }: AuthRequest) {
  const response = api.get<IsAdminResponse>(
    `/isAdmin?msg=${message}&sig=${signature}&tribe_host=${tribeHost}&uuid=${tribeUuid}`,
  )

  return response
}
