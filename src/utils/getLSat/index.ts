import { Lsat } from 'lsat-js'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { API_URL } from '~/constants'

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

export const getUnpaidLsat = async (action: Action, search?: string) => {
  const url = new URL(`${API_URL}/${action}`)
  const searchParams = new URLSearchParams(search)

  if (search) {
    searchParams.forEach((value, key) => {
      url.searchParams.append(key, value)
    })
  }

  const resp = await fetch(url, {
    method: ActionsMapper[action] ?? 'GET',
  })

  const data = await resp.json()

  const lsat = ['teachme', 'ask_question', 'sentiments'].includes(action)
    ? Lsat.fromHeader(resp.headers.get('www-authenticate') || '')
    : Lsat.fromHeader(data.headers)

  return lsat
}

export function lsatToken(macaroon: string, preimage: string) {
  return `LSAT ${macaroon}:${preimage}`
}
