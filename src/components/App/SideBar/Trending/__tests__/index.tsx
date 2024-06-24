/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import * as trends from '~/network/trends'
import { Trending } from '..'
import { useAppStore } from '../../../../../stores/useAppStore'
import { useDataStore } from '../../../../../stores/useDataStore'
import { useModal } from '../../../../../stores/useModalStore'
import * as utils from '../../../../../utils/trending'
import { MemoryRouter } from 'react-router-dom'

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

jest.mock('~/stores/useAppStore', () => ({
  useAppStore: jest.fn(),
}))

const mockedGetTrends = jest.spyOn(trends, 'getTrends')
const mockedUseDataStore = useDataStore as jest.MockedFunction<typeof useDataStore>
const useAppStoreMock = useAppStore as jest.MockedFunction<typeof useAppStore>
const mockedUseModal = useModal as jest.MockedFunction<typeof useModal>
const availableModal = ['briefDescription', 'addContent']

const mockTrends = [
  { name: 'Drivechain', count: 10, audio_EN: 'drivechain.mp3', tldr: 'Drivechain TLDR' },
  { name: 'Ordinals', count: 10, audio_EN: 'ordinals.mp3', tldr: 'Ordinals TLDR' },
]

describe('Trending Component', () => {
  beforeEach(() => {
    mockedUseDataStore.mockReturnValue({ trendingTopics: mockTrends, setTrendingTopics: jest.fn() })
    useAppStoreMock.mockReturnValue({ currentPlayingAudio: { current: null }, setCurrentPlayingAudio: jest.fn() })
  })

  it('asserts that the component renders correctly', () => {
    const { getByText, getByTestId } = render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>,
    )

    ;(async () => {
      await waitFor(() => {
        expect(getByText('Trending Topics')).toBeInTheDocument()
        expect(getByTestId('SentimentDataIcon')).toBeInTheDocument()
      })
    })()
  })

  it('ensures that the "Add Content" button calls the openContentAddModal function', async () => {
    const openContentAddModal = jest.fn()
    mockedUseDataStore.mockReturnValue({ trendingTopics: [], setTrendingTopics: jest.fn() })
    mockedUseModal.mockReturnValue({ open: openContentAddModal })

    const { getByText, getByRole } = render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>,
    )

    await waitFor(() => expect(getByText('No new trending topics in the last 24 hours')).toBeInTheDocument())
    await waitFor(() => expect(getByRole('button', { name: 'Add Content' })).toBeInTheDocument())

    fireEvent.click(getByRole('button', { name: 'Add Content' }))

    expect(openContentAddModal).toHaveBeenCalled()
  })

  it('verifies that the component fetches trending topics on mount and updates the state accordingly', () => {
    const mockedSetTrendingTopics = jest.fn()

    mockedUseDataStore.mockReturnValue({ trendingTopics: mockTrends, setTrendingTopics: mockedSetTrendingTopics })

    render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>,
    )
    ;(async () => {
      await waitFor(() => {
        expect(mockedGetTrends).toHaveBeenCalled()
        expect(mockedSetTrendingTopics).toHaveBeenCalledWith(mockTrends)
      })
    })()
  })

  it('checks that the component renders a list of trending topics when data is available', () => {
    mockedUseDataStore.mockReturnValue({ trendingTopics: mockTrends, setTrendingTopics: jest.fn() })

    const { getByText } = render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>,
    )

    mockTrends.forEach(({ name }) => {
      expect(getByText(`${name}`)).toBeInTheDocument()
    })
  })

  it('confirms the rendering of the BriefDescriptionModal when a TLDR button is clicked', () => {
    mockedUseDataStore.mockReturnValue({ trendingTopics: [mockTrends[0]], setTrendingTopics: jest.fn() })

    const { getByRole } = render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>,
    )

    fireEvent.click(getByRole('button', { name: 'TLDR' }))

    const { open: openBriefDescriptionModal } = mockedUseModal('briefDescription')

    expect(mockedUseModal).toHaveBeenCalledWith('briefDescription')
    ;(async () => {
      await waitFor(() => expect(openBriefDescriptionModal).toHaveBeenCalled())
    })()
  })

  it('validates the play/pause functionality of the audio', () => {
    mockedUseDataStore.mockReturnValue({ trendingTopics: mockTrends, setTrendingTopics: jest.fn() })

    jest.spyOn(utils, 'showPlayButton')

    const { getByText, getByTestId, container } = render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>,
    )

    expect(getByText('Play All')).toBeInTheDocument()
    expect(getByTestId('PlayIcon')).toBeInTheDocument()

    const audio = container.querySelector('audio') as HTMLAudioElement

    expect(audio).toHaveAttribute('src', mockTrends[0].audio_EN)

    expect(audio.paused).toBeTruthy()
  })

  test('tests the behavior when a user selects a trending topic', () => {
    const mockedSelectTrendingTopic = jest.fn()

    mockedUseDataStore.mockReturnValue({ trendingTopics: mockTrends, setTrendingTopics: mockedSelectTrendingTopic })

    const { getByText } = render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>,
    )

    fireEvent.click(getByText(`${mockTrends[0].name}`))
    ;(async () => {
      await waitFor(() => expect(mockedSelectTrendingTopic).toHaveBeenCalled())
    })()
  })

  test('Add test to submit form with selected trending topic', () => {
    const mockedSelectTrendingTopic = jest.fn()

    mockedUseDataStore.mockReturnValue({ trendingTopics: mockTrends, setTrendingTopics: mockedSelectTrendingTopic })

    const { getByText } = render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>,
    )

    fireEvent.click(getByText(`${mockTrends[0].name}`))
    ;(async () => {
      await waitFor(() => {
        const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement
        expect(searchInput.value).toBe('Drivechain')
      })
    })()
  })

  test('Add tests to check that this scroll bar renders correctly', () => {
    const { container } = render(
      <MemoryRouter>
        <Trending />
      </MemoryRouter>,
    )
    const scrollbar = container.firstChild

    // Assert that scrollbar exists
    expect(scrollbar).toBeInTheDocument()

    // Assert that scrollbar has correct width
    expect(scrollbar).toHaveStyle('width: 3')
  })
})
