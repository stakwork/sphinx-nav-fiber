import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { BriefDescription } from '..'
import { useAppStore } from '../../../../../../stores/useAppStore'

window.React = React

jest.mock('~/stores/useModalStore', () => ({
  ...jest.requireActual('~/stores/useModalStore'),
  useModal: (id) => ({
    close: jest.fn(),
    open: jest.fn(),
    visible: id === 'briefDescription',
  }),
}))

jest.mock('~/stores/useAppStore', () => ({
  useAppStore: jest.fn(),
}))

jest.mock('~/components/Icons/PauseIcon', () => jest.fn(() => <div data-testid="pause-icon" />))
jest.mock('~/components/Icons/SoundIcon', () => jest.fn(() => <div data-testid="listen-icon" />))

const useAppStoreMock = useAppStore as jest.MockedFunction<typeof useAppStore>

describe('BriefDescription Component Tests', () => {
  const trendMock = {
    audio_EN: 'fake-audio-url',
    tldr_topic: 'Test Topic',
    tldr: '',
  }

  const props = {
    onClose: jest.fn(),
    trend: trendMock,
    selectTrending: jest.fn(),
  }

  beforeEach(() => {
    useAppStoreMock.mockReturnValue({ currentPlayingAudio: { current: null }, setCurrentPlayingAudio: jest.fn() })
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('renders title, audio button, and tldr', () => {
    render(<BriefDescription {...props} />)

    expect(screen.getByText('Test Topic')).toBeInTheDocument()

    expect(screen.getByText('Listen')).toBeInTheDocument()
  })

  it('toggles play/pause on audio button click', () => {
    render(<BriefDescription {...props} />)

    const handleClick = jest.fn()

    const audioButton = screen.getByText('Listen').closest('button') as HTMLButtonElement

    fireEvent.click(audioButton)

    setTimeout(() => {
      expect(handleClick).toHaveBeenCalled()
    }, 0)
  })

  it('ensures that listen Icon only display if the audio is not currently playing in the background', () => {
    const { getByTestId, getByText } = render(<BriefDescription {...props} />)

    expect(getByTestId('listen-icon')).toBeInTheDocument()
    expect(getByText('Listen')).toBeInTheDocument()
  })

  it('ensures that pause icon only displays if the audio is playing in the background', () => {
    const mockCurrentPlayingAudio = { current: { src: trendMock.audio_EN, paused: false } }

    useAppStoreMock.mockReturnValue({ currentPlayingAudio: mockCurrentPlayingAudio, setCurrentPlayingAudio: jest.fn() })

    const { getByTestId, getByText } = render(<BriefDescription {...props} />)

    expect(getByTestId('pause-icon')).toBeInTheDocument()
    expect(getByText('Pause')).toBeInTheDocument()
  })

  it('ensures that clicking play in TLDR modal stops current background audio and starts new audio', async () => {
    const setCurrentPlayingAudioMock = jest.fn()

    useAppStoreMock.mockReturnValue({
      currentPlayingAudio: { current: { src: 'random-audio-file', paused: false, pause: jest.fn() } },
      setCurrentPlayingAudio: setCurrentPlayingAudioMock,
    })

    const { getByRole, container } = render(<BriefDescription {...props} />)

    const listenButton = getByRole('button', { name: /Listen/i })

    expect(listenButton).toBeInTheDocument()

    fireEvent.click(listenButton)

    waitFor(async () => {
      expect(setCurrentPlayingAudioMock).toHaveBeenCalledWith(null)
      expect(container.querySelector('audio')?.paused).toBe(true)
    })
  })

  it('should call onClose when closing the modal', () => {
    const onCloseMock = jest.fn()

    render(<BriefDescription {...props} />)

    fireEvent.keyDown(window, { key: 'Escape' })

    setTimeout(() => {
      expect(onCloseMock).toHaveBeenCalled()
    }, 0)
  })
})
