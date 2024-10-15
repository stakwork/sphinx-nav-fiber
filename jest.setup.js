import '@testing-library/jest-dom'
import 'jest-canvas-mock'
import fetch from 'node-fetch'
import { TextDecoder, TextEncoder } from 'util'

global.fetch = fetch

global.setImmediate = (callback, ...args) => setTimeout(callback, 0, ...args)

global.clearImmediate = (id) => {
  clearTimeout(id)
}

global.TextEncoder = TextEncoder
global.TextDecoder = TextDecoder
