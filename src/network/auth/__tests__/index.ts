import { getIsAdmin } from '..'
import { api } from '../../api'

describe('test extracting uuid and tribe host', () => {
  // Should make a GET request to the correct endpoint with the correct query parameters
  it('should make a GET request to the correct endpoint with the correct query parameters', () => {
    const mockApiGet = jest.spyOn(api, 'get')

    const authRequest = {
      message: 'test message',
      tribeHost: 'test tribe host',
      tribeUuid: 'test tribe uuid',
      signature: 'test signature',
    }

    const expectedEndpoint = `/isAdmin?msg=${authRequest.message}&sig=${authRequest.signature}&tribe_host=${authRequest.tribeHost}&uuid=${authRequest.tribeUuid}`

    mockApiGet.mockReturnValue(Promise.resolve({ isAdmin: false }))

    getIsAdmin(authRequest)

    expect(mockApiGet).toHaveBeenCalledWith(expectedEndpoint)
  })
})
