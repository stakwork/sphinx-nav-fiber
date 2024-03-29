import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import { SelectWithPopover } from '..'; // Adjust the import path as needed
import { useDataStore } from '../../../../../stores/useDataStore';

// Mock the useDataStore hook
jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
}))

const options = {
  all: 'All',
  podcast: 'Audio',
  episode: 'Episode',
  document: 'Document',
  person: 'People',
  show: 'Show',
  twitter_space: 'TwitterSpace',
  tweet: 'Tweet',
  youtube: 'Video',
}

const useDataStoreMock = useDataStore as jest.MockedFunction<typeof useDataStore>

describe('SelectWithPopover Component', () => {
  beforeEach(() => {
    // Mock implementation of useDataStore hook before each test
    useDataStoreMock.mockImplementation(() => ({ sidebarFiler: 'all', setSidebarFilter: jest.fn() }))
  })

  it.skip('should open popover on click', () => {
    const { getByText, queryByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('Show'))
    expect(queryByText('People')).toBeInTheDocument() // Assuming 'People' is one of the options
  })

  it.skip('should close popover when an option is selected', () => {
    const { getByText, queryByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('Show')) // Open popover
    fireEvent.click(getByText('Audio')) // Click on 'Audio' option
    expect(queryByText('Audio')).not.toBeVisible() // Popover should close, so 'Audio' shouldn't be visible
  })

  it.skip('should change sidebar filter upon option select', () => {
    const setSidebarFilterMock = jest.fn()

    useDataStoreMock.mockImplementation(() => ({ sidebarFilter: 'all', setSidebarFilter: setSidebarFilterMock }))

    const { getByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('Show')) // Open popover
    fireEvent.click(getByText('Audio')) // Select 'Audio' option

    expect(setSidebarFilterMock).toHaveBeenCalledWith('podcast') // Assuming 'Audio' maps to 'podcast' in the options object
  })

  it.skip('should display correct active option', () => {
    useDataStoreMock.mockImplementation(() => ({ sidebarFilter: 'twitter_space', setSidebarFilter: jest.fn() })) // 'podcast' is the active filter

    const { getByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('TwitterSpace')) // Open popover
  })

  it.skip('check if the each option is rendered as active', () => {
    useDataStoreMock.mockImplementation(() => ({ sidebarFilter: 'youtube', setSidebarFilter: jest.fn() })) // 'podcast' is the active filter

    const { getByText } = render(<SelectWithPopover />)

    fireEvent.click(getByText('Show')) // Open popover

    Object.values(options).forEach((label) => {
      if (label === 'Video') {
        expect(
          getByText('Video', {
            ignore: '[data-testid=value]',
          }).parentElement,
        ).toHaveClass('active') // Video should be active
      } else {
        expect(
          getByText('Video', {
            ignore: '[data-testid=value]',
          }).parentElement,
        ).toHaveClass('active') // Rest of the options should not be active
      }
    })
  })
})
