/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import { ProcessingResponse, getTotalProcessing } from '~/network/fetchSourcesData'
import { Stats } from '..'
import * as network from '../../../network/fetchSourcesData'
import { useDataStore } from '../../../stores/useDataStore'
import { useUserStore } from '../../../stores/useUserStore'
import * as formatBudget from '../../../utils/formatBudget'
import * as formatStats from '../../../utils/formatStats'

jest.mock('~/network/fetchSourcesData')
jest.mock('~/components/Icons/AudioIcon', () => jest.fn(() => <div data-testid="AudioIcon" />))
jest.mock('~/components/Icons/BudgetIcon', () => jest.fn(() => <div data-testid="BudgetIcon" />))
jest.mock('~/components/Icons/NodesIcon', () => jest.fn(() => <div data-testid="NodesIcon" />))
jest.mock('~/components/Icons/TwitterIcon', () => jest.fn(() => <div data-testid="TwitterIcon" />))
jest.mock('~/components/Icons/VideoIcon', () => jest.fn(() => <div data-testid="VideoIcon" />))
jest.mock('~/components/Icons/DocumentIcon', () => jest.fn(() => <div data-testid="DocumentIcon" />))

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
}))

jest.mock('~/stores/useUserStore', () => ({
  useUserStore: jest.fn(),
}))

jest.mock('~/network/fetchSourcesData', () => ({
  getTotalProcessing: jest.fn(),
  getStats: jest.fn(),
}))

const mockedUseDataStore = useDataStore as jest.MockedFunction<typeof useDataStore>
const mockedUseUserStore = useUserStore as jest.MockedFunction<typeof useUserStore>

const mockStats = {
  audio_count: 1000,
  contributors_count: 500,
  daily_count: 200,
  episodes_count: 2000,
  node_sount: 5000,
  twitter_spaceCount: 300,
  video_count: 800,
  documents_count: 1483,
}

const mockBudget = 20000

describe('Component Test Stats', () => {
  const renderWithRouter = (component: React.ReactElement) => render(<MemoryRouter>{component}</MemoryRouter>)

  beforeEach(() => {
    jest.clearAllMocks()
    mockedUseDataStore.mockImplementation(() => [mockStats, jest.fn().mockImplementation((stats) => stats)])
    mockedUseUserStore.mockImplementation(() => [mockBudget])
  })

  it('verify that the component triggers the fetching of stats on mount.', () => {
    const mockedGetStats = jest.spyOn(network, 'getStats')

    renderWithRouter(<Stats />)
    ;(async () => {
      await waitFor(() => {
        expect(mockedGetStats).toHaveBeenCalled()
      })
    })()
  })

  it('should display null if no stats are available', () => {
    mockedUseDataStore.mockReturnValue([null, jest.fn()])

    const { container } = renderWithRouter(<Stats />)

    expect(container.innerHTML).toBe('')
  })

  it('correctly displays stats upon successful fetching.', () => {
    mockedUseDataStore.mockReturnValue([mockStats, jest.fn()])

    const { getByText } = renderWithRouter(<Stats />)

    Object.values(mockStats).forEach((value) => {
      expect(getByText(formatStats.formatNumberWithCommas(value))).toBeInTheDocument()
    })
  })

  it('test formatting of numbers', () => {
    const mockedFormatStats = jest.spyOn(formatStats, 'formatNumberWithCommas')

    renderWithRouter(<Stats />)
    ;(async () => {
      await waitFor(() => {
        expect(mockedFormatStats).toHaveBeenCalledTimes(8)
      })
    })()
  })

  it('tests that document stat pill is not displayed when the document count is zero', () => {
    mockedUseDataStore.mockReturnValue([{ ...mockStats, numDocuments: '0' }, jest.fn()])

    const { queryByTestId } = renderWithRouter(<Stats />)

    expect(queryByTestId('DocumentIcon')).toBeNull()
  })

  it('tests the formatting of the budget', () => {
    mockedUseUserStore.mockReturnValue([mockBudget])
    mockedUseDataStore.mockReturnValue([mockStats, jest.fn()])

    const mockFormatBudget = jest.spyOn(formatBudget, 'formatBudget')

    renderWithRouter(<Stats />)

    expect(mockFormatBudget).toHaveBeenCalledWith(mockBudget)
  })

  it('ensures that each stat is accompanied by its corresponding icon and label', () => {
    mockedUseDataStore.mockReturnValue([mockStats, jest.fn()])

    const { getByText, getByTestId } = renderWithRouter(<Stats />)

    Object.values(mockStats).forEach((value) => {
      expect(getByText(formatStats.formatNumberWithCommas(value))).toBeInTheDocument()
    })

    expect(getByTestId('Audio')).toBeInTheDocument()
    expect(getByTestId('Episodes')).toBeInTheDocument()
    expect(getByTestId('Node')).toBeInTheDocument()
    expect(getByTestId('Twitter')).toBeInTheDocument()
    expect(getByTestId('Video')).toBeInTheDocument()
  })

  it('should render the button only if totalProcessing is present and greater than 0', async () => {
    const mockedGetTotalProcessing = getTotalProcessing as jest.MockedFunction<() => Promise<ProcessingResponse>>

    const mockResponse: ProcessingResponse = {
      nodes: [],
      totalCount: 0,
      totalProcessing: 0,
    }

    // Now, simulate a response where totalProcessing is not present or is 0
    mockedGetTotalProcessing.mockResolvedValueOnce(mockResponse)

    // Re-render the component to reflect the new mock response
    renderWithRouter(<Stats />)

    // The button should not be visible since totalProcessing is equal to 0
    const viewContent = screen.queryByTestId('view-content')
    expect(viewContent).toBeNull()

    const mockResponse2: ProcessingResponse = {
      nodes: [],
      totalCount: 0,
      totalProcessing: 100,
    }

    // Mocking a response where totalProcessing is present and greater than 0
    mockedGetTotalProcessing.mockResolvedValueOnce(mockResponse2)

    renderWithRouter(<Stats />)

    // Wait for the component to finish loading
    await screen.findByTestId('view-content')

    // The button should be visible since totalProcessing is present and greater than 0
    const button = screen.getByText('100')
    expect(button).toBeInTheDocument()
  })
})
