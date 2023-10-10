import * as sphinx from 'sphinx-bridge-kevkevinpal'

/**
 *
 * @param action @Action
 * @param search @string // without '?'
 * @returns
 */

export const getLSat = async (): Promise<string> => {
  try {
    // check if lsat exist in local storage
    const localLsat = localStorage.getItem('lsat')

    if (localLsat) {
      const lsat = JSON.parse(localLsat)

      return lsatToken(lsat.macaroon, lsat.preimage)
    }

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const isSphinx = await sphinx.enable()

    // Check if sphinx app is active
    if (isSphinx) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const storedLsat = await sphinx.getLsat()

      if (storedLsat.macaroon) {
        localStorage.setItem(
          'lsat',
          JSON.stringify({
            macaroon: storedLsat.macaroon,
            identifier: storedLsat.identifier,
            preimage: storedLsat.preimage,
          }),
        )

        return lsatToken(storedLsat.macaroon, storedLsat.preimage)
      }

      return ''
    }

    return ''
  } catch (e) {
    console.warn(e)

    return ''
  }
}


export function lsatToken(macaroon: string, preimage: string) {
  return `LSAT ${macaroon}:${preimage}`
}
