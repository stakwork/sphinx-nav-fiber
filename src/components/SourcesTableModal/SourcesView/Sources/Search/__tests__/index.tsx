import React from 'react'
import { act, fireEvent, render } from '@testing-library/react'
import { Search } from '..'

describe('Search component', () => {
  it('highlights input field on click', () => {
    const { container } = render(<Search onSearch={() => jest.fn()} />)

    const inputElement = container.querySelector('input') as HTMLInputElement

    act(() => inputElement.focus())

    expect(inputElement).toHaveFocus()
  })

  it('executes search on pressing Enter key', () => {
    const onSearchMock = jest.fn()
    const { container } = render(<Search onSearch={onSearchMock} />)
    const inputElement = container.querySelector('input') as HTMLInputElement

    fireEvent.change(inputElement, { target: { value: 'test query' } })
    fireEvent.keyDown(inputElement, { key: 'Enter', code: 'Enter' })

    expect(onSearchMock).toHaveBeenCalledWith('test query')
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
