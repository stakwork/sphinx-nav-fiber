import { apiUrlFromSwarmHost } from '../index.ts'

function mockWindowLocation(url) {
  delete global.window.location
  global.window = Object.create(window)
  global.window.location = new URL(url)
  global.window.host = global.window.location.host
  global.window.origin = global.window.location.origin
}

describe('apiUrlFromSwarmHost', () => {
  afterEach(() => {
    jest.restoreAllMocks()
  })

  it('returns "https://knowledge-graph.sphinx.chat/api" for the URL "https://second-brain.sphinx.chat"', () => {
    mockWindowLocation('https://second-brain.sphinx.chat')
    expect(apiUrlFromSwarmHost()).toBe('https://knowledge-graph.sphinx.chat/api')
  })

  it('returns "https://knowledge-graph.sphinx.chat/api" for a URL containing "localhost"', () => {
    mockWindowLocation('http://localhost:3000')
    expect(apiUrlFromSwarmHost()).toBe('https://knowledge-graph.sphinx.chat/api')
  })

  it('returns the original URL appended with /api for a URL not containing "swarm" and not hardcoded', () => {
    const nonSwarmUrl = 'https://example.com'
    mockWindowLocation(nonSwarmUrl)
    expect(apiUrlFromSwarmHost()).toBe(`${nonSwarmUrl}/api`)
  })
})
