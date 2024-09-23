import { api } from '~/network/api'

type BountyPayload = {
  type: string
  amount: number
  workspace_uuid: string
  jwt_token: string | null
  ref_id: string
  node_data: {
    name: string
  }
}

export const postBountyData = async (payload: BountyPayload) => {
  const response = await api.post('/bounty', JSON.stringify(payload))

  return response
}
