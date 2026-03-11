import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { useUserStore } from '~/stores/useUserStore'
import { BudgetDisplay } from '..'

jest.mock('~/components/Icons/BudgetIcon', () => jest.fn(() => <div data-testid="BudgetIcon" />))

jest.mock('~/stores/useUserStore', () => ({
  useUserStore: jest.fn(),
}))

// Mock ~/utils to avoid transitive import of apiUrlFromSwarmHost (which uses import.meta.env)
// Use requireActual for formatBudget so real formatting logic is tested
const actualFormatBudget = jest.requireActual<typeof import('~/utils/formatBudget')>('~/utils/formatBudget').formatBudget
const mockFormatBudget = jest.fn((...args: Parameters<typeof actualFormatBudget>) => actualFormatBudget(...args))

jest.mock('~/utils', () => ({
  formatBudget: (...args: unknown[]) => mockFormatBudget(...(args as Parameters<typeof actualFormatBudget>)),
}))

const mockedUseUserStore = useUserStore as jest.MockedFunction<typeof useUserStore>

describe('BudgetDisplay', () => {
  const renderComponent = () => render(<MemoryRouter><BudgetDisplay /></MemoryRouter>)

  beforeEach(() => {
    jest.clearAllMocks()
    mockedUseUserStore.mockImplementation((selector: any) => selector({ budget: null, setBudget: jest.fn() }))
  })

  it('renders the BudgetIcon', () => {
    const { getByTestId } = renderComponent()

    expect(getByTestId('BudgetIcon')).toBeInTheDocument()
  })

  it('renders "?" when budget is null', () => {
    mockedUseUserStore.mockImplementation((selector: any) => selector({ budget: null, setBudget: jest.fn() }))

    const { getByText } = renderComponent()

    expect(getByText(/\?/)).toBeInTheDocument()
  })

  it('renders formatted balance and SAT label when budget is 20000', () => {
    mockedUseUserStore.mockImplementation((selector: any) => selector({ budget: 20000, setBudget: jest.fn() }))

    const { getByText } = renderComponent()

    expect(getByText(/20 000/)).toBeInTheDocument()
    expect(getByText(/SAT/)).toBeInTheDocument()
  })

  it('calls formatBudget with the value from useUserStore', () => {
    const mockBudget = 20000

    mockedUseUserStore.mockImplementation((selector: any) => selector({ budget: mockBudget, setBudget: jest.fn() }))

    renderComponent()

    expect(mockFormatBudget).toHaveBeenCalledWith(mockBudget)
  })
})
