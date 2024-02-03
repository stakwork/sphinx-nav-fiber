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

const localStorageMock = (() => {
  let store: Record<string, string> = {}

  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value.toString()
    },
    removeItem: (key: string) => {
      delete store[key]
    },
    clear: () => {
      store = {}
    },
  }
})()

Object.defineProperty(window, 'localStorage', { value: localStorageMock })

describe('payLsat', () => {
  beforeEach(() => {
    localStorage.clear()
    jest.clearAllMocks()
  })

  it('handles payment through Sphinx when Sphinx is available', async () => {
    ;(isSphinx as jest.Mock).mockReturnValue(true)
    sphinx.setBudget.mockResolvedValue({ budget: 100 })
    sphinx.saveLsat.mockResolvedValue({ lsat: 'invoice:preimage' })
    buyLsat.mockResolvedValue()

    const { result } = renderHook(() => payLsat(jest.fn()))

    await result.current

    expect(sphinx.setBudget).toHaveBeenCalled()
    expect(localStorage.getItem('lsat')).toBe(null)

    expect(buyLsat).toHaveBeenCalledWith(100)
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
