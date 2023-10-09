import * as sphinx from 'sphinx-bridge-kevkevinpal'

type Action = 'searching' | 'adding_node' | 'teachme' | 'ask_question' | 'sentiments'

const ActionsMapper: Record<Action, string> = {
  searching: 'GET',
  adding_node: 'POST',
  teachme: 'POST',
  ask_question: 'POST',
  sentiments: 'GET',
}

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
