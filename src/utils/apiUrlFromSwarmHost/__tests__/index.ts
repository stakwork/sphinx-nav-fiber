import { apiUrlFromSwarmHost, getUrlFromEnv, normalizeApiUrl, removeApi } from '../index.ts'

const originalLocation = window.location
const originalEnv = window.ENV

function mockWindowLocation(url) {
  delete global.window.location
  global.window.location = new URL(url)
}

describe('apiUrlFromSwarmHost', () => {
  afterEach(() => {
    delete global.window.location
    global.window.location = originalLocation
    global.window.ENV = originalEnv
    jest.restoreAllMocks()
  })

  it('returns the current origin API path for the URL "https://second-brain.sphinx.chat"', () => {
    mockWindowLocation('https://second-brain.sphinx.chat')
    expect(apiUrlFromSwarmHost()).toBe('https://second-brain.sphinx.chat/api')
  })

  it('returns "https://bitcoin.sphinx.chat/api" for a URL containing "localhost"', () => {
    mockWindowLocation('http://localhost:3000')
    expect(apiUrlFromSwarmHost()).toBe('https://bitcoin.sphinx.chat/api')
  })

  it('returns the original URL appended with /api for a URL not containing "swarm" and not hardcoded', () => {
    const nonSwarmUrl = 'https://bitcoin.sphinx.chat'

    mockWindowLocation(nonSwarmUrl)
    expect(apiUrlFromSwarmHost()).toBe(`${nonSwarmUrl}/api`)
  })
})

describe('runtime API URL helpers', () => {
  afterEach(() => {
    global.window.ENV = originalEnv
  })

  it('normalizes configured API hosts', () => {
    expect(normalizeApiUrl('https://example.com')).toBe('https://example.com/api')
    expect(normalizeApiUrl('https://example.com/api/')).toBe('https://example.com/api')
    expect(normalizeApiUrl('  https://example.com/api  ')).toBe('https://example.com/api')
  })

  it('reads VITE_APP_API_URL from runtime window env before legacy values', () => {
    global.window.ENV = {
      BOLTWALL_URL: 'https://legacy.example.com',
      VITE_APP_API_URL: 'https://runtime.example.com',
    }

    expect(getUrlFromEnv()).toBe('https://runtime.example.com/api')
  })

  it('supports legacy runtime API_URL and BOLTWALL_URL values', () => {
    global.window.ENV = {
      API_URL: 'https://api-url.example.com/api',
      BOLTWALL_URL: 'https://boltwall.example.com',
    }

    expect(getUrlFromEnv()).toBe('https://api-url.example.com/api')

    global.window.ENV = {
      BOLTWALL_URL: 'https://boltwall.example.com',
    }

    expect(getUrlFromEnv()).toBe('https://boltwall.example.com/api')
  })

  it('removes a trailing api path for websocket origins', () => {
    expect(removeApi('https://example.com/api')).toBe('https://example.com')
    expect(removeApi('https://example.com/api/')).toBe('https://example.com')
  })
})
