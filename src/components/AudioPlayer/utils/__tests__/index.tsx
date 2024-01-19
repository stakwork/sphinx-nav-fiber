import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { AudioPlayer } from '../../index'

jest.mock('lodash', () => ({
  isUndefined: jest.fn(),
}))

describe('AudioPlayer Component', () => {
  let mockOnLoaded
  let mockOnError
  let mockOnPause

  beforeEach(() => {
    mockOnLoaded = jest.fn()
    mockOnError = jest.fn()
    mockOnPause = jest.fn()

    Object.defineProperty(global.window.HTMLAudioElement.prototype, 'currentTime', {
      writable: true,
      value: 0, // Initial value, you can set this to any default
    })
  })

  test('renders correctly', () => {
    const { container } = render(
      <AudioPlayer mediaUrl="test.mp3" onLoaded={mockOnLoaded} onPause={mockOnPause} timestamp="00:00:00" />,
    )

    const audioElement = container.querySelector('#audio-player')

    expect(audioElement).toBeInTheDocument()
  })

  test('calls onLoaded when audio metadata is loaded', () => {
    const { container } = render(
      <AudioPlayer mediaUrl="test.mp3" onLoaded={mockOnLoaded} onPause={mockOnPause} timestamp="00:00:00" />,
    )

    const audioElement = container.querySelector('#audio-player')

    fireEvent.loadedMetadata(audioElement)
    expect(mockOnLoaded).toHaveBeenCalled()
  })

  test('calls onError when audio fails to load', () => {
    const { container } = render(
      <AudioPlayer mediaUrl="test.mp3" onError={mockOnError} onPause={mockOnPause} timestamp="00:00:00" />,
    )

    const audioElement = container.querySelector('#audio-player')

    fireEvent.error(audioElement)
    expect(mockOnError).toHaveBeenCalled()
  })

  test('plays audio when play prop is true', () => {
    render(<AudioPlayer mediaUrl="test.mp3" onLoaded={mockOnLoaded} onPause={mockOnPause} play timestamp="00:00:00" />)
  })

  test('pauses audio when play prop is false', () => {
    render(<AudioPlayer mediaUrl="test.mp3" onPause={mockOnPause} play={false} timestamp="00:00:00" />)
  })

  test('seeks to the correct time based on timestamp', () => {
    const timestamp = '00:01:30'
    const expectedTime = 90
    const { container } = render(<AudioPlayer mediaUrl="test.mp3" onPause={mockOnPause} timestamp={timestamp} />)
    const audioElement = container.querySelector('#audio-player')

    if (audioElement instanceof HTMLAudioElement) {
      // Assert that audioElement.currentTime is set correctly
      expect(audioElement.currentTime).toBe(expectedTime)
    } else {
      throw new Error('Audio element not found')
    }
  })
})
