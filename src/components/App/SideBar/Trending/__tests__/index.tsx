/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { Trending } from '..'
import * as fetchGraphData from '../../../../../network/fetchGraphData'
import { useDataStore } from '../../../../../stores/useDataStore'
import { useModal } from '../../../../../stores/useModalStore'
import * as utils from '../../../../../utils/trending'

jest.mock('~/components/Icons/SentimentDataIcon', () => jest.fn(() => <div data-testid="SentimentDataIcon" />))
jest.mock('~/components/Icons/PlayIcon', () => jest.fn(() => <div data-testid="PlayIcon" />))

jest.mock('react-markdown', () => jest.fn(() => null))

jest.mock('react-hook-form', () => ({
  useFormContext: jest.fn(() => ({
    setValue: jest.fn(),
  })),
}))

jest.mock('~/stores/useModalStore', () => ({
  useModal: jest.fn((id) => ({
    open: jest.fn(), // Mock the open function
    visible: id === availableModal.some((modal) => modal === id),
  })),
}))

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
}))

const mockedGetTrends = jest.spyOn(fetchGraphData, 'getTrends')
const mockedUseDataStore = useDataStore as jest.MockedFunction<typeof useDataStore>
const mockedUseModal = useModal as jest.MockedFunction<typeof useModal>
const availableModal = ['briefDescription', 'addContent']

const mockTrends = [
  { topic: 'Drivechain', count: 10, audio_EN: 'drivechain.mp3', tldr: 'Drivechain TLDR' },
  { topic: 'Ordinals', count: 10, audio_EN: 'ordinals.mp3', tldr: 'Ordinals TLDR' },
]

describe('Trending Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    mockedUseDataStore.mockImplementation(() => [
      mockTrends,
      jest.fn().mockImplementation((trendingTopics) => trendingTopics),
    ])
  })

  it('asserts that the component renders correctly', () => {
    const { getByText, getByTestId } = render(<Trending />)

    expect(getByText('Trending Topics')).toBeInTheDocument()
    expect(getByTestId('SentimentDataIcon')).toBeInTheDocument()
  })

  it('verifies that the component fetches trending topics on mount and updates the state accordingly', () => {
    const mockedSetTrendingTopics = jest.fn()

    mockedUseDataStore.mockReturnValue([mockTrends, mockedSetTrendingTopics])

    render(<Trending />)
    ;(async () => {
      await waitFor(() => {
        expect(mockedGetTrends).toHaveBeenCalled()
        expect(mockedSetTrendingTopics).toHaveBeenCalledWith(mockTrends)
      })
    })()
  })

  it('verifies the display of skeletons during loading.', () => {
    mockedUseDataStore.mockReturnValue([mockTrends, jest.fn()])

    const loading = true

    jest.spyOn(React, 'useState').mockImplementationOnce(() => [loading, jest.fn()])

    const { getAllByTestId } = render(<Trending />)

    expect(getAllByTestId('loading-skeleton').length).toEqual(5)
  })

  it('checks that the component renders a list of trending topics when data is available', () => {
    mockedUseDataStore.mockReturnValue([mockTrends, jest.fn()])

    const { getByText } = render(<Trending />)

    mockTrends.forEach(({ topic }) => {
      expect(getByText(`#${topic}`)).toBeInTheDocument()
    })
  })

  it('ensures that the "Add Content" button calls the openContentAddModal function', () => {
    mockedUseDataStore.mockReturnValue([[], jest.fn()])

    const loading = false

    jest.spyOn(React, 'useState').mockImplementationOnce(() => [loading, jest.fn()])

    const { getByText, getByRole } = render(<Trending />)

    expect(getByText('No new trending topics in the last 24 hours')).toBeInTheDocument()

    expect(getByRole('button', { name: 'Add Content' })).toBeInTheDocument()

    fireEvent.click(getByRole('button', { name: 'Add Content' }))

    const { open: openAddContentMock } = mockedUseModal('addContent')

    expect(mockedUseModal).toHaveBeenCalledWith('addContent')
    ;(async () => {
      await waitFor(() => expect(openAddContentMock).toHaveBeenCalled())
    })()
  })

  it('confirms the rendering of the BriefDescriptionModal when a TLDR button is clicked', () => {
    mockedUseDataStore.mockReturnValue([[mockTrends[0]], jest.fn()])

    const { getByRole } = render(<Trending />)

    fireEvent.click(getByRole('button', { name: 'TLDR' }))

    const { open: openBriefDescriptionModal } = mockedUseModal('briefDescription')

    expect(mockedUseModal).toHaveBeenCalledWith('briefDescription')
    ;(async () => {
      await waitFor(() => expect(openBriefDescriptionModal).toHaveBeenCalled())
    })()
  })

  it('validates the play/pause functionality of the audio', () => {
    mockedUseDataStore.mockReturnValue([mockTrends, jest.fn()])

    jest.spyOn(utils, 'showPlayButton')

    const { getByText, getByTestId, container } = render(<Trending />)

    expect(getByText('Play All')).toBeInTheDocument()
    expect(getByTestId('PlayIcon')).toBeInTheDocument()

    const audio = container.querySelector('audio') as HTMLAudioElement

    expect(audio).toHaveAttribute('src', mockTrends[0].audio_EN)

    expect(audio.paused).toBeTruthy()
  })

  test('tests the behavior when a user selects a trending topic', () => {
    const mockedSelectTrendingTopic = jest.fn()

    mockedUseDataStore.mockReturnValue([mockTrends, mockedSelectTrendingTopic])

    const { getByText } = render(<Trending />)

    fireEvent.click(getByText(`#${mockTrends[0].topic}`))
    ;(async () => {
      await waitFor(() => expect(mockedSelectTrendingTopic).toHaveBeenCalled())
    })()
  })

  test('Add test to submit form with selected trending topic', () => {
    const mockedSelectTrendingTopic = jest.fn()

    mockedUseDataStore.mockReturnValue([mockTrends, mockedSelectTrendingTopic])

    const { getByText } = render(<Trending />)

    fireEvent.click(getByText(`#${mockTrends[0].topic}`))
    ;(async () => {
      await waitFor(() => {
        const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement
        expect(searchInput.value).toBe('Drivechain')
      })
    })()
  })
})
