import * as sphinx from 'sphinx-bridge'

export async function getSignedMessageFromRelay(): Promise<{ message: string; signature: string }> {
  try {
    const message = `${window.crypto.randomUUID()}${new Date().getTime()}`

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isSphinx = await sphinx.enable()

    if (isSphinx) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const storedLsat = await sphinx.signMessage(message)

      return { message, signature: storedLsat.signature }
    }

    return { message: '', signature: '' }
  } catch (error) {
    return { message: '', signature: '' }
  }
}

export async function generateAuthQueryParam() {
  const res = await getSignedMessageFromRelay()

  return `sig=${res.signature}&msg=${res.message}`
}
