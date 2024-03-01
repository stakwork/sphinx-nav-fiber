import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { highlightSearchTerm } from '../Highlight'

jest.mock('~/components/Icons/NotesIcon', () => ({
  __esModule: true,
  default: () => <div />,
}))

jest.mock('~/components/common/Flex', () => ({
  __esModule: true,
  Flex: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
}))

jest.mock('~/components/common/Text', () => ({
  __esModule: true,
  Text: ({ children }: { children: React.ReactNode }) => <span>{children}</span>,
}))

describe('highlightSearchTerm', () => {
  it('should highlight a search term when it appears in the description', () => {
    const description = 'This is a test description with a search term.'
    const searchTerm = 'search term'
    const { getByText } = render(<>{highlightSearchTerm(description, searchTerm)}</>)

    expect(getByText(searchTerm)).toBeInTheDocument()
    expect(getByText(searchTerm).closest('span')).toHaveStyle(`background-color: rgba(0, 123, 255, 0.4)`)
  })

  it('should return the original description if no search term is provided', () => {
    const description = 'This is a test description without a search term.'
    const searchTerm = ''
    const { container } = render(<>{highlightSearchTerm(description, searchTerm)}</>)

    expect(container.textContent).toBe(description)
  })
})
