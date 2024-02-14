import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { Relevance } from '..'
import { useAppStore } from '../../../../../stores/useAppStore'
import { useDataStore, useFilteredNodes } from '../../../../../stores/useDataStore'

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
