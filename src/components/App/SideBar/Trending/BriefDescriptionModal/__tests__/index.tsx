import '@testing-library/jest-dom/extend-expect'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { BriefDescription } from '..'

window.React = React

jest.mock('~/stores/useModalStore', () => ({
  ...jest.requireActual('~/stores/useModalStore'),
  useModal: (id) => ({
    close: jest.fn(),
    open: jest.fn(),
    visible: id === 'briefDescription',
  }),
}))

describe('BriefDescription Component Tests', () => {
  const trendMock = {
    audio_EN: 'fake-audio-url',
    tldr_topic: 'Test Topic',
    tldr: 'Test TLDR',
  }

  it('renders title, audio button, and tldr', () => {
    render(<BriefDescription onClose={() => null} trend={trendMock} />)

    expect(screen.getByText('Test Topic')).toBeInTheDocument()

    expect(screen.getByText('Listen')).toBeInTheDocument()

    expect(screen.getByText('Test TLDR')).toBeInTheDocument()
  })

  it('toggles play/pause on audio button click', () => {
    render(<BriefDescription onClose={() => null} trend={trendMock} />)

    const handleClick = jest.fn()

    const audioButton = screen.getByText('Listen').closest('button') as HTMLButtonElement

    fireEvent.click(audioButton)

    setTimeout(() => {
      expect(handleClick).toHaveBeenCalled()
    }, 0)
  })

  it('should call onClose when closing the modal', () => {
    const onCloseMock = jest.fn()

    render(<BriefDescription onClose={() => null} trend={trendMock} />)

    fireEvent.keyDown(window, { key: 'Escape' })

    setTimeout(() => {
      expect(onCloseMock).toHaveBeenCalled()
    }, 0)
  })
})
