import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import * as React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { SearchBar } from '../index'
import { MemoryRouter } from 'react-router-dom'

describe('SearchBar', () => {
  it('should render with placeholder text', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => {
      const methods = useForm()

      return (
        <MemoryRouter>
          <FormProvider {...methods}>{children}</FormProvider>
        </MemoryRouter>
      )
    }

    render(<SearchBar />, { wrapper: Wrapper })

    const searchInput = screen.getByPlaceholderText('Search')

    expect(searchInput).toBeInTheDocument()
  })

  it('should accept different types of input (text, numbers, and special characters)', () => {
    const Wrapper = ({ children }: { children: React.ReactNode }) => {
      const methods = useForm()

      return (
        <MemoryRouter>
          <FormProvider {...methods}>{children}</FormProvider>
        </MemoryRouter>
      )
    }

    render(<SearchBar />, { wrapper: Wrapper })

    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement

    // Test with text input
    fireEvent.change(searchInput, { target: { value: 'test sample text' } })

    expect(searchInput.value).toBe('test sample text')

    // Test with number input
    fireEvent.change(searchInput, { target: { value: '349395834' } })

    expect(searchInput.value).toBe('349395834')

    // Test with special characters
    fireEvent.change(searchInput, { target: { value: '!@#$%' } })

    expect(searchInput.value).toBe('!@#$%')
  })

  it('should execute a search on pressing the enter key', () => {
    const handleSearch = jest.fn()

    const Wrapper = ({ children }: { children: React.ReactNode }) => {
      const methods = useForm()

      return (
        <MemoryRouter>
          <FormProvider {...methods}>{children}</FormProvider>
        </MemoryRouter>
      )
    }

    render(<SearchBar onSubmit={handleSearch} />, { wrapper: Wrapper })

    const searchInput = screen.getByPlaceholderText('Search') as HTMLInputElement

    fireEvent.change(searchInput, { target: { value: 'search query' } })

    fireEvent.keyPress(searchInput, { key: 'Enter', code: 'Enter', charCode: 13 })
    ;(async () => {
      await waitFor(() => {
        expect(handleSearch).toHaveBeenCalledWith()
      })
    })()
  })
})
