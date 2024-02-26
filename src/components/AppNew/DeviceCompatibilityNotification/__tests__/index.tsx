import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { DeviceCompatibilityNotice } from '..'
import * as MobileHook from '../../../../hooks/useIsMobile'

jest.mock('~/hooks/useIsMobile')

const useIsMobileHook = jest.spyOn(MobileHook, 'useIsMobile')

describe('DeviceCompatibilityNotice Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    useIsMobileHook.mockReturnValue(true)
  })

  it('should display  message and button correctly', () => {
    render(<DeviceCompatibilityNotice />)

    expect(screen.getByText('Second Brain is currently')).toBeInTheDocument()
    expect(screen.getByText('optimized for Desktop.')).toBeInTheDocument()
    expect(screen.getByText('Mobile support coming soon.')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Got It' })).toBeInTheDocument()
  })

  it('hides the notice when "Got It" button is clicked', () => {
    jest.mock('../', () => jest.fn(() => <div data-testid="device-compatibility-notice" />))

    render(<DeviceCompatibilityNotice />)

    fireEvent.click(screen.getByRole('button', { name: 'Got It' }))

    expect(screen.queryByTestId('device-compatibility-notice')).not.toBeInTheDocument()
  })

  it('should not render notice when useIsMobile hook returns false.', () => {
    useIsMobileHook.mockReturnValue(false)

    jest.mock('../', () => jest.fn(() => <div data-testid="device-compatibility-notice" />))

    render(<DeviceCompatibilityNotice />)

    expect(screen.queryByTestId('device-compatibility-notice')).not.toBeInTheDocument()
  })
})
