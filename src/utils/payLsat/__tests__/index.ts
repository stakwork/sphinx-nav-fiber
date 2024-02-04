import { renderHook } from '@testing-library/react'
import * as lsatJs from 'lsat-js'
import * as sphinx from 'sphinx-bridge'
import { requestProvider } from 'webln'
import { payLsat } from '..'
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

  it('handles payment through Sphinx when Sphinx is available and setBudget response is not 0', async () => {
    isSphinx.mockReturnValueOnce(true)

    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockLocalLsat))

    sphinx.setBudget.mockResolvedValueOnce({ budget: 100 })
    sphinx.saveLsat.mockResolvedValueOnce({ lsat: 'invoice:preimage' })
    buyLsat.mockResolvedValueOnce()

    const { result } = renderHook(() => payLsat(jest.fn()))

    await result.current

    expect(localStorage.removeItem).toHaveBeenCalled()
    expect(sphinx.updateLsat).toHaveBeenCalledWith(mockLocalLsat.identifier, 'expired')
    expect(sphinx.setBudget).toHaveBeenCalledTimes(1)
    expect(sphinx.authorize).not.toHaveBeenCalled()
    expect(buyLsat).toHaveBeenCalledWith(100)
  })

  it('handles payment through Sphinx when Sphinx is available and setBudget response is 0', async () => {
    isSphinx.mockReturnValueOnce(true)

    localStorage.getItem.mockReturnValueOnce(JSON.stringify(mockLocalLsat))
    sphinx.setBudget.mockResolvedValueOnce({ budget: 0 })
    sphinx.authorize.mockResolvedValueOnce({ budget: 50 })
    sphinx.saveLsat.mockResolvedValueOnce({ lsat: 'invoice:preimage' })
    buyLsat.mockResolvedValueOnce()

    const { result } = renderHook(() => payLsat(jest.fn()))

    await result.current

    expect(localStorage.removeItem).toHaveBeenCalled()
    expect(sphinx.updateLsat).toHaveBeenCalledWith(mockLocalLsat.identifier, 'expired')
    expect(sphinx.setBudget).toHaveBeenCalledTimes(1)
    expect(sphinx.authorize).toHaveBeenCalledTimes(1)
    expect(buyLsat).toHaveBeenCalledWith(50)
  })

  it('handles payment through Sphinx when Sphinx is available and buyLsat throws a 402 error', async () => {
    isSphinx.mockReturnValueOnce(true)

    sphinx.setBudget.mockResolvedValueOnce({ budget: 0 })
    sphinx.authorize.mockResolvedValueOnce({ budget: 50 })

    const error = new Error('buyLsat error')

    error.status = 402
    error.headers = new Map([['www-authenticate', 'LSAT Header Value']])
    // Mock buyLsat to throw a 402 error
    buyLsat.mockRejectedValueOnce(error)

    const mockLsatFromHeader = {
      invoice: 'invoice',
      baseMacaroon: 'baseMacaroon',
      id: 'id',
    }

    const mockSaveLsatRes = {
      lsat: 'invoice:preimage',
    }

    lsatJs.Lsat.fromHeader.mockReturnValueOnce(mockLsatFromHeader)

    sphinx.saveLsat.mockResolvedValueOnce(mockSaveLsatRes)

    const setBudgetMock = jest.fn()

    const { result } = renderHook(() => payLsat(setBudgetMock))

    await result.current

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

  it('handles payment through Sphinx when Sphinx is available and local storage does not have an LSAT', async () => {
    isSphinx.mockReturnValueOnce(true)
    localStorage.getItem.mockReturnValueOnce(null)

    sphinx.setBudget.mockResolvedValueOnce({ budget: 100 })
    buyLsat.mockResolvedValueOnce()

    const { result } = renderHook(() => payLsat(jest.fn()))

    await result.current

    /**
     * localStorage.removeItem will be called only in second case
     * https://github.com/stakwork/sphinx-nav-fiber/blob/master/src/utils/payLsat/index.ts#L16
     * https://github.com/stakwork/sphinx-nav-fiber/blob/master/src/utils/payLsat/index.ts#L71
     */
    expect(localStorage.removeItem).toHaveBeenCalledTimes(1)
    expect(sphinx.updateLsat).not.toHaveBeenCalled()
    expect(sphinx.setBudget).toHaveBeenCalledTimes(1)
    expect(buyLsat).toHaveBeenCalledWith(100)
    expect(sphinx.saveLsat).not.toHaveBeenCalled()
  })

  it('handles payment through WebLN when Sphinx is not available', async () => {
    isSphinx.mockReturnValueOnce(false)

    requestProvider.mockResolvedValueOnce({
      sendPayment: jest.fn().mockResolvedValueOnce({ preimage: 'preimage' }),
    })

    buyLsat.mockResolvedValueOnce()

    const { result } = renderHook(() => payLsat(jest.fn()))

    await result.current

    expect(requestProvider).toHaveBeenCalled()
    expect(localStorage.setItem).not.toHaveBeenCalled()
    expect(buyLsat).toHaveBeenCalledWith(50)
  })

  it('handles payment through WebLN when Sphinx is not available and buyLsat throws a 402 error', async () => {
    isSphinx.mockReturnValueOnce(false)

    requestProvider.mockResolvedValueOnce({
      sendPayment: jest.fn().mockResolvedValueOnce({ preimage: 'preimage', invoice: 'invoice' }),
    })

    const error = new Error('buyLsat error')

    error.status = 402
    error.headers = new Map([['www-authenticate', 'LSAT Header Value']])
    // Mock buyLsat to throw a 402 error
    buyLsat.mockRejectedValueOnce(error)

    const mockLsatFromHeader = {
      invoice: 'invoice',
      baseMacaroon: 'baseMacaroon',
      id: 'id',
    }

    const mockSendPaymentRes = {
      preimage: 'preimage',
    }

    requestProvider.mockResolvedValueOnce({
      sendPayment: jest.fn().mockResolvedValueOnce(mockSendPaymentRes),
    })

    lsatJs.Lsat.fromHeader.mockReturnValueOnce(mockLsatFromHeader)

    const setBudgetMock = jest.fn()

    const { result } = renderHook(() => payLsat(setBudgetMock))

    await result.current

    expect(localStorage.removeItem).toHaveBeenCalledTimes(1)
    expect(lsatJs.Lsat.fromHeader).toHaveBeenCalled()

    expect(localStorage.setItem).toHaveBeenCalledWith(
      'lsat',
      JSON.stringify({
        macaroon: mockLsatFromHeader.baseMacaroon,
        identifier: mockLsatFromHeader.id,
        preimage: mockSendPaymentRes.preimage,
      }),
    )

    expect(setBudgetMock).toHaveBeenCalledWith(50)
  })
})
