import { getSignedMessageFromRelay } from '~/utils'
import { API_URL } from '~/utils/apiUrlFromSwarmHost'

const request = async <Res>(url: string, config?: RequestInit): Promise<Res> => {
  const admin = localStorage.getItem('admin')

  let updatedUrl = url

  if (admin) {
    const newUrl = new URL(url)

    const existingParams = new URLSearchParams(newUrl.search)

    if (!existingParams.has('sig') && !existingParams.has('msg')) {
      const adminAuth = await getSignedMessageFromRelay()

      existingParams.append('sig', adminAuth.signature)
      existingParams.append('msg', adminAuth.message)

      newUrl.search = existingParams.toString()

      updatedUrl = newUrl.toString()
    }
  }

  const response = await fetch(updatedUrl, config)

  if (!response.ok) {
    throw response
  }

  return response.json()
}

export const api = {
  delete: <Res>(endpoint: string, headers?: RequestInit['headers']) =>
    request<Res>(`${API_URL}${endpoint}`, {
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      method: 'DELETE',
    }),
  get: <Res>(endpoint: string, headers?: RequestInit['headers']) =>
    request<Res>(`${API_URL}${endpoint}`, headers ? { headers } : undefined),
  post: <TBody extends RequestInit['body'], Res>(endpoint: string, body: TBody, headers?: RequestInit['headers']) =>
    request<Res>(`${API_URL}${endpoint}`, {
      body,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      method: 'POST',
    }),
  put: <TBody extends RequestInit['body'], Res>(endpoint: string, body: TBody, headers?: RequestInit['headers']) =>
    request<Res>(`${API_URL}${endpoint}`, {
      body,
      headers: {
        ...headers,
        'Content-Type': 'application/json',
      },
      method: 'PUT',
    }),
}
