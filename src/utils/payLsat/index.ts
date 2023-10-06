import { Lsat } from 'lsat-js'
import * as sphinx from 'sphinx-bridge-kevkevinpal'
import { requestProvider } from 'webln'

// eslint-disable-next-line  @typescript-eslint/no-explicit-any
export async function payLsat(lsat: Lsat): Promise<void> {
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
    const LSATRes = await sphinx.saveLsat(lsat.invoice, lsat.baseMacaroon, window.location.host)

    if (LSATRes.success === false) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      await sphinx.topup()
    }

    localStorage.setItem(
      'lsat',
      JSON.stringify({
        macaroon: lsat.baseMacaroon,
        identifier: lsat.id,
        preimage: LSATRes.lsat.split(':')[1],
      }),
    )

    return
  }

  // remove lsat in local storage
  localStorage.removeItem('lsat')

  const webln = await requestProvider()

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
