import { enableSphinx } from './enable'
import { getLsatSphinx } from './getLsat'
import { saveLsat } from './saveLsat'
import { setBudget } from './setBudget'
import { signMessage } from './signMessage'

export const sphinxBridge = {
  enable: async () => enableSphinx(),
  getLsat: async (host: string) => getLsatSphinx(host),
  signMessage: async (message: string) => signMessage(message),
  setBudget: async () => setBudget(),
  saveLsat: async (invoice: string, macaroon: string, host: string) => saveLsat(invoice, macaroon, host),
}
