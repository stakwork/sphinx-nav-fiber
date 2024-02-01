import React from 'react'
import { render, fireEvent, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { Appearance } from '../index'
import { useDataStore } from '~/stores/useDataStore'

jest.mock('~/stores/useDataStore')

const mockedUseDataStore = useDataStore as jest.MockedFunction<typeof useDataStore>

const setItemMock = jest.fn()

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
Object.defineProperty(window, 'localStorage', {
  value: {
    setItem: setItemMock,
  },
  writable: true,
})

describe('Appearance Component Tests', () => {
  beforeEach(() => {
    mockedUseDataStore.mockReturnValue([{ graphStyle: 'split' }, jest.fn()])
  })

  test('renders Appearance component correctly', () => {
    render(<Appearance onClose={jest.fn()} />)
    expect(screen.getByText('Default graph view:')).toBeInTheDocument()
    expect(screen.getByText('Save changes')).toBeInTheDocument()
  })

  test('calls localStorage.setItem and onClose on save button click', () => {
    const mockOnClose = jest.fn()

    render(<Appearance onClose={mockOnClose} />)

    fireEvent.click(screen.getByText('Save changes'))

    expect(setItemMock).toHaveBeenCalledWith('graphStyle', { graphStyle: 'split' })
    expect(mockOnClose).toHaveBeenCalled()
  })
})
