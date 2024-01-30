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

  test('renders 0 sats component with getPrice api response is free', async () => {
    const mockPrice = {
      data: {
        price: 0, // you can change it to any number for test
      },
    }

    mockGetPriceData.mockResolvedValue(mockPrice)

    const { findByText, getByText, getByTestId } = render(<BudgetStep loading={false} onClick={() => null} />)

    expect(await findByText('Approve Cost')).toBeVisible()

    expect(getByText('Approve Cost')).toBeInTheDocument()
    expect(getByText('COST')).toBeInTheDocument()
    expect(getByText('BUDGET')).toBeInTheDocument()
    expect(getByText(`${mockPrice.data.price} sats`)).toBeInTheDocument()
    expect(getByTestId('check-icon')).toBeInTheDocument()
    expect(getByText('Approve')).toBeInTheDocument()
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
