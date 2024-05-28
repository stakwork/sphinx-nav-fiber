import { getLSat } from '~/utils/getLSat'
import { payLsat } from '~/utils/payLsat'
import { api } from '../api'

type TeachData = {
  term: string
  transcripts: string
}

export const postInstagraph = async (data: TeachData, setBudget: (value: number | null) => void): Promise<void> => {
  const lsatToken = await getLSat()

  try {
    await api.post(`/instagraph`, JSON.stringify(data), { Authorization: lsatToken })

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.status === 402) {
      await payLsat(setBudget)

      await postInstagraph(data, setBudget)

      return
    }

    throw error
  }
}

export const postTeachMe = async (data: TeachData, setBudget: (value: number | null) => void): Promise<void> => {
  const lsatToken = await getLSat()

  try {
    await api.post(`/teachme`, JSON.stringify(data), { Authorization: lsatToken })

    // eslint-disable-next-line  @typescript-eslint/no-explicit-any
  } catch (error: any) {
    if (error.status === 402) {
      await payLsat(setBudget)

      await postTeachMe(data, setBudget)

      return
    }

    throw error
  }
}
