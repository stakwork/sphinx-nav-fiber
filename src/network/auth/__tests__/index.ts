import { getIsAdmin } from '..'
import { api } from '../../api'

describe('test extracting uuid and tribe host', () => {
  // Should make a GET request to the correct endpoint with the correct query parameters
  it('should make a GET request to the correct endpoint with the correct query parameters', () => {
    const mockApiGet = jest.spyOn(api, 'get')

    const expectedEndpoint = `/isAdmin`

    mockApiGet.mockReturnValue(Promise.resolve({ isAdmin: false }))

    getIsAdmin()

    expect(mockApiGet).toHaveBeenCalledWith(expectedEndpoint)
  })
})
