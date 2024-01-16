import { updateBudget } from '../index'
import * as balanceModule from '../../../network/balance'
import * as lsatModule from '../../getLSat'

jest.mock('../../../network/balance')
jest.mock('../../getLSat')

const mockGetBalance = balanceModule.getBalance as jest.Mock
const mockGetLSat = lsatModule.getLSat as jest.Mock

describe('updateBudget', () => {
  it('should set budget to 0 when getLSat returns null', async () => {
    mockGetLSat.mockResolvedValueOnce(null)

    const setBudget = jest.fn()

    await updateBudget(setBudget)
    expect(setBudget).toHaveBeenCalledWith(0)
  })

  it('should set budget to balance value when getLSat returns a valid value and getBalance succeeds', async () => {
    const mockLsat = 'test-lsat'
    const mockBalance = { balance: 100 }

    mockGetLSat.mockResolvedValueOnce(mockLsat)
    mockGetBalance.mockResolvedValueOnce(mockBalance)

    const setBudget = jest.fn()

    await updateBudget(setBudget)
    expect(setBudget).toHaveBeenCalledWith(mockBalance.balance)
  })

  it('should set budget to 0 when getBalance fails with an error', async () => {
    const mockLsat = 'test-lsat'

    mockGetLSat.mockResolvedValueOnce(mockLsat)
    mockGetBalance.mockRejectedValueOnce(new Error('test error'))

    const setBudget = jest.fn()

    await updateBudget(setBudget)
    expect(setBudget).toHaveBeenCalledWith(0)
  })
})
