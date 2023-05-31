import { Buffer } from 'buffer' // or 'buffer/', with trailing slash
import Process from 'process'

globalThis.Buffer = Buffer
globalThis.process = Process
