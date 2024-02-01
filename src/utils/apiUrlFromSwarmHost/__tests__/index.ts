import { apiUrlFromSwarmHost } from '../index'

const mockWindowLocationOrigin = (url) => {
  Object.defineProperty(window.location, 'origin', {
    value: url,
    writable: true,
  })
}

describe('apiUrlFromSwarmHost', () => {
  test('correctly replaces the first part of a swarm URL starting with "nav"', () => {
    mockWindowLocationOrigin('https://nav.swarm-host.example.com')

    const expectedUrl = 'https://boltwall.swarm-host.example.com/api'

    expect(apiUrlFromSwarmHost()).toBe(expectedUrl)
  })

  test('appends /api to a swarm URL not starting with "nav"', () => {
    mockWindowLocationOrigin('https://some.swarm-host.example.com')

    const expectedUrl = 'https://some.swarm-host.example.com/api'

    expect(apiUrlFromSwarmHost()).toBe(expectedUrl)
  })

  test('returns the original non-swarm URL appended with /api', () => {
    mockWindowLocationOrigin('https://second-brain.sphinx.chat')

    const expectedUrl = 'https://knowledge-graph.sphinx.chat/api'

    expect(apiUrlFromSwarmHost()).toBe(expectedUrl)
  })

  test('returns the original URL with /api for localhost', () => {
    mockWindowLocationOrigin('http://localhost:3000')

    const expectedUrl = 'https://knowledge-graph.sphinx.chat/api'

    expect(apiUrlFromSwarmHost()).toBe(expectedUrl)
  })

  test('returns the original URL appended with /api for a URL not containing "swarm" and not a specific hardcoded URL', () => {
    mockWindowLocationOrigin('https://example.com')

    const expectedUrl = 'https://example.com/api'

    expect(apiUrlFromSwarmHost()).toBe(expectedUrl)
  })
})
