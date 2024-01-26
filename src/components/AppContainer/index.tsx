import { useState } from 'react'
import { App } from '../App'
import { Auth } from '../Auth'

export const AppContainer = () => {
  const [authenticated, setAuthenticated] = useState(false)

  if (!authenticated) {
    return <Auth setAuthenticated={setAuthenticated} />
  }

  return <App />
}
