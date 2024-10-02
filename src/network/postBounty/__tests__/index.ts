import { getTribeUserDetails, getWorkspace, postBountyData } from '..'
import { TRIBE_BASE_URL } from '../../../utils/constants/index'
import * as requestModule from '../../api'
import { api } from '../../api'

// Successfully retrieves user details with a valid pubkey
it('should return user details when given a valid pubkey', async () => {
  const mockPubkey = 'validPubkey123'

  const mockResponse = {
    id: 1,
    uuid: 'uuid-123',
    unique_name: 'uniqueName',
    owner_alias: 'ownerAlias',
  }

  const requestSpy = jest.spyOn(requestModule, 'request').mockResolvedValue(mockResponse)

  const result = await getTribeUserDetails(mockPubkey)

  expect(result).toEqual(mockResponse)

  expect(requestSpy).toHaveBeenCalledWith(`${TRIBE_BASE_URL}/person/${mockPubkey}`, {
    headers: {
      'Content-Type': 'application/json',
    },
    method: 'GET',
  })
})

// Successfully retrieves a list of workspaces for a valid user ID
it('should return a list of workspaces when given a valid user ID', async () => {
  const mockResponse = [
    { name: 'Workspace1', uuid: '123' },
    { name: 'Workspace2', uuid: '456' },
  ]

  const requestSyp = jest.spyOn(requestModule, 'request').mockResolvedValue(mockResponse)

  const result = await getWorkspace(1)

  expect(result).toEqual(mockResponse)

  expect(requestSyp).toHaveBeenCalledWith(`${TRIBE_BASE_URL}/workspaces/user/1`, {
    headers: { 'Content-Type': 'application/json' },
    method: 'GET',
  })
})

// Successfully posts a valid BountyPayload and receives a positive response
it('should post valid BountyPayload and receive positive response', async () => {
  const payload = {
    type: 'bug',
    amount: 100,
    workspace_uuid: '1234-5678',
    jwt_token: 'valid_token',
    ref_id: 'ref123',
    node_data: {},
  }

  const mockResponse = { status: 200, data: { success: true } }

  jest.spyOn(api, 'post').mockResolvedValue(mockResponse)

  const response = await postBountyData(payload)

  expect(api.post).toHaveBeenCalledWith('/bounty', JSON.stringify(payload))

  expect(response).toEqual(mockResponse)
})
