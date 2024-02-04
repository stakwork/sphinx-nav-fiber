import { renderHook } from '@testing-library/react'
import * as lsatJs from 'lsat-js'
import * as sphinx from 'sphinx-bridge'
import { requestProvider } from 'webln'
import { payLsat } from '..' // Adjust the import path
import { buyLsat } from '../../../network/buyLsat'
import { isSphinx } from '../../isSphinx'

jest.mock('sphinx-bridge')
jest.mock('lsat-js')
jest.mock('webln')
jest.mock('../../../network/buyLsat')
jest.mock('../../isSphinx')

const localStorageMock = {
  getItem: jest.fn(),
  removeItem: jest.fn(),
  setItem: jest.fn(),
  clear: jest.fn(),
}

const mockLocalLsat = {
  macaroon: 'mockMacaroon',
  identifier: 'mockIdentifier',
  preimage: 'mockPreimage',
}

describe('payLsat', () => {
  beforeEach(() => {
    Object.defineProperty(window, 'localStorage', { value: localStorageMock })
    localStorage.clear()
    jest.clearAllMocks()
  })

  it('handles payment through Sphinx when Sphinx is available(setBudget response is not 0)', async () => {
    isSphinx.mockReturnValue(true)

    localStorage.getItem.mockReturnValue(JSON.stringify(mockLocalLsat))

    sphinx.setBudget.mockResolvedValue({ budget: 100 })
    sphinx.saveLsat.mockResolvedValue({ lsat: 'invoice:preimage' })
    buyLsat.mockResolvedValue()

    const { result } = renderHook(() => payLsat(jest.fn()))

    await result.current

    // 1.Verify if localStorage.removeItem is called to remove the existing LSAT
    expect(localStorage.removeItem).toHaveBeenCalled()
    // 2.Mock sphinx.updateLsat to ensure it's called with correct parameters.
    expect(sphinx.updateLsat).toHaveBeenCalledWith(mockLocalLsat.identifier, 'expired')
    // 3.Test the budget and authorization flow within the if (isSphinx) block
    expect(sphinx.setBudget).toHaveBeenCalledTimes(1)
    expect(sphinx.authorize).not.toHaveBeenCalled()
    // 4. buyLsat success
    expect(buyLsat).toHaveBeenCalledWith(100)
  })

  it('handles payment through Sphinx when Sphinx is available(setBudget response is 0)', async () => {
    isSphinx.mockReturnValue(true)

    localStorage.getItem.mockReturnValue(JSON.stringify(mockLocalLsat))

    sphinx.setBudget.mockResolvedValue({ budget: 0 })
    sphinx.authorize.mockResolvedValue({ budget: 50 })
    sphinx.saveLsat.mockResolvedValue({ lsat: 'invoice:preimage' })
    buyLsat.mockResolvedValue()

    const { result } = renderHook(() => payLsat(jest.fn()))

    await result.current

    // 1.Verify if localStorage.removeItem is called to remove the existing LSAT
    expect(localStorage.removeItem).toHaveBeenCalled()
    // 2.Mock sphinx.updateLsat to ensure it's called with correct parameters.
    expect(sphinx.updateLsat).toHaveBeenCalledWith(mockLocalLsat.identifier, 'expired')
    // 3.Test the budget and authorization flow within the if (isSphinx) block
    expect(sphinx.setBudget).toHaveBeenCalledTimes(1)
    expect(sphinx.authorize).toHaveBeenCalledTimes(1)
    // 4. buyLsat success
    expect(buyLsat).toHaveBeenCalledWith(50)
  })

  it('handles payment through Sphinx when Sphinx is available(buyLsat throws a 402 error)', async () => {
    isSphinx.mockReturnValue(true)

    sphinx.setBudget.mockResolvedValue({ budget: 0 })
    sphinx.authorize.mockResolvedValue({ budget: 50 })

    const error = new Error('buyLsat error')

    error.status = 402
    error.headers = new Map([['www-authenticate', 'LSAT Header Value']])
    // Mock buyLsat to throw a 402 error
    buyLsat.mockRejectedValue(error)

    const mockLsatFromHeader = {
      invoice: 'invoice',
      baseMacaroon: 'baseMacaroon',
      id: 'id',
    }

    const mockSaveLsatRes = {
      lsat: 'invoice:preimage',
    }

    lsatJs.Lsat.fromHeader.mockReturnValue(mockLsatFromHeader)

    sphinx.saveLsat.mockResolvedValue(mockSaveLsatRes)

    const setBudgetMock = jest.fn()

    const { result } = renderHook(() => payLsat(setBudgetMock))

    await result.current

    // 5.Test the LSATRes flow within the if (error.status === 402) block
    expect(lsatJs.Lsat.fromHeader).toHaveBeenCalled()
    expect(sphinx.saveLsat).toHaveBeenCalled()

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lsat',
      JSON.stringify({
        macaroon: mockLsatFromHeader.baseMacaroon,
        identifier: mockLsatFromHeader.id,
        preimage: mockSaveLsatRes.lsat.split(':')[1],
      }),
    )

    expect(setBudgetMock).toHaveBeenCalledWith(50)
  })

  it('handles payment through WebLN when Sphinx is not available', async () => {
    isSphinx.mockReturnValue(false)

    requestProvider.mockResolvedValue({
      sendPayment: jest.fn().mockResolvedValue({ preimage: 'preimage' }),
    })

    buyLsat.mockResolvedValue()

    const { result } = renderHook(() => payLsat(jest.fn()))

    await result.current

    expect(requestProvider).toHaveBeenCalled()
    // expect(localStorage.setItem).toHaveBeenCalled()
    expect(buyLsat).toHaveBeenCalledWith(50) // Assuming 50 is the fallback budget amount
  })

  it('handles LSAT payment challenges from Sphinx', async () => {
    const testError = new Error('Payment Required')

    testError.status = 402
    testError.headers = new Headers()
    testError.headers.set('www-authenticate', 'LSAT macaroon="baseMacaroon", invoice="invoice"')

    isSphinx.mockReturnValue(true)
    sphinx.setBudget.mockResolvedValue({ budget: 100 })
    buyLsat.mockRejectedValue(testError)

    lsatJs.Lsat.fromHeader.mockReturnValue({
      invoice: 'invoice',
      baseMacaroon: 'baseMacaroon',
      id: 'id',
    })

    sphinx.saveLsat.mockResolvedValue({ lsat: 'invoice:preimage' })

    const setBudgetMock = jest.fn()

    await payLsat(setBudgetMock)

    expect(lsatJs.Lsat.fromHeader).toHaveBeenCalled()
    expect(sphinx.saveLsat).toHaveBeenCalledWith('invoice', 'baseMacaroon', window.location.host)
    expect(setBudgetMock).toHaveBeenCalledWith(100)
  })
})
