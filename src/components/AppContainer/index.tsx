import { lazy, Suspense, useState } from 'react'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { Auth } from '../Auth'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))
const LazyAppNew = lazy(() => import('../AppNew').then(({ AppNew }) => ({ default: AppNew })))

export const AppContainer = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [v2Flag] = useFeatureFlagStore((s) => [s.v2Flag])

  const App = v2Flag ? <LazyAppNew /> : <LazyApp />

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        {!authenticated ? <Auth setAuthenticated={setAuthenticated} /> : App}
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
