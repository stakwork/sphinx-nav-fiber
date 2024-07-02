export * from './constants'
export * from './utils'

// cypress/support/index.js

// Override console.log to filter out specific messages
const originalLog = console.log
console.log = function (message) {
  if (!message.includes('[vite] page reload')) {
    originalLog.apply(console, arguments)
  }
}

// Handle Cypress events to filter out specific log messages
Cypress.on('window:before:load', (win) => {
  win.console.log = function () {
    if (arguments[0] && arguments[0].includes && arguments[0].includes('[vite] page reload')) {
      return // Suppress `[vite] page reload` messages
    }
    originalLog.apply(console, arguments)
  }
})
