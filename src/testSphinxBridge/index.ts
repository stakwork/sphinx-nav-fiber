import { enableSphinx } from './enable'
import { getLsatSphinx } from './getLsat'

export const sphinxBridge = {
  enable: async () => enableSphinx(),
  getLsat: async (host: string) => getLsatSphinx(host),
}
