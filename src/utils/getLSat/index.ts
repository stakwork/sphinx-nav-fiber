import { Lsat } from 'lsat-js'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { API_URL } from '~/constants'

type Action = 'searching' | 'adding_node' | 'teach-me'

export const getLSat = async (action: Action) => {
  const method = action === 'adding_node' || action === 'teach-me' ? 'POST' : 'GET'

  try {
    const resp = await fetch(`${API_URL}/${action}`, {
      method,
    })

    const data = await resp.json()

    const lsat =
      action === 'teach-me'
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
