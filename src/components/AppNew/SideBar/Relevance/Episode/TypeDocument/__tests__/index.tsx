import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { TypeDocument } from '..'

describe('TypeDocument component', () => {
  const props = {
    text: 'Sample text',
    type: 'Sample type',
    sourceLink: 'http://example.com',
  }

  it('renders text correctly', () => {
    render(<TypeDocument {...props} />)
    expect(screen.getByTestId('episode-description')).toHaveTextContent('Sample text')
  })

  it('renders type badge correctly', () => {
    render(<TypeDocument {...props} />)
    expect(screen.getByText('Sample type')).toBeInTheDocument()
  })

  it('renders source link correctly', () => {
    render(<TypeDocument {...props} />)

    const linkElement = screen.getByRole('link', { name: /http:\/\/example.com/i })

    expect(linkElement).toBeInTheDocument()

    expect(linkElement).toHaveAttribute('href', 'http://example.com')
  })

  it('clicking on source link does not propagate click event', () => {
    render(<TypeDocument {...props} />)

    const linkElement = screen.getByRole('link', { name: /http:\/\/example.com/i })

    const mockClickHandler = jest.fn()

    linkElement.addEventListener('click', mockClickHandler)

    userEvent.click(linkElement)

    expect(mockClickHandler).not.toHaveBeenCalled()
  })
})
