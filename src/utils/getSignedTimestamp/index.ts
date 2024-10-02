import { Buffer } from 'buffer'
import sphinx from 'sphinx-bridge'

export async function getSignedTimestamp(): Promise<string> {
  try {
    // get current time in seconds
    const currentTimeInSeconds = Math.floor(Date.now() / 1000)

    const timeInBytes = Buffer.from(currentTimeInSeconds.toString(16), 'hex')

    const timebase64 = Buffer.from(timeInBytes).toString('base64')

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const res = await sphinx.signMessage(timebase64)

    // signmessage
    const signedByte = bytesFromUrlBase64(res.signature)

    const concatenatedBytes = Buffer.concat([timeInBytes, signedByte], signedByte.length + timeInBytes.length)

    const signedTimeStamp = urlBase64(concatenatedBytes)

    return signedTimeStamp
  } catch (error) {
    console.log('error from signing more message: ', error)

    return ''
  }
}

export function bytesFromUrlBase64(base64Url: string): Buffer {
  // Revert the URL-safe changes back to regular Base64
  const base64 = base64Url.replace(/_/g, '/').replace(/-/g, '+')

  // Add padding if necessary
  const paddedBase64 = base64.padEnd(base64.length + ((4 - (base64.length % 4)) % 4), '=')

  // Convert the Base64 string back into a Buffer
  return Buffer.from(paddedBase64, 'base64')
}

export function urlBase64(buf: Uint8Array): string {
  // Convert Uint8Array to a string
  let binary = ''
  const len = buf.byteLength

  for (let i = 0; i < len; i += 1) {
    binary += String.fromCharCode(buf[i])
  }

  // Convert binary string to Base64
  const base64 = btoa(binary)

  // Replace characters for URL safety
  return base64.replace(/\//g, '_').replace(/\+/g, '-').replace(/=+$/, '')
}
