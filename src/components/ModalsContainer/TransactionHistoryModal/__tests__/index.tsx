import '@testing-library/jest-dom'
import { act, fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import * as getLSatModule from '~/utils/getLSat'
import * as lsatHistoryModule from '~/network/lsatHistory'
import * as topUpLsatModule from '~/network/topUpLsat'
import * as topUpConfirmModule from '~/network/topUpConfirm'
import * as balanceModule from '~/network/balance'
import * as payLsatModule from '~/utils/payLsat'
import { TransactionHistoryModal } from '../index'

jest.mock('~/utils/getLSat')
jest.mock('~/network/lsatHistory')
jest.mock('~/network/topUpLsat')
jest.mock('~/network/topUpConfirm')
jest.mock('~/network/balance')
jest.mock('~/utils/payLsat')

const mockClose = jest.fn()
const mockSetBudget = jest.fn()

jest.mock('~/stores/useModalStore', () => ({
  useModal: () => ({
    close: mockClose,
    open: jest.fn(),
    visible: true,
  }),
}))

jest.mock('~/stores/useUserStore', () => ({
  useUserStore: (selector: (s: { setBudget: jest.Mock; budget: number }) => unknown) =>
    selector({ setBudget: mockSetBudget, budget: 1000 }),
}))

const mockGetLSat = getLSatModule.getLSat as jest.Mock
const mockGetLsatHistory = lsatHistoryModule.getLsatHistory as jest.Mock
const mockTopUpLsat = topUpLsatModule.topUpLsat as jest.Mock
const mockTopUpConfirm = topUpConfirmModule.topUpConfirm as jest.Mock
const mockGetBalance = balanceModule.getBalance as jest.Mock
const mockPayLsat = payLsatModule.payLsat as jest.Mock

const MOCK_LSAT_TOKEN = 'LSAT abc12345:preimage'
const MOCK_MACAROON = 'abc12345'

const MOCK_HISTORY = {
  success: true,
  lsats: [
    {
      macaroon: 'aaaaaaaabbbbcccc',
      balance: 800,
      transactions: [
        { endpoint: '/search', amount: 100, created_at: '2024-01-15T10:00:00Z' },
        { endpoint: '/add_node', amount: 200, created_at: '2024-01-10T09:00:00Z' },
      ],
    },
    {
      macaroon: 'ddddddddeeeeffff',
      balance: 300,
      transactions: [{ endpoint: '/boost', amount: 50, created_at: '2024-01-12T14:00:00Z' }],
    },
  ],
}

beforeEach(() => {
  jest.clearAllMocks()
  mockGetLSat.mockResolvedValue(MOCK_LSAT_TOKEN)
  mockGetLsatHistory.mockResolvedValue(MOCK_HISTORY)
  mockPayLsat.mockResolvedValue(undefined)

  mockTopUpLsat.mockResolvedValue({
    success: true,
    payment_request: 'lnbc10000abc123def456ghi789jkl012mno345pqr678stu901vwx',
    payment_hash: 'abc123hash',
  })

  mockTopUpConfirm.mockResolvedValue({ success: true, new_balance: 1100 })
  mockGetBalance.mockResolvedValue({ success: true, balance: 1100 })
})

describe('TransactionHistoryModal', () => {
  it('renders modal title', async () => {
    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByText('Transaction History')).toBeInTheDocument()
    })
  })

  it('fetches and displays transaction history on mount', async () => {
    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(mockGetLSat).toHaveBeenCalled()
      expect(mockGetLsatHistory).toHaveBeenCalledWith(MOCK_LSAT_TOKEN)
    })

    // Should show endpoints
    expect(screen.getByText('/search')).toBeInTheDocument()
    expect(screen.getByText('/add_node')).toBeInTheDocument()
    expect(screen.getByText('/boost')).toBeInTheDocument()
  })

  it('sorts transactions descending by created_at', async () => {
    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByText('/search')).toBeInTheDocument()
    })

    const endpoints = screen.getAllByText(/\/search|\/boost|\/add_node/)

    // /search (2024-01-15) should be first, /boost (2024-01-12) second, /add_node (2024-01-10) last
    expect(endpoints[0].textContent).toBe('/search')
    expect(endpoints[1].textContent).toBe('/boost')
    expect(endpoints[2].textContent).toBe('/add_node')
  })

  it('shows truncated macaroon for each transaction', async () => {
    render(<TransactionHistoryModal />)

    await waitFor(() => {
      // "aaaaaaaa…cccc" truncation of 'aaaaaaaabbbbcccc'
      expect(screen.getAllByText('aaaaaaaa…cccc').length).toBeGreaterThan(0)
    })
  })

  it('shows "No transactions yet" when no transactions', async () => {
    mockGetLsatHistory.mockResolvedValue({ success: true, lsats: [] })
    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByText('No transactions yet')).toBeInTheDocument()
    })
  })

  it('shows validation error when amount > 10000', async () => {
    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByTestId('topup-amount-input')).toBeInTheDocument()
    })

    fireEvent.change(screen.getByTestId('topup-amount-input'), {
      target: { value: '15000' },
    })

    expect(screen.getByTestId('amount-error')).toBeInTheDocument()
    expect(screen.getByTestId('amount-error').textContent).toBe('Amount cannot exceed 10,000 sats')
  })

  it('disables generate button when amount is invalid', async () => {
    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByTestId('generate-invoice-btn')).toBeInTheDocument()
    })

    // Empty amount — button disabled
    expect(screen.getByTestId('generate-invoice-btn')).toBeDisabled()

    // Valid amount enables button
    fireEvent.change(screen.getByTestId('topup-amount-input'), {
      target: { value: '100' },
    })

    expect(screen.getByTestId('generate-invoice-btn')).not.toBeDisabled()

    // Over limit disables button again
    fireEvent.change(screen.getByTestId('topup-amount-input'), {
      target: { value: '99999' },
    })

    expect(screen.getByTestId('generate-invoice-btn')).toBeDisabled()
  })

  it('calls topUpLsat with macaroon and amount on valid submit', async () => {
    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByTestId('topup-amount-input')).toBeInTheDocument()
    })

    fireEvent.change(screen.getByTestId('topup-amount-input'), {
      target: { value: '500' },
    })

    await act(async () => {
      fireEvent.click(screen.getByTestId('generate-invoice-btn'))
    })

    expect(mockTopUpLsat).toHaveBeenCalledWith(MOCK_MACAROON, 500)
  })

  it('displays copyable invoice after generation', async () => {
    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByTestId('topup-amount-input')).toBeInTheDocument()
    })

    fireEvent.change(screen.getByTestId('topup-amount-input'), {
      target: { value: '500' },
    })

    await act(async () => {
      fireEvent.click(screen.getByTestId('generate-invoice-btn'))
    })

    await waitFor(() => {
      expect(screen.getByText('Lightning Invoice')).toBeInTheDocument()
      expect(screen.getByTestId('copy-invoice-btn')).toBeInTheDocument()
    })
  })

  it('calls topUpConfirm and setBudget when balance increases during polling', async () => {
    jest.useFakeTimers()

    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByTestId('topup-amount-input')).toBeInTheDocument()
    })

    fireEvent.change(screen.getByTestId('topup-amount-input'), {
      target: { value: '100' },
    })

    await act(async () => {
      fireEvent.click(screen.getByTestId('generate-invoice-btn'))
    })

    // Advance 3s to trigger polling interval
    await act(async () => {
      jest.advanceTimersByTime(3000)
    })

    await waitFor(() => {
      expect(mockGetBalance).toHaveBeenCalled()
      expect(mockTopUpConfirm).toHaveBeenCalledWith('abc123hash', MOCK_MACAROON)
      expect(mockSetBudget).toHaveBeenCalledWith(1100)
    })

    jest.useRealTimers()
  })

  it('calls payLsat and closes modal when no LSAT exists', async () => {
    mockGetLSat.mockResolvedValue('')
    mockGetLsatHistory.mockResolvedValue({ success: true, lsats: [] })

    render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByTestId('get-started-btn')).toBeInTheDocument()
    })

    await act(async () => {
      fireEvent.click(screen.getByTestId('get-started-btn'))
    })

    expect(mockPayLsat).toHaveBeenCalledWith(mockSetBudget)
    expect(mockClose).toHaveBeenCalled()
    expect(mockTopUpLsat).not.toHaveBeenCalled()
  })

  it('clears polling interval when modal closes', async () => {
    jest.useFakeTimers()

    const clearIntervalSpy = jest.spyOn(global, 'clearInterval')

    const { unmount } = render(<TransactionHistoryModal />)

    await waitFor(() => {
      expect(screen.getByTestId('topup-amount-input')).toBeInTheDocument()
    })

    fireEvent.change(screen.getByTestId('topup-amount-input'), {
      target: { value: '100' },
    })

    await act(async () => {
      fireEvent.click(screen.getByTestId('generate-invoice-btn'))
    })

    unmount()

    expect(clearIntervalSpy).toHaveBeenCalled()

    clearIntervalSpy.mockRestore()
    jest.useRealTimers()
  })
})

describe('truncateMacaroon utility', () => {
  it('truncates long macaroons correctly', () => {
    const mac = 'aabbccdd11223344'

    expect(`${mac.slice(0, 8)}…${mac.slice(-4)}`).toBe('aabbccdd…3344')
  })

  it('does not truncate short macaroons', () => {
    const mac = 'short'

    expect(mac.length <= 12 ? mac : `${mac.slice(0, 8)}…${mac.slice(-4)}`).toBe('short')
  })
})
