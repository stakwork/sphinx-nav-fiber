import { lazy, Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { AuthGuard } from '../Auth'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))
const LazyMindSet = lazy(() => import('../../modules').then(({ MindSet }) => ({ default: MindSet })))

export const AppContainer = () => {
  const App = <LazyApp />
  const MindSet = <LazyMindSet />

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route element={MindSet} path="/mindset" />
          <Route element={<AuthGuard>{App}</AuthGuard>} path="/" />
          <Route element={<AuthGuard>{App}</AuthGuard>} path="/search" />
          <Route element={<AuthGuard>{App}</AuthGuard>} path="*" />
        </Routes>
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
