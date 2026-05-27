import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { YOUTUBE_CHANNEL } from '~/constants'
import { SourceTypeStep } from '..'

describe('SourceTypeStep', () => {
  it('shows the full YouTube channel URL', () => {
    const url = 'https://www.youtube.com/@MrBeast'

    render(<SourceTypeStep onNextStep={jest.fn()} onPrevStep={jest.fn()} type={YOUTUBE_CHANNEL} value={url} />)

    expect(screen.getByText(url)).toBeInTheDocument()
  })
})
