import { Suspense, lazy, useState } from 'react'
import { Auth } from '../Auth'

const LazyApp = lazy(() => import('../App').then(({ App }) => ({ default: App })))

export const AppContainer = () => {
  const [authenticated, setAuthenticated] = useState(false)

  return (
    <Suspense fallback={<div>Loading...</div>}>
      {!authenticated ? <Auth setAuthenticated={setAuthenticated} /> : <LazyApp />}
    </Suspense>
  )
}
