import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import { BrowserRouter } from 'react-router-dom'

import { AppContainer } from './components/AppContainer'
import { isE2E } from './constants'
import './index.css'
import { overrideConsole } from './utils/logger'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  isE2E ? (
    <AppContainer />
  ) : (
    <React.StrictMode>
      <BrowserRouter>
        <AppContainer />
      </BrowserRouter>
    </React.StrictMode>
  ),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()

// Add  console panel to the web view
overrideConsole()
