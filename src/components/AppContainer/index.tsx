import { Suspense, lazy, useState } from 'react'
import { useUserStore } from '~/stores/useUserStore'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { Auth } from '../Auth'
import { Button } from '../Button'
import { Flex } from '../common/Flex'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))
const LazyAppNew = lazy(() => import('../AppNew').then(({ AppNew }) => ({ default: AppNew })))

export const AppContainer = () => {
  const [authenticated, setAuthenticated] = useState(false)
  const [isAdmin] = useUserStore((s) => [s.isAdmin])
  const [view, setView] = useState<'prod' | 'betta' | null>(null)

  const App = view !== 'betta' ? <LazyAppNew /> : <LazyApp />

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        {!authenticated ? (
          <Auth setAuthenticated={setAuthenticated} />
        ) : (
          <>
            {!view && isAdmin ? (
              <Flex align="center" direction="row" justify="center" style={{ marginTop: '25%' }}>
                <Flex mx={20}>
                  <Button background="dashboardSearch" onClick={() => setView('prod')}>
                    Prod
                  </Button>
                </Flex>
                <Flex>
                  <Button onClick={() => setView('betta')}>Betta (new)</Button>
                </Flex>
              </Flex>
            ) : (
              App
            )}
          </>
        )}
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
