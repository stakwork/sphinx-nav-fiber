import { ThemeProvider } from '@mui/material'
import { render, renderHook, RenderResult } from '@testing-library/react'
import React, { ReactElement } from 'react'
import { FormProvider, useForm, useFormContext } from 'react-hook-form'
import { MemoryRouter } from 'react-router-dom'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { SearchHeader } from '..'
import { appTheme } from '../../../Providers'

const QUERY_SEARCH = 'satoshi'

jest.mock('react-hook-form', () => ({
  ...jest.requireActual('react-hook-form'),
  useFormContext: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useSearchParams: () => [new URLSearchParams({ q: QUERY_SEARCH })],
}))

Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: jest.fn().mockImplementation(() => ({
    matches: false,
    addListener: jest.fn(),
    removeListener: jest.fn(),
  })),
})

const renderWithProviders = (ui: ReactElement): RenderResult => {
  const { result } = renderHook(() =>
    useForm<{ search: string }>({
      defaultValues: {
        search: QUERY_SEARCH,
      },
    }),
  )

  return render(
    <MemoryRouter>
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <FormProvider {...result.current}>{ui}</FormProvider>
        </StyleThemeProvider>
      </ThemeProvider>
    </MemoryRouter>,
  )
}

describe('SearchHeader Component', () => {
  let setValueMock: jest.Mock

  beforeEach(() => {
    setValueMock = jest.fn()

    const useFormContextMock = useFormContext as jest.Mock

    useFormContextMock.mockReturnValue({
      setValue: setValueMock,
      register: jest.fn(() => ({ name: 'search', value: QUERY_SEARCH })),
      watch: jest.fn((field: string) => (field === 'search' ? QUERY_SEARCH : undefined)),
    })
  })

  it('should call setValue with "search" and the correct query value on mount', () => {
    renderWithProviders(<SearchHeader />)
    expect(setValueMock).toHaveBeenCalledWith('search', QUERY_SEARCH)
  })

  it('should display the correct search query in the input field', () => {
    const { queryByTestId } = renderWithProviders(<SearchHeader />)
    const searchInput = queryByTestId('search_input') as HTMLInputElement

    expect(searchInput.value).toBe(QUERY_SEARCH)
  })
})
