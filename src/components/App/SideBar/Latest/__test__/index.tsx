import { fireEvent, render, waitFor } from '@testing-library/react'
import { LatestView } from '..'
import { useDataStore } from '../../../../../stores/useDataStore'
import { useUserStore } from '../../../../../stores/useUserStore'

const mockedUseDataStore = useDataStore as jest.MockedFunction<typeof useDataStore>
const mockedUseUserStore = useUserStore as jest.MockedFunction<typeof useUserStore>

jest.mock('~/stores/useDataStore')
jest.mock('~/stores/useUserStore')

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: jest.fn(),
    removeListener: jest.fn(),
    addEventListener: jest.fn(),
    removeEventListener: jest.fn(),
    dispatchEvent: jest.fn(),
  })),
})

describe('LatestView Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockedUseDataStore.mockReturnValue({ fetchData: jest.fn() })
    mockedUseUserStore.mockReturnValue({ nodeCount: 0, setNodeCount: jest.fn(), setBudget: jest.fn() })
  })

  test('renders button correctly when new data added', () => {
    const { getByText } = render(<LatestView />)
    const galleryIcon = document.querySelector('.heading__icon') as Node

    expect(getByText('Latest')).toBeInTheDocument()
    expect(galleryIcon).toBeInTheDocument()
  })

  test('does not show the latest button when there are no nodes', () => {
    mockedUseUserStore.mockReturnValue({ nodeCount: 0, setNodeCount: jest.fn(), setBudget: jest.fn() })

    const { queryByText } = render(<LatestView />)

    expect(queryByText('See Latest (0)')).toBeNull()
  })

  test('calls latest endpoint with param on button click', async () => {
    const fetchDataMock = jest.fn()

    mockedUseDataStore.mockReturnValue({ fetchData: fetchDataMock })

    const setNodeCountMock = jest.fn()

    const setBudgetMock = jest.fn()

    mockedUseUserStore.mockReturnValue({ nodeCount: 5, setNodeCount: setNodeCountMock, setBudget: setBudgetMock })

    const { getByText } = render(<LatestView />)

    fireEvent.click(getByText('See Latest (5)'))

    await waitFor(() => {
      expect(fetchDataMock).toHaveBeenCalledWith(setBudgetMock, { skip_cache: 'true' })
      expect(setNodeCountMock).toHaveBeenCalledWith('CLEAR')
    })
  })
})
