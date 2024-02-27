import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { Relevance } from '..'
import { useAppStore } from '../../../../../stores/useAppStore'
import { useDataStore, useFilteredNodes } from '../../../../../stores/useDataStore'
import * as relayHelper from '../../../../../utils/relayHelper'
import * as utils from '../../../../../utils/useIsMatchBreakpoint'
import * as EpisodeModule from '../Episode'

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

jest.mock('react', () => ({
  ...jest.requireActual('react'),
  useRef: jest.fn(() => ({ current: { scrollTo: jest.fn() } })),
}))

jest.mock('@mui/material', () => ({
  ...jest.requireActual('@mui/material'),
  // eslint-disable-next-line react/button-has-type
  Button: jest.fn(({ children, onClick }) => <button onClick={onClick}>{children}</button>),
}))

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
  useFilteredNodes: jest.fn(),
}))

jest.mock('~/stores/useAppStore', () => ({
  useAppStore: jest.fn(),
}))

const mockedUseDataStore = useDataStore as jest.MockedFunction<typeof useDataStore>
const mockedUseAppStore = useAppStore as jest.MockedFunction<typeof useAppStore>

const mockedUseFilterNodes = useFilteredNodes as jest.MockedFunction<typeof useFilteredNodes>
const mockedSaveConsumedContent = jest.spyOn(relayHelper, 'saveConsumedContent')
const mockedUseIsMatchBreakpoint = jest.spyOn(utils, 'useIsMatchBreakpoint')

describe('test Relevance Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    mockedUseAppStore.mockImplementation(() => [
      jest.fn().mockImplementation((selcetedNode) => selcetedNode),
      jest.fn().mockImplementation((timeStamp) => timeStamp),
    ])

    mockedUseDataStore.mockImplementation(() => [false, jest.fn().mockImplementation((relevance) => relevance)])
  })

  it('asserts that loadMore button is hidden when is filteredNodes is empty', () => {
    mockedUseFilterNodes.mockReturnValue([])

    const { getByText } = render(<Relevance isSearchResult={false} />)

    expect(() => getByText('Load More')).toThrow() // error is throw since load more button is not found
  })

  it('asserts that pagination button is displayed only when required', () => {
    mockedUseFilterNodes.mockReturnValue(new Array(59).fill(mockedFilterNodes).flat())

    const { getByText } = render(<Relevance isSearchResult={false} />)

    expect(getByText('Load More')).toBeInTheDocument()
  })

  it('asserts that 10 nodes are initial rendered', () => {
    const { container } = render(<Relevance isSearchResult={false} />)

    expect(container.querySelectorAll('.episode-wrapper').length).toBe(10)
  })

  it('asserts that pagination functions properly', () => {
    mockedUseFilterNodes.mockReturnValue(new Array(20).fill(mockedFilterNodes).flat())

    const { getByText, container } = render(<Relevance isSearchResult={false} />)

    expect(container.querySelectorAll('.episode-wrapper').length).toBe(10)

    expect(getByText('Load More')).toBeInTheDocument()

    fireEvent.click(getByText('Load More'))
    ;(async () => {
      await waitFor(() => {
        expect(container.querySelectorAll('.episode-wrapper').length).toBe(20)
        expect(getByText('Load More')).not.toBeInTheDocument()
      })
    })()
  })

  it('asserts that component renders correctly', () => {
    mockedUseFilterNodes.mockReturnValue(new Array(20).fill(mockedFilterNodes).flat())

    const { getByText, getAllByText, container } = render(<Relevance isSearchResult={false} />)

    expect(container.querySelector('#search-result-list')).toBeInTheDocument()
    expect(getAllByText(mockedFilterNodes[0].name).length).toBe(10)
    expect(getAllByText(`@${mockedFilterNodes[0].twitter_handle}`).length).toBe(10)
    expect(getByText('Load More')).toBeInTheDocument()
  })

  it('asserts that clicking node calls the expected functions from useDataStore and useAppStore', () => {
    mockedUseFilterNodes.mockReturnValue(new Array(10).fill(mockedFilterNodes).flat())

    const [setSelectedNodeMock, setSelectedTimestampMock, setSidebarOpenMock, setRelevanceSelectedMock] = new Array(
      4,
    ).fill(jest.fn())

    mockedUseAppStore.mockReturnValue([setSidebarOpenMock, setRelevanceSelectedMock])

    mockedUseDataStore.mockReturnValue([setSelectedNodeMock, setSelectedTimestampMock])

    const { container } = render(<Relevance isSearchResult={false} />)

    const nodes = container.querySelectorAll('.episode-wrapper')

    expect(nodes.length).toBe(10)

    fireEvent.click(nodes[0])
    ;(async () => {
      await waitFor(() => {
        expect(mockedSaveConsumedContent).toHaveBeenCalled()
        expect(setSelectedNodeMock).toHaveBeenCalledWith(mockedFilterNodes[0])
        expect(setSelectedTimestampMock).toHaveBeenCalledWith(mockedFilterNodes[0])
        expect(setRelevanceSelectedMock).toHaveBeenCalledWith(true)
      })
    })()
  })

  it('asserts that clicking a node closes the sidebar on mobile devices', () => {
    mockedUseFilterNodes.mockReturnValue(new Array(10).fill(mockedFilterNodes).flat())

    mockedUseIsMatchBreakpoint.mockReturnValue(true)

    const [setSelectedNodeMock, setSelectedTimestampMock, setSidebarOpenMock, setRelevanceSelectedMock] = new Array(
      4,
    ).fill(jest.fn())

    mockedUseAppStore.mockReturnValue([setSidebarOpenMock, setRelevanceSelectedMock])

    mockedUseDataStore.mockReturnValue([setSelectedNodeMock, setSelectedTimestampMock])

    const { container } = render(<Relevance isSearchResult={false} />)

    const nodes = container.querySelectorAll('.episode-wrapper')

    expect(nodes.length).toBe(10)

    fireEvent.click(nodes[0])
    ;(async () => {
      await waitFor(() => {
        expect(setSidebarOpenMock).toHaveBeenCalledWith(false)
      })
    })()
  })

  it('asserts that Episode component is passed the correct props derived from the node data', () => {
    mockedUseFilterNodes.mockReturnValue(mockedFilterNodes)

    const {
      text,
      date,
      node_type: nodeType,
      name,
      profile_picture: profilePicture,
      twitter_handle: twitterHandle,
    } = mockedFilterNodes[0]

    const EpisodeComponent = jest.spyOn(EpisodeModule, 'Episode')

    render(<Relevance isSearchResult={false} />)

    expect(EpisodeComponent).toHaveBeenCalledWith(
      expect.objectContaining({
        date,
        text,
        name,
        onClick: expect.any(Function),
        profilePicture,
        verified: false,
        boostCount: 0,
        twitterHandle,
        type: nodeType,
        episodeTitle: '',
        showTitle: '',
        sourceLink: undefined,
        link: undefined,
        imageUrl: '',
      }),
      {},
    )
  })
})

export const mockedFilterNodes = [
  {
    x: 0,
    y: 0,
    z: 0,
    label: '',
    id: '1',
    date: 1707448321,
    name: 'Olaoluwa Osuntokun',
    node_type: 'tweet',
    posted_by: {
      name: 'Olaoluwa Osuntokun',
      ref_id: 'bade588f-b241-4408-bef4-936ba6197518',
      twitter_handle: 'roasbeef',
    },
    profile_picture: 'https://pbs.twimg.com/profile_images/862769307847086080/NjfDzNYu_normal.jpg',
    ref_id: '72df6eb2-d82e-4791-b83e-815032b9642d',
    text: '@Ethan_Heilman hehe in case it wasn\'t clear, I meant that: ascribing rarity to sats is totally arbitrary, casey literally "made it up"\n\nevery sat is rare, and there are no rare sats\n\n¯\\_(ツ)_/¯',
    topics: ['Rarity', 'Arbitrariness', 'Sats'],
    tweet_id: '1755791635122938240',
    twitter_handle: 'roasbeef',
    verified: false,
  },
]
