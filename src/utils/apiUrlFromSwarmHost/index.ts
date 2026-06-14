const DEFAULT_API_URL = 'https://bitcoin.sphinx.chat/api'

export function normalizeApiUrl(apiUrl?: string): string | undefined {
  const trimmedUrl = apiUrl?.trim()

  if (!trimmedUrl) {
    return undefined
  }

  const urlWithoutTrailingSlash = trimmedUrl.replace(/\/+$/, '')

  if (urlWithoutTrailingSlash.endsWith('/api')) {
    return urlWithoutTrailingSlash
  }

  return `${urlWithoutTrailingSlash}/api`
}

export const getUrlFromEnv = () => {
  const runtimeEnv = window.ENV

  return normalizeApiUrl(
    runtimeEnv?.VITE_APP_API_URL || runtimeEnv?.API_URL || runtimeEnv?.BOLTWALL_URL || import.meta.env.VITE_APP_API_URL,
  )
}

export const API_URL = getUrlFromEnv() || apiUrlFromSwarmHost() || DEFAULT_API_URL

export function apiUrlFromSwarmHost(): string | undefined {
  const { origin, host, hostname, protocol } = window.location

  let url = origin

  if (protocol === 'https:' && host.endsWith('.sphinx.chat:8000')) {
    url = `https://${hostname}:8444`
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
  } else if (origin.includes('-3000.workspaces.sphinx.chat')) {
    const arr = window.location.host.split('-3000')
    const codeserverUrl = arr[0]

    url = `https://${codeserverUrl}-8445.workspaces.sphinx.chat`
  } else if (origin.includes('localhost')) {
    url = 'https://bitcoin.sphinx.chat'
  }

  return normalizeApiUrl(url)
}

export function removeApi(url: string) {
  const regex = /\/api\/?$/

  return url.replace(regex, '')
}
