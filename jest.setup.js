import '@testing-library/jest-dom'
import 'jest-canvas-mock'
import fetch from 'node-fetch'

global.fetch = fetch

global.setImmediate = (callback, ...args) => setTimeout(callback, 0, ...args)

global.clearImmediate = (id) => {
  clearTimeout(id)
}
