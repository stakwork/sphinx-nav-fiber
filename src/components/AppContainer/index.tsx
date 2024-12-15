import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { AuthGuard } from '../Auth'

// Lazy-loaded components
const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))
const LazyMindSet = lazy(() => import('../mindset').then(({ MindSet }) => ({ default: MindSet })))

export const AppContainer = () => {
  const isMindSetHost =
    window.location?.hostname === 'graphmindset.sphinx.chat' || window.location.hostname === 'localhost'

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          {isMindSetHost && <Route element={<LazyMindSet />} path="/mindset" />}
          <Route
            element={
              <AuthGuard>
                <LazyApp />
              </AuthGuard>
            }
            path="/"
          />
          <Route
            element={
              <AuthGuard>
                <LazyApp />
              </AuthGuard>
            }
            path="/search"
          />
          <Route
            element={
              <AuthGuard>
                <LazyApp />
              </AuthGuard>
            }
            path="*"
          />
        </Routes>
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
