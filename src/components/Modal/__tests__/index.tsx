/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { BaseModal } from '../index'

describe('BaseModal', () => {
  it('closes on pressing Escape', () => {
    const closeMock = jest.fn()
    render(<BaseModal id="briefDescription" onClose={closeMock} />)

    fireEvent.keyDown(document, {
      key: 'Escape',
      keyCode: 27,
    })

    waitFor(() => {
      expect(closeMock).toHaveBeenCalled()
    })
  })

  it('does not close on Command+Control+4', () => {
    const closeMock = jest.fn()
    render(<BaseModal id="briefDescription" onClose={closeMock} />)

    fireEvent.keyDown(document, {
      key: '4',
      keyCode: 52,
      metaKey: true,
      ctrlKey: true,
    })

    expect(closeMock).not.toHaveBeenCalled()
  })

  it('does not close on Command+Control+3', () => {
    const closeMock = jest.fn()
    render(<BaseModal id="briefDescription" onClose={closeMock} />)

    fireEvent.keyDown(document, {
      key: '3',
      keyCode: 51,
      metaKey: true,
      ctrlKey: true,
    })

    expect(closeMock).not.toHaveBeenCalled()
  })

  it('does not close on irrelevant keys', () => {
    const closeMock = jest.fn()
    render(<BaseModal id="briefDescription" onClose={closeMock} />)

    fireEvent.keyDown(document, {
      key: 'A',
      keyCode: 65,
    })

    expect(closeMock).not.toHaveBeenCalled()
  })

  it('does nothing when not visible', () => {
    const closeMock = jest.fn()
    render(<BaseModal id="briefDescription" onClose={closeMock} />)

    fireEvent.keyDown(document, {
      key: 'Escape',
      keyCode: 27,
    })

    expect(closeMock).not.toHaveBeenCalled()
  })

  it('handles multiple key presses correctly', () => {
    const closeMock = jest.fn()
    render(<BaseModal id="briefDescription" onClose={closeMock} />)

    fireEvent.keyDown(document, {
      key: 'Escape',
      keyCode: 27,
    })
    fireEvent.keyDown(document, {
      key: '4',
      keyCode: 52,
      metaKey: true,
      ctrlKey: true,
    })

    waitFor(() => {
      expect(closeMock).toHaveBeenCalledTimes(1)
    })
  })
})
