/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Toolbar } from '../index'

describe('MediaPlayer in Fullscreen', () => {
  it('Shows the progress bar in fullscreen mode', () => {
    const { getByTestId } = render(
      <Toolbar
        duration={120}
        handleProgressChange={jest.fn()}
        handleVolumeChange={jest.fn()}
        isFullScreen
        isPlaying={false}
        onFullScreenClick={jest.fn()}
        playingTime={0}
        setIsPlaying={jest.fn()}
        showToolbar
      />,
    )

    const fullscreenButton = getByTestId('fullscreen-button')

    fireEvent.click(fullscreenButton)

    const progressBar = getByTestId('progress-bar')

    expect(progressBar).toBeInTheDocument()
  })
})
