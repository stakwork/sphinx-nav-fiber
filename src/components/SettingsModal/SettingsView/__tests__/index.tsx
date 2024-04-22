/* eslint-disable padding-line-between-statements */
import { fireEvent, render, screen } from '@testing-library/react'
import * as React from 'react'
import '@testing-library/jest-dom'
import { SettingsView } from '../../index'

import * as useUserStoreModule from '../../../../../stores/useUserStore'

jest.mock('~/stores/useUserStore')
jest.mock('~/stores/useAppStore')

describe('SettingsView Component', () => {
  test('renders SettingsView component correctly for non-admin user', async () => {
    const isAdminMock = jest.fn(() => [false])

    useUserStoreModule.useUserStore.mockImplementation(isAdminMock)

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

    useUserStoreModule.useUserStore.mockImplementation(isAdminMock)

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

    useUserStoreModule.useUserStore.mockImplementation(isAdminMock)

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
