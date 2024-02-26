import { Suspense, lazy, useState } from 'react'
import { E2ETests } from '~/utils'
import { AppProviders } from '../App/Providers'
import { Auth } from '../Auth'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))
const LazyAppNew = lazy(() => import('../AppNew').then(({ AppNew }) => ({ default: AppNew })))

export const AppContainer = () => {
  const [authenticated, setAuthenticated] = useState(false)

  const App = true ? <LazyAppNew /> : <LazyApp />

  return (
    <AppProviders>
      <Suspense fallback={<div>Loading...</div>}>
        {!authenticated ? <Auth setAuthenticated={setAuthenticated} /> : App}
      </Suspense>
      <E2ETests />
    </AppProviders>
  )
}
