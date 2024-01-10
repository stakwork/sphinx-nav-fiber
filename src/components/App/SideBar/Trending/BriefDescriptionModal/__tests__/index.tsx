import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { BriefDescription } from '..'

const trend = {
  topic: 'sample topic',
  audio_EN: 'sample audio url',
  tdlr: 'sample TDLR content',
  topic_tdlr: 'sample TDLR topic',
}

describe('Brief Description Component', () => {
  it('should render title', () => {
    render(<BriefDescription onClose={() => null} trend={trend} />)

    expect(screen.getByText('Sample Trend')).toBeInTheDocument()
  })

  it('should render audio button', () => {
    render(<BriefDescription onClose={() => null} trend={trend} />)

    expect(screen.getByRole('button', { name: 'Listen' })).toBeInTheDocument()
  })

  it('should render TLDR content', () => {
    render(<BriefDescription onClose={() => null} trend={trend} />)

    expect(screen.getByText('Sample TLDR Content')).toBeInTheDocument()
  })
})

describe('BriefDescription Component - Audio Controls', () => {
  let audioButton

  beforeEach(() => {
    render(<BriefDescription onClose={() => null} trend={trend} />)
    audioButton = screen.getByRole('button', { name: 'Listen' })
  })

  it('should initially show audio as paused', () => {
    expect(screen.getByRole('audio')).toHaveProperty('paused', true)
  })

  it('should toggle play/pause when the audio button is clicked', () => {
    fireEvent.click(audioButton)

    expect(screen.getByRole('audio')).toHaveProperty('paused', false)

    fireEvent.click(audioButton)

    expect(screen.getByRole('audio')).toHaveProperty('paused', true)
  })
})

describe('BriefDescription Component - Modal Controls', () => {
  it('should call onClose when closing the modal', () => {
    const onCloseMock = jest.fn()

    render(<BriefDescription onClose={onCloseMock} trend={trend} />)

    fireEvent.keyDown(window, { key: 'Escape' })

    expect(onCloseMock).toHaveBeenCalled()
  })
})
