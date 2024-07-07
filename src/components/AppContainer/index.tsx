import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { AuthGuard } from '../Auth'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))

export const AppContainer = () => {
  const App = <LazyApp />

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>
          <Routes>
            <Route element={App} path="/" />
            <Route element={App} path="/search" />
            <Route element={App} path="*" />
          </Routes>
        </AuthGuard>
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
