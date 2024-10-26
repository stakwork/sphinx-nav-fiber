import { lazy, Suspense, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useAppStore } from '~/stores/useAppStore'
import { useModal } from '~/stores/useModalStore'
import { useUserStore } from '~/stores/useUserStore'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { AuthGuard } from '../Auth'
import { OnboardingModal } from '../ModalsContainer/OnboardingFlow'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))

export const AppContainer = () => {
  const App = <LazyApp />
  const [isAdmin] = useUserStore((s) => [s.isAdmin, s.setPubKey])
  const { open, visible } = useModal('onboardingFlow')
  const { appMetaData } = useAppStore((s) => s)

  useEffect(() => {
    if (!isAdmin && appMetaData?.title && !visible) {
      open()
    }
  }, [isAdmin, appMetaData?.title, open, visible])

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        <AuthGuard>
          {visible ? (
            <OnboardingModal />
          ) : (
            <Routes>
              <Route element={App} path="/" />
              <Route element={App} path="/search" />
              <Route element={App} path="*" />
            </Routes>
          )}
        </AuthGuard>
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
