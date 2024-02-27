import * as sphinx from 'sphinx-bridge'
import { isE2E } from '~/constants'
import { sphinxBridge } from '~/testSphinxBridge'
import { isSphinx } from '../isSphinx'

/**
 *
 * @param action @Action
 * @param search @string // without '?'
 * @returns
 */

export const getLSat = async (): Promise<string> => {
  try {
    // check if lsat exist in local storage

    const localLsat = window.localStorage?.getItem('lsat')

    if (localLsat) {
      const lsat = JSON.parse(localLsat)

      return lsatToken(lsat.macaroon, lsat.preimage)
    }

    // Check if sphinx app is active
    if (isSphinx()) {
      let storedLsat

      const { host } = window.location

      if (!isE2E) {
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        storedLsat = await sphinx.getLsat(host)
      } else {
        storedLsat = await sphinxBridge.getLsat(host)
      }

      if (storedLsat.macaroon) {
        window.localStorage.setItem(
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
