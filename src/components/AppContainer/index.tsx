import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDataStore } from '~/stores/useDataStore'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { Splash } from '../App/Splash'
import { AuthGuard } from '../Auth'
import { useAppStore } from '~/stores/useAppStore'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))

export const AppContainer = () => {
  const App = <LazyApp />
  const { splashDataLoading } = useDataStore((s) => s)

  const { setUniverseQuestionIsOpen } = useAppStore((s) => ({
    setUniverseQuestionIsOpen: s.setUniverseQuestionIsOpen,
  }))

  useEffect(() => {
    if (!splashDataLoading) {
      setUniverseQuestionIsOpen()
    }
  }, [splashDataLoading, setUniverseQuestionIsOpen])

  return (
    <AppProviders>
      {splashDataLoading && <Splash />}
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
