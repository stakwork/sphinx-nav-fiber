import * as sphinx from 'sphinx-bridge'
import { isSphinx } from '../isSphinx'

// queue for sphinx, it handles only on request at a time
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let signingPromise: Promise<any> | null = null

export async function getSignedMessageFromRelay(): Promise<{ message: string; signature: string }> {
  const message = `${window.crypto.randomUUID()}${new Date().getTime()}`

  if (isSphinx()) {
    if (!signingPromise) {
      signingPromise = sphinx
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
    }

    return signingPromise
  }

  return Promise.resolve({ message: '', signature: '' })
}

export async function generateAuthQueryParam() {
  const res = await getSignedMessageFromRelay()

  return `sig=${res.signature}&msg=${res.message}`
}
