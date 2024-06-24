import { lazy, Suspense } from 'react'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { Route, Routes } from 'react-router-dom' // Add these imports
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { AuthGuard } from '../Auth'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))
const LazyAppNew = lazy(() => import('../AppNew').then(({ AppNew }) => ({ default: AppNew })))

export const AppContainer = () => {
  const [v2FeatureFlag] = useFeatureFlagStore((s) => [s.v2FeatureFlag])

  const App = v2FeatureFlag ? <LazyAppNew /> : <LazyApp />

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>
          <Routes>
            <Route element={App} path="/" />
            <Route element={App} path="/search" />
            <Route element={<div>404 Not Found</div>} path="*" />
          </Routes>
        </AuthGuard>
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
