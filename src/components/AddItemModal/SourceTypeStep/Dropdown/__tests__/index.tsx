import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import React from 'react'
import { DropDown } from '..'

const NodeType: Record<string, string> = {
  Corporation: 'Corporation',
  Event: 'Event',
  Image: 'Image',
  Organization: 'Organization',
  Person: 'Person',
  Place: 'Place',
  Project: 'Project',
  Software: 'Software',
  Topic: 'Topic',
  '': 'Not selected',
}

jest.mock('~/components/Icons/ChevronDownIcon', () => jest.fn(() => <div data-testid="ChevronDownIcon" />))
jest.mock('~/components/Icons/ChevronUpIcon', () => jest.fn(() => <div data-testid="ChevronUpIcon" />))

describe('DropDown Component', () => {
  const onSelectMock = jest.fn()

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('renders with default or passed selected value', () => {
    const { rerender } = render(<DropDown onSelect={onSelectMock} />)

    // render by default value
    expect(screen.getByText('Not selected')).toBeInTheDocument()

    rerender(<DropDown onSelect={onSelectMock} selectedValue="Corporation" />)

    // render by passed value
    expect(screen.getByText('Type')).toBeInTheDocument()
    expect(screen.getByText('Corporation')).toBeInTheDocument()
  })

  it('closes the popover upon selection or clicking outside', async () => {
    render(<DropDown onSelect={onSelectMock} />)
    fireEvent.click(screen.getByText('Type'))
    fireEvent.click(screen.getByText('Corporation'))
    expect(onSelectMock).toHaveBeenCalledWith('Corporation')

    fireEvent.mouseDown(document)
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument()
  })

  it('lists all NodeType options correctly within the popover', async () => {
    render(<DropDown onSelect={onSelectMock} />)
    fireEvent.click(screen.getByText('Type'))

    await waitFor(() => screen.getByRole('presentation'))

    // opening the popoveron click action
    expect(screen.getByRole('presentation')).toBeInTheDocument()

    Object.values(NodeType).forEach((value) => {
      expect(within(screen.getByRole('presentation')).getByText(value)).toBeInTheDocument()
    })
  })

  it('shows check icon next to the currently selected value', async () => {
    render(<DropDown onSelect={onSelectMock} selectedValue="Person" />)

    fireEvent.click(screen.getByText('Type'))
    await waitFor(() => screen.getByRole('presentation'))

    const selectedItem = within(screen.getByRole('presentation')).getByText('Person')

    expect(selectedItem.parentElement?.firstChild).toHaveClass('icon')
  })

  it('mocks the onSelect prop to verify the correct value is passed when an option is clicked', async () => {
    render(<DropDown onSelect={onSelectMock} />)

    fireEvent.click(screen.getByText('Type'))
    await waitFor(() => screen.getByRole('presentation'))
    fireEvent.click(screen.getByText('Software'))
    expect(onSelectMock).toHaveBeenCalledWith('Software')

    // Verify the popover closes upon selection
    await waitFor(() => screen.queryByRole('presentation'))
    expect(screen.queryByRole('presentation')).not.toBeInTheDocument()
  })

  it('checks that active class is applied to the currently selected menu item', async () => {
    render(<DropDown onSelect={onSelectMock} selectedValue="Software" />)

    fireEvent.click(screen.getByText('Type'))
    await waitFor(() => screen.getByRole('presentation'))

    const softwareItem = within(screen.getByRole('presentation')).getByText('Software')

    expect(softwareItem.parentElement).toHaveClass('active')
  })

  it("validate the presence of custom styles and icons based on the component's state (open/close)", async () => {
    render(<DropDown onSelect={onSelectMock} selectedValue="Software" />)

    expect(screen.getByTestId('ChevronDownIcon')).toBeInTheDocument()
    expect(screen.queryByTestId('ChevronUpIcon')).toBe(null)

    fireEvent.click(screen.getByText('Type'))
    await waitFor(() => screen.getByRole('presentation'))

    expect(screen.queryByTestId('ChevronDownIcon')).toBe(null)
    expect(screen.queryByTestId('ChevronUpIcon')).toBeInTheDocument()
  })
})
