import { Suspense, lazy } from 'react'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { AuthGuard } from '../Auth'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))
const LazyAppNew = lazy(() => import('../AppNew').then(({ AppNew }) => ({ default: AppNew })))

export const AppContainer = () => {
  const [v2Flag] = useFeatureFlagStore((s) => [s.v2Flag])

  const App = v2Flag ? <LazyAppNew /> : <LazyApp />

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>{App}</AuthGuard>
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
