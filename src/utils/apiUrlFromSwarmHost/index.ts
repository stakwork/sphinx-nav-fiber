const { origin, host } = window.location

const getUrlFormEnv = () => {
  // Check for runtime environment variable (injected by container)
  const windowWithEnv = window as Window & { ENV?: { BOLTWALL_URL?: string } }

  if (windowWithEnv.ENV?.BOLTWALL_URL) {
    return windowWithEnv.ENV.BOLTWALL_URL
  }

  // Fallback to build-time variable
  return import.meta.env.VITE_APP_API_URL
}

export const API_URL = getUrlFormEnv() || apiUrlFromSwarmHost() || 'https://bitcoin.sphinx.chat'

export function apiUrlFromSwarmHost(): string | undefined {
  // for swarm deployments, always point to "boltwall"
  // for now, only if the URL contains "swarm"
  const originUrl = window.location.origin

  let url = originUrl

  if (window.location.protocol === 'https:' && window.location.host.endsWith('.sphinx.chat:8000')) {
    url = `https://${window.location.hostname}:8444`
  } else if (host.includes('swarm')) {
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
