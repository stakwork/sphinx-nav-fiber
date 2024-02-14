import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { MediaPlayer } from '..'
import { usePlayerStore } from '../../../../../../stores/usePlayerStore'

window.React = React

jest.mock('react-player', () => jest.fn((props) => <div data-testid="react-player" {...props} />))

jest.mock('~/stores/usePlayerStore', () => ({
  usePlayerStore: jest.fn(),
}))

jest.mock('react-spinners', () => ({
  ...jest.requireActual('react-spinners'),
  ClipLoader: jest.fn(() => <div data-testid="loading-icon" />),
}))

const mockedUsePlayerStore = usePlayerStore as jest.MockedFunction<typeof usePlayerStore>
const mockedUseState = jest.spyOn(React, 'useState')

describe('MediaPlayerComponent fullscreen test', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    mockedUsePlayerStore.mockImplementation(() => defaultPlayerStore)

    const setFullScreenMock = jest.fn()
    const setIsBufferingMock = jest.fn()
    const setIsReady = jest.fn()
    const setIsMouseNearBottomMock = jest.fn()

    mockedUseState.mockReturnValueOnce([true, setFullScreenMock])
    mockedUseState.mockReturnValueOnce([true, setIsBufferingMock])
    mockedUseState.mockReturnValueOnce([true, setIsReady])
    mockedUseState.mockReturnValueOnce([false, setIsMouseNearBottomMock])
  })

  it('asserts that toolbar appears on hover for fullscreen display', () => {
    jest.mock('../Toolbar', () => ({
      ...jest.requireActual('../Toolbar'),
      Toolbar: jest.fn((props) => <div data-testid="toolbar-component" {...props} />),
    }))

    mockedUsePlayerStore.mockReturnValue(defaultPlayerStore)

    const { getByTestId } = render(<MediaPlayer hidden={false} />)

    const ReactPlayer = getByTestId('react-player')

    fireEvent.mouseOver(ReactPlayer)
    ;(async () => {
      await waitFor(() => expect(getByTestId('toolbar-component')).toBeInTheDocument())
    })()
  })
})

const defaultPlayerStore = [
  'true',
  120,
  7872,
  jest.fn(),
  jest.fn(),
  jest.fn(),
  {
    weight: 2,
    id: '94d9043a-6ff9-4ae5-8731-b1aa398a5cb9',
    name: 'What Bitcoin Did with Peter McCormack:Bitcoin in the Boardroom with Michael Saylor:01:36:22-01:41:20',
    label: 'What Bitcoin Did with Peter McCormack',
    type: 'podcast',
    node_type: 'clip',
    text: '',
    details: {
      boost: 0,
      date: 1602561600,
      description: 'Non-monetary incentives for supporting [[BTC]]',
      episode_title: 'Bitcoin in the Boardroom with Michael Saylor',
      guests: ['Michael Saylor'],
      image_url:
        'https://d1gd7b7slyku8k.cloudfront.net/knowledge-graph-joe/content-images/7a046fc8-b9a4-4a61-9809-c4a392284856_s.jpg',
      keyword: false,
      link: 'https://chtbl.com/track/282487/traffic.libsyn.com/secure/whatbitcoindid/WBD268.mp3',
      node_type: 'clip',
      ref_id: '94d9043a-6ff9-4ae5-8731-b1aa398a5cb9',
      show_title: 'What Bitcoin Did with Peter McCormack',
      text: '',
      timestamp: '01:36:22-01:41:20',
      topics: ['btc'],
      type: 'podcast',
      weight: 2,
    },
    image_url:
      'https://d1gd7b7slyku8k.cloudfront.net/knowledge-graph-joe/content-images/7a046fc8-b9a4-4a61-9809-c4a392284856_s.jpg',
    colors: [],
    boost: 0,
  },
  10,
  jest.fn(),
  false,
  jest.fn(),
  jest.fn(),
]

// export const loader = async ({ request }: LoaderFunctionArgs) => {
//   return null
// }
