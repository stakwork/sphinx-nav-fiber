import { getBalance } from '~/network/balance'
import { getLSat } from '../getLSat'

export async function updateBudget(setBudget: (value: number | null) => void) {
  const lsat = await getLSat()

  if (!lsat) {
    setBudget(0)

    return
  }

  try {
    const balance = await getBalance(lsat)

    setBudget(balance.balance)
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    setBudget(0)
  }
}
