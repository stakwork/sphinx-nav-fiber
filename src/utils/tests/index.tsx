import { memo, useEffect } from 'react'
import { isDevelopment, isE2E } from '~/constants'
import { useUserStore } from '~/stores/useUserStore'

export const executeIfTetsRunning = (fn: () => void) => {
  if (isE2E) {
    fn()
  }
}

export function executeIfProd<T>(fn: () => T): T {
  if (!(isDevelopment || isE2E)) {
    return fn()
  }

  return null as unknown as T
}

export function addToGlobalForE2e<T extends typeof window.e2e, K extends keyof typeof window.e2e>(t: T[K], key: K) {
  executeIfTetsRunning(() => {
    if (!window.e2e) {
      window.e2e = {}
    }

    window.e2e[key] = t
  })
}

const E2E = () => {
  const userStore = useUserStore()

  useEffect(() => {
    if (!isE2E) {
      return
    }

    addToGlobalForE2e(userStore, 'userStore')
  }, [userStore])

  return <div id="e2e-check" />
}

// eslint-disable-next-line react/display-name
export const E2ETests = memo(() => (isE2E ? <E2E /> : null))
