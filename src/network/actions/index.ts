import { api } from '~/network/api'
import { ActionDetail } from '~/types'
import { BountyPayload } from '../postBounty'

interface ActionDetailsResponse {
  actions: ActionDetail[]
  status: 'success' | 'error'
}

interface NodeActionPayload {
  ref_id: string
  action_name: string
  pubkey: string
  bounty: BountyPayload | null
}

export async function getActionDetails(actionNames: string[]) {
  const response = api.get<ActionDetailsResponse>(`/action?action_name=${JSON.stringify(actionNames)}`)

  return response
}

export const postNodeAction = async (payload: NodeActionPayload) => {
  const response = await api.post('/action', JSON.stringify(payload))

  return response
}
