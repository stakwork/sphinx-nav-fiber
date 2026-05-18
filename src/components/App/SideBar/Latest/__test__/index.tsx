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
  const fetchDataMock = jest.fn()
  const setAbortRequestsMock = jest.fn()
  const setNodeCountMock = jest.fn()
  const setBudgetMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    mockedUseDataStore.mockReturnValue({ fetchData: fetchDataMock, setAbortRequests: setAbortRequestsMock })
    mockedUseUserStore.mockReturnValue({ nodeCount: 0, setNodeCount: setNodeCountMock, setBudget: setBudgetMock })
  })

  test('renders latest heading and icon', () => {
    const { getByText } = render(<LatestView />)
    const galleryIcon = document.querySelector('.heading__icon') as Node

    expect(getByText('Latest')).toBeInTheDocument()
    expect(galleryIcon).toBeInTheDocument()
  })

  test('does not show the latest button when there are no nodes', () => {
    const { queryByTestId } = render(<LatestView />)

    expect(queryByTestId('see_latest_button')).toBeNull()
  })

  test('shows the latest button when new nodes are available', () => {
    mockedUseUserStore.mockReturnValue({ nodeCount: 5, setNodeCount: setNodeCountMock, setBudget: setBudgetMock })

    const { getByTestId } = render(<LatestView />)

    expect(getByTestId('see_latest_button')).toHaveTextContent('See Latest (5)')
  })

  test('calls latest endpoint with param on button click', async () => {
    mockedUseUserStore.mockReturnValue({ nodeCount: 5, setNodeCount: setNodeCountMock, setBudget: setBudgetMock })

    const { getByTestId } = render(<LatestView />)

    fireEvent.click(getByTestId('see_latest_button'))

    await waitFor(() => {
      expect(fetchDataMock).toHaveBeenCalledWith(setBudgetMock, setAbortRequestsMock, '', { skip_cache: 'true' })
      expect(setNodeCountMock).toHaveBeenCalledWith('CLEAR')
    })
  })
})