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
export const getLSat = async (action: Action, search?: string) => {
  try {
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const LSATRes = await sphinx.saveLsat(lsat.invoice, lsat.baseMacaroon, 'knowledge-graph.sphinx.chat')

    if (LSATRes.success === false) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await sphinx.topup()
    }

    lsat.setPreimage(LSATRes.lsat.split(':')[1])

    const token = lsat.toToken()

    return token
  } catch (e) {
    console.warn(e)

    return null
  }
}
