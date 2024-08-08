import * as sphinx from 'sphinx-bridge'
import { isE2E } from '~/constants'
import { sphinxBridge } from '~/testSphinxBridge'
import { isSphinx } from '../isSphinx'

// queue for sphinx, it handles only on request at a time
// eslint-disable-next-line @typescript-eslint/no-explicit-any
let signingPromise: Promise<any> | null = null

export async function getSignedMessageFromRelay(): Promise<{ message: string; signature: string }> {
  let message = ''

  const storedSignature = localStorage.getItem('signature')

  if (storedSignature) {
    const parsedSignature = JSON.parse(storedSignature)

    return { signature: parsedSignature.signature, message: parsedSignature.message }
  }

  try {
    message = btoa(`${window.crypto.randomUUID()}${new Date().getTime()}`)
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

            const response = { message, signature: storedLsat.signature }

            storeSignatureInLocalStorage({ ...response })

            return { ...response }
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

            const response = { message, signature: storedLsat.response.sig }

            storeSignatureInLocalStorage({ ...response })

            return { ...response }
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

function storeSignatureInLocalStorage(sig: { message: string; signature: string }) {
  localStorage.setItem('signature', JSON.stringify({ ...sig }))
}
