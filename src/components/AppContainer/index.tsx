import { lazy, Suspense } from 'react'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { AuthGuard } from '../Auth'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))

export const AppContainer = () => {
  const App = <LazyApp />

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>{App}</AuthGuard>
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
