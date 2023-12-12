import { Lsat } from 'lsat-js'
import * as sphinx from 'sphinx-bridge'
import { requestProvider } from 'webln'
import { buyLsat } from '~/network/buyLsat'

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export async function payLsat(): Promise<void> {
  let lsat: Lsat

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const isSphinx = await sphinx.enable()

  if (isSphinx) {
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

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const budget = await sphinx.setBudget()

    let budgetAmount = budget?.budget

    if (!budgetAmount) {
      /**
       * TODO
       * 1. try to authorize, meaning this users app version is not updated
       * 2. get the value of their budget
       * 3. adn set the beudgetAmount and proceed
       */
      budgetAmount = 50
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

        localStorage.setItem(
          'lsat',
          JSON.stringify({
            macaroon: lsat.baseMacaroon,
            identifier: lsat.id,
            preimage: LSATRes.lsat.split(':')[1],
          }),
        )
      }

      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      LSATRes = await sphinx.saveLsat(lsat.invoice, lsat.baseMacaroon, window.location.host)

      return
    }
  }

  // remove lsat in local storage
  localStorage.removeItem('lsat')

  const webln = await requestProvider()

  try {
    await buyLsat(50)

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    lsat = Lsat.fromHeader(error.headers.get('www-authenticate'))

    // pay lsat invoice
    const preimage = await webln.sendPayment(lsat.invoice)

    localStorage.setItem(
      'lsat',
      JSON.stringify({
        macaroon: lsat.baseMacaroon,
        identifier: lsat.id,
        preimage: preimage.preimage,
      }),
    )
  }
}
