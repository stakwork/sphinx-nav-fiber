import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { BudgetStep } from '..'
import * as fetchSourcesDataModule from '../../../../network/fetchSourcesData'

jest.mock('../../../../network/fetchSourcesData')

const mockGetPriceData = fetchSourcesDataModule.getPriceData as jest.Mock

window.React = React

jest.mock('~/stores/useUserStore', () => ({
  ...jest.requireActual('~/stores/useUserStore'),
  useUserStore: () => ({
    isAdmin: false,
    pubKey: '',
    budget: 10,
    nodeCount: 0,
    tribeUuid: '',
    tribeHost: '',
    setIsAdmin: jest.fn(),
    setPubKey: jest.fn(),
    setBudget: jest.fn(),
    setNodeCount: jest.fn(),
    setTribeUuid: jest.fn(),
    setTribeHost: jest.fn(),
  }),
}))

describe('Rendering', () => {
  test('renders "BudgetStep" component with correct elements', () => {
    const { getByText, getByTestId } = render(<BudgetStep loading={false} onClick={() => null} />)

    expect(getByText('Approve Cost')).toBeInTheDocument()
    expect(getByText('COST')).toBeInTheDocument()
    expect(getByText('BUDGET')).toBeInTheDocument()
    expect(getByText('10 sats')).toBeInTheDocument()
    expect(getByTestId('check-icon')).toBeInTheDocument()
    expect(getByText('Approve')).toBeInTheDocument()
  })

  test('displays the correct formatted budget', () => {
    const { getByText } = render(<BudgetStep loading={false} onClick={() => null} />)

    expect(getByText('10 sats')).toBeInTheDocument()
  })

  test.skip('renders 0 sats component with getPrice api response is free', async () => {
    const mockPrice = {
      data: {
        price: 0,
      },
    }

    mockGetPriceData.mockResolvedValue(mockPrice)

    const { findByText, getByText, getByTestId, queryByText } = render(
      <BudgetStep loading={false} onClick={() => null} />,
    )

    const mockPriceRes = await mockGetPriceData()

    expect(mockPriceRes.data.price).toBe(0)

    expect(await findByText('Approve Cost')).toBeVisible()
    expect(getByText('Approve Cost')).toBeInTheDocument()
    expect(getByText(`0 sats`)).toBeInTheDocument()
    expect(queryByText(`10 sats`)).not.toBeInTheDocument()
    expect(getByTestId('check-price')).toBeInTheDocument()
    expect(getByTestId('check-price').textContent).toBe('0 sats')
    expect(getByTestId('check-price').textContent).not.toBe('10 sats')
  })
})

describe('Behavior', () => {
  test('calls onClick when "Approve" button is clicked and not loading', () => {
    const onClickMock = jest.fn()

    const { getByTestId } = render(<BudgetStep loading={false} onClick={onClickMock} />)

    fireEvent.click(getByTestId('check-icon'))

    expect(onClickMock).toHaveBeenCalledTimes(1)
  })

  test('disables "Approve" button when loading is true', () => {
    const { getByText } = render(<BudgetStep loading onClick={() => null} />)

    const approveButton = getByText('Approve')

    expect(approveButton).toBeDisabled()
  })
})
