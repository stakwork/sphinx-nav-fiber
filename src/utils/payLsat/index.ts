import { Lsat } from 'lsat-js'
import * as sphinx from 'sphinx-bridge'
import { requestProvider } from 'webln'
import { isE2E } from '~/constants'
import { buyLsat } from '~/network/buyLsat'
import { sphinxBridge } from '~/testSphinxBridge'
import { isSphinx } from '../isSphinx'

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export async function payLsat(setBudget: (value: number | null) => void): Promise<void> {
  let lsat: Lsat

  if (isSphinx()) {
    const localLsat = localStorage.getItem('lsat')

    if (localLsat) {
      // remove lsat in local storage
      localStorage.removeItem('lsat')

      const parsedLsat = JSON.parse(localLsat)

      // Update lsat on relay as expired
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await sphinx.updateLsat(parsedLsat.identifier, 'expired')
    }

    let budget

    if (!isE2E) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      budget = await sphinx.setBudget()
    } else {
      budget = await sphinxBridge.setBudget()
    }

    let budgetAmount = budget?.budget

    if (!budgetAmount) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      const details = await sphinx.authorize()

      budgetAmount = details.budget
    }

    try {
      await buyLsat(budgetAmount)

      // eslint-disable-next-line  @typescript-eslint/no-explicit-any
    } catch (error: any) {
      if (error.status === 402) {
        lsat = Lsat.fromHeader(error.headers.get('www-authenticate'))

        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        const LSATRes = await sphinx.saveLsat(lsat.invoice, lsat.baseMacaroon, window.location.host)

        if (LSATRes?.lsat) {
          localStorage.setItem(
            'lsat',
            JSON.stringify({
              macaroon: lsat.baseMacaroon,
              identifier: lsat.id,
              preimage: LSATRes.lsat.split(':')[1],
            }),
          )

          await setBudget(budgetAmount)
        }
      }

      return
    }
  }

  // remove lsat in local storage
  localStorage.removeItem('lsat')

  const webln = await requestProvider()

  const budgetAmount = 50

  try {
    await buyLsat(budgetAmount)

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    lsat = Lsat.fromHeader(error.headers.get('www-authenticate'))

    // pay lsat invoice
    const preimage = await webln.sendPayment(lsat.invoice)

    if (preimage?.preimage) {
      localStorage.setItem(
        'lsat',
        JSON.stringify({
          macaroon: lsat.baseMacaroon,
          identifier: lsat.id,
          preimage: preimage.preimage,
        }),
      )
    }

    await setBudget(budgetAmount)
  }
}
