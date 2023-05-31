import { Buffer } from 'buffer' // or 'buffer/', with trailing slash
import Process from 'process'

globalThis.Buffer = Buffer
// use vite.config to define env vars
// https://stackoverflow.com/questions/67194082/how-can-i-display-the-current-app-version-from-package-json-to-the-user-using-vi
globalThis.process = Process
