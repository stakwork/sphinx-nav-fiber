import * as sphinx from 'sphinx-bridge'
import { api } from '~/network/api'

const sphinxPubkey = '023d8eb306f0027b902fbdc81d33b49b6558b3434d374626f8c324979c92d47c21'

const boostAgainstBudget = async (amount: number) => {
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  let res = await sphinx.enable(true)

  if (!res) {
    console.warn('Sphinx enable failed, means no pubkey and no budget (including budget of 0)')
  }

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  res = await sphinx.keysend(sphinxPubkey, amount)

  if (!res?.success) {
    // rejected, ask for topup
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res = await sphinx.topup()

    if (!res) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      res = await sphinx.authorize()
    }

    if (!res?.budget || res?.budget < amount) {
      // topup failed
      throw new Error('Topup failed')
    }

    // retry keysend
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    res = await sphinx.keysend(sphinxPubkey, amount)

    if (!res) {
      throw new Error('Keysend failed after topup')
    }

    return res
  }

  return res
}

export const boost = async (refId: string, amount: number) => {
  const boostResponse = await boostAgainstBudget(amount)

  const body = {
    amount,
    refid: refId,
  }

  await api.post('/boost', JSON.stringify(body))

  return boostResponse
}
