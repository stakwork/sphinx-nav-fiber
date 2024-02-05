import { act, fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import Search from '..'

describe('Search component', () => {
  it('highlights input field on click', () => {
    const { container } = render(<Search onSearch={() => jest.fn()} />)

    const inputElement = container.querySelector('input') as HTMLInputElement

    act(() => inputElement.focus())

    expect(inputElement).toHaveFocus()
  })

  it('executes search on pressing Enter key', async () => {
    jest.useFakeTimers()

    const onSearchMock = jest.fn()
    const { container } = render(<Search onSearch={onSearchMock} />)
    const inputElement = container.querySelector('input') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'test query' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })

    jest.advanceTimersByTime(1000)

    await waitFor(() => expect(onSearchMock).toHaveBeenCalledWith('test query'))

    jest.useRealTimers()
  })

  it('displays clear button after executing search', () => {
    const { container, getByRole } = render(<Search onSearch={() => jest.fn()} />)

    const inputElement = container.querySelector('input') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'test query' } })

    fireEvent.click(getByRole('button'))

    expect(getByRole('button')).toBeInTheDocument()
  })

  it('clears search input on clicking clear button', () => {
    const { container } = render(<Search onSearch={() => jest.fn()} />)

    const inputElement = container.querySelector('input') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'test query' } })
    fireEvent.click(container.querySelector('button') as HTMLInputElement)

    expect(inputElement.value).toEqual('')
  })
})
