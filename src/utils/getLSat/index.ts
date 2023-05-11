import { Lsat } from 'lsat-js'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { API_URL } from '~/constants'

type Action = 'searching' | 'adding_node' | 'teachme' | 'ask_question'

const ActionsMapper = {
  searching: 'GET',
  adding_node: 'POST',
  teachme: 'POST',
  ask_question: 'POST',
}

export const getLSat = async (action: Action) => {
  try {
    const resp = await fetch(`${API_URL}/${action}`, {
      method: ActionsMapper[action],
    })

    const data = await resp.json()

    const lsat =
      action === 'teachme' || action === 'ask_question'
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
    console.log(e)

    return null
  }
}
