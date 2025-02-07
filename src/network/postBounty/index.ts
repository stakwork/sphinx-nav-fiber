import { api, request } from '~/network/api'
import { TRIBE_BASE_URL } from '~/utils/constants'

export type BountyPayload = {
  type: string
  amount: number
  workspace_uuid: string
  jwt_token: string | null
  ref_id: string
  node_data: {
    [key: string]: never | undefined
  }
}

interface TribeUserDetails {
  id: number
  uuid: string
  unique_name: string
  owner_alias: string
}

interface TribeWorkspace {
  name: string
  uuid: string
}

export const postBountyData = async (payload: BountyPayload) => {
  const response = await api.post('/bounty', JSON.stringify(payload))

  return response
}

export const getTribeUserDetails = async (pubkey: string) => {
  const response = await request<TribeUserDetails>(`${TRIBE_BASE_URL}/person/${pubkey}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  return response
}

export const getWorkspace = async (id: number) => {
  const response = await request<TribeWorkspace[]>(`${TRIBE_BASE_URL}/workspaces/user/${id}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })

  return response
}
