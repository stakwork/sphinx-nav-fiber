/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor, screen } from '@testing-library/react'
import React from 'react'
import { Stats, StatsConfig } from '..'
import * as network from '../../../network/fetchSourcesData'
import { useDataStore } from '../../../stores/useDataStore'
import { useUserStore } from '../../../stores/useUserStore'
import * as formatBudget from '../../../utils/formatBudget'
import * as formatStats from '../../../utils/formatStats'
import { getTotalProcessing, ProcessingResponse } from '~/network/fetchSourcesData'

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
  numAudio: '1,000',
  numContributors: '500',
  numDaily: '100',
  numEpisodes: '2,000',
  numNodes: '5,000',
  numTwitterSpace: '300',
  numVideo: '800',
  numDocuments: '1483',
}

const mockBudget = 20000

describe('Component Test Stats', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockedUseDataStore.mockImplementation(() => [mockStats, jest.fn().mockImplementation((stats) => stats)])
    mockedUseUserStore.mockImplementation(() => [mockBudget])
  })

  it('verify that the component triggers the fetching of stats on mount.', () => {
    const mockedGetStats = jest.spyOn(network, 'getStats')

    render(<Stats />)
    ;(async () => {
      await waitFor(() => {
        expect(mockedGetStats).toHaveBeenCalled()
      })
    })()
  })

  it('should display null if no stats are available', () => {
    mockedUseDataStore.mockReturnValue([null, jest.fn()])

    const { container } = render(<Stats />)

    expect(container.innerHTML).toBe('')
  })

  it('correctly displayed upon successful fetching.', () => {
    mockedUseDataStore.mockReturnValue([mockStats, jest.fn()])

    const { getByText } = render(<Stats />)

    expect(getByText(mockStats.numNodes)).toBeInTheDocument()
    expect(getByText(mockStats.numAudio)).toBeInTheDocument()
    expect(getByText(mockStats.numEpisodes)).toBeInTheDocument()
    expect(getByText(mockStats.numVideo)).toBeInTheDocument()
    expect(getByText(mockStats.numTwitterSpace)).toBeInTheDocument()
    expect(getByText(mockStats.numDocuments)).toBeInTheDocument()
  })

  it('test formatting of numbers', () => {
    const mockedFormatStats = jest.spyOn(formatStats, 'formatNumberWithCommas')

    render(<Stats />)
    ;(async () => {
      await waitFor(() => {
        expect(mockedFormatStats).toHaveBeenCalledTimes(8)
      })
    })()
  })

  it('tests that document stat pill is not displayed when document is returned in the response', () => {
    mockedUseDataStore.mockReturnValue([{ ...mockStats, numDocuments: '0' }, jest.fn()])

    const { queryByTestId } = render(<Stats />)

    expect(queryByTestId('DocumentIcon')).toBeNull()
  })

  it('test the formatting of the budget', () => {
    mockedUseUserStore.mockReturnValue([mockBudget])
    mockedUseDataStore.mockReturnValue([mockStats, jest.fn()])

    const mockFormatBudget = jest.spyOn(formatBudget, 'formatBudget')

    render(<Stats />)

    expect(mockFormatBudget).toHaveBeenCalledWith(mockBudget)
  })

  it('ensure that each stat is accompanied by its corresponding icon and label', () => {
    mockedUseDataStore.mockReturnValue([mockStats, jest.fn()])

    const { getByText, getByTestId } = render(<Stats />)

    expect(getByText(mockStats.numNodes)).toBeInTheDocument()
    expect(getByText(mockStats.numAudio)).toBeInTheDocument()
    expect(getByText(mockStats.numEpisodes)).toBeInTheDocument()
    expect(getByText(mockStats.numVideo)).toBeInTheDocument()
    expect(getByText(mockStats.numTwitterSpace)).toBeInTheDocument()

    expect(getByTestId('AudioIcon')).toBeInTheDocument()
    expect(getByTestId('BudgetIcon')).toBeInTheDocument()
    expect(getByTestId('NodesIcon')).toBeInTheDocument()
    expect(getByTestId('TwitterIcon')).toBeInTheDocument()
    expect(getByTestId('VideoIcon')).toBeInTheDocument()
    expect(getByTestId('DocumentIcon')).toBeInTheDocument()
  })

  it('asserts that OnClick, prediction/content/latest endpoint is called with media type query', () => {
    const mockedSetBudget = jest.fn()
    const fetchDataMock = jest.fn()
    const setSelectedNode = jest.fn()
    mockedUseUserStore.mockReturnValue([mockBudget, mockedSetBudget])
    mockedUseDataStore.mockReturnValue([mockStats, setSelectedNode, jest.fn(), fetchDataMock])

    const { getByText } = render(<Stats />)

    StatsConfig.forEach(async ({ key, mediaType }) => {
      expect(getByText(mockStats[key])).toBeInTheDocument()
      fireEvent.click(getByText(mockStats[key]))

      await waitFor(() => {
        expect(fetchDataMock).toHaveBeenCalledWith(mockedSetBudget, { ...(mediaType ? { media_type: mediaType } : {}) })
      })
    })
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
    render(<Stats />)

    // The button should not be visible since totalProcessing is equal to 0
    const statisticsContainer = screen.queryByTestId('statistics-container')
    expect(statisticsContainer).toBeNull()

    const mockResponse2: ProcessingResponse = {
      nodes: [],
      totalCount: 0,
      totalProcessing: 100,
    }

    // Mocking a response where totalProcessing is present and greater than 0
    mockedGetTotalProcessing.mockResolvedValueOnce(mockResponse2)

    render(<Stats />)

    // Wait for the component to finish loading
    await screen.findByTestId('statistics-container')

    // The button should be visible since totalProcessing is present and greater than 0
    const button = screen.getByText('100')
    expect(button).toBeInTheDocument()
  })
})
