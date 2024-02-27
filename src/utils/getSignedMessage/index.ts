import * as sphinx from 'sphinx-bridge'
import { isE2E } from '~/constants'
import { sphinxBridge } from '~/testSphinxBridge'
import { isSphinx } from '../isSphinx'

// queue for sphinx, it handles only on request at a time
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let signingPromise: Promise<any> | null = null

export async function getSignedMessageFromRelay(): Promise<{ message: string; signature: string }> {
  let message = ''

  try {
    message = `${window.crypto.randomUUID()}${new Date().getTime()}`
  } catch (error) {
    return { message: '', signature: '' }
  }

  if (isSphinx()) {
    if (!signingPromise) {
      if (!isE2E) {
        signingPromise = sphinx
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          .signMessage(message)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .then((storedLsat: any) => {
            signingPromise = null // Reset the promise after it's resolved

            return { message, signature: storedLsat.signature }
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .catch((error: any) => {
            signingPromise = null // Reset the promise on error
            console.error(error)

            return { message: '', signature: '' }
          })
      } else {
        signingPromise = sphinxBridge
          .signMessage(message)
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .then((storedLsat: any) => {
            signingPromise = null // Reset the promise after it's resolved

            return { message, signature: storedLsat.response.sig }
          })
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          .catch((error: any) => {
            signingPromise = null // Reset the promise on error
            console.error(error)

            return { message: '', signature: '' }
          })
      }
    }

    return signingPromise
  }

  return Promise.resolve({ message: '', signature: '' })
}

export async function generateAuthQueryParam() {
  const res = await getSignedMessageFromRelay()

  return `sig=${res.signature}&msg=${res.message}`
}
