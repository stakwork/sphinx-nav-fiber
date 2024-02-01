const { origin, host } = window.location

const getUrlFormEnv = () => import.meta.env.VITE_APP_API_URL

export const API_URL = getUrlFormEnv() || apiUrlFromSwarmHost() || 'https://knowledge-graph.sphinx.chat'

export function apiUrlFromSwarmHost(): string | undefined {
  // for swarm deployments, always point to "boltwall"
  // for now, only if the URL contains "swarm"
  const originUrl = window.location.origin

  let url = originUrl

  if (host.includes('swarm')) {
    if (host.startsWith('nav')) {
      const hostArray = host.split('.')

      hostArray[0] = 'boltwall'

      const finalHost = hostArray.join('.')

      url = `https://${finalHost}`
    }
  } else if (originUrl === 'https://second-brain.sphinx.chat' || origin.includes('localhost')) {
    url = 'https://knowledge-graph.sphinx.chat'
  }

  return `${url}/api`
}
