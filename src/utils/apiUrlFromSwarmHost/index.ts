const { origin, host } = window.location

const getUrlFormEnv = () => import.meta.env.VITE_APP_API_URL

export const API_URL = getUrlFormEnv() || apiUrlFromSwarmHost() || 'https://bitcoin.sphinx.chat'

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
  } else if (window.location.host.endsWith('-3000.app.github.dev')) {
    const arr = window.location.host.split('-3000')
    const codespaceUrl = arr[0]

    url = `https://${codespaceUrl}-8444.app.github.dev`
  } else if (origin.includes('localhost')) {
    url = 'https://bitcoin.sphinx.chat'
  }

  return `${url}/api`
}

export function removeApi(url: string) {
  const regex = /\/api$/

  return url.replace(regex, '')
}
