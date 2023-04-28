import { memo, useEffect } from 'react'
import { isE2E } from '~/constants'
import { useUserStore } from '~/stores/useUserStore'

export const executeIfTetsRunning = (fn: () => void) => {
  if (isE2E) {
    fn()
  }
}

const E2E = () => {
  const userStore = useUserStore()

  useEffect(() => {
    if (!isE2E) {
      return
    }

    // eslint-disable-next-line no-console
    console.log({ isE2E })

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    window.userStore = userStore
  }, [userStore])

  return <div id="e2e-check" />
}

export const E2ETests = memo(() => (isE2E ? <E2E /> : null))

E2ETests.displayName = 'E2ETests'
