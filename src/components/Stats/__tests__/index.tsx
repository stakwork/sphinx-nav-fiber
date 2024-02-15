import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import React from 'react'
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

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
}))

jest.mock('~/stores/useUserStore', () => ({
  useUserStore: jest.fn(),
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
  })

  it('test formatting of numbers', () => {
    const mockedFormatStats = jest.spyOn(formatStats, 'formatNumberWithCommas')

    render(<Stats />)
    ;(async () => {
      await waitFor(() => {
        expect(mockedFormatStats).toHaveBeenCalledTimes(7)
      })
    })()
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
  })
})
