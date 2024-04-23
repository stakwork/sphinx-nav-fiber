/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'

import { SettingsView } from '..'
import { useUserStore } from '../../../../stores/useUserStore'

jest.mock('~/stores/useUserStore')
jest.mock('~/stores/useAppStore')

const useUserStoreMock = useUserStore as jest.MockedFunction<typeof useUserStore>

describe('SettingsView Component', () => {
  test('renders SettingsView component correctly for non-admin user', async () => {
    const isAdminMock = jest.fn(() => [false])

    useUserStoreMock.mockImplementation(isAdminMock)

    render(
      <SettingsView
        onClose={() => {
          // intentionally left empty
        }}
      />,
    )

    expect(screen.getByText('Appearance')).toBeInTheDocument()
    expect(screen.queryByText('User Permissions')).toBeNull()
    expect(screen.queryByText('General')).toBeNull()
  })

  test('renders SettingsView component correctly for admin user', () => {
    const isAdminMock = jest.fn(() => [true])

    useUserStoreMock.mockImplementation(isAdminMock)

    render(
      <SettingsView
        onClose={() => {
          // intentionally left empty
        }}
      />,
    )

    expect(screen.getByText('General')).toBeInTheDocument()
    expect(screen.getByText('Appearance')).toBeInTheDocument()
    expect(screen.queryByText('User Permissions')).toBeNull()
  })

  test('handles interaction of switching tabs', () => {
    const isAdminMock = jest.fn(() => [true])

    useUserStoreMock.mockImplementation(isAdminMock)

    render(
      <SettingsView
        onClose={() => {
          // intentionally left empty
        }}
      />,
    )

    fireEvent.click(screen.getByText('Appearance'))

    expect(screen.getByText('Appearance')).toHaveClass('Mui-selected')

    expect(screen.queryByText('User Permissions')).toBeNull()
  })
})
