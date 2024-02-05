import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Timestamp } from '..'
import { colors } from '../../../../../../utils/colors'
import { formatDescription } from '../../../../../../utils/formatDescription'
import { formatTimestamp } from '../../../../../../utils/formatTimestamp'

// Mock utility functions
jest.mock('../../../../../../utils/formatTimestamp')
jest.mock('../../../../../../utils/formatDescription')

jest.mock('../Equalizer', () => ({
  Equalizer: jest.fn(() => <div data-testid="mock-equalizer" />),
}))

describe('Timestamp Component', () => {
  const mockTimestamp = {
    timestamp: '00:10:00',
    show_title: 'Test Show Title',
  }

  beforeEach(() => {
    // Mock implementations to return a simple transformed string for testing
    formatTimestamp.mockImplementation((timestamp) => `Formatted: ${timestamp}`)
    formatDescription.mockImplementation((desc) => `Desc: ${desc}`)
  })

  afterAll(() => {
    jest.clearAllMocks()
  })

  it('renders formatted timestamp and show title', () => {
    const { getByText } = render(
      <Timestamp
        isSelected={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setOpenClip={() => {}}
        timestamp={mockTimestamp}
      />,
    )

    expect(getByText(`Formatted: ${mockTimestamp.timestamp}`)).toBeInTheDocument()
    expect(getByText(`Desc: ${mockTimestamp.show_title}`)).toBeInTheDocument()
  })

  it('renders MdPlayArrow icon when isSelected is true', () => {
    const { getByTestId } = render(
      <Timestamp
        isSelected
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setOpenClip={() => {}}
        timestamp={mockTimestamp}
      />,
    )

    expect(getByTestId('play-arrow-icon')).toBeInTheDocument()
  })

  it('renders MdAccessTime icon when isSelected is false', () => {
    const { getByTestId } = render(
      <Timestamp
        isSelected={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setOpenClip={() => {}}
        timestamp={mockTimestamp}
      />,
    )

    expect(getByTestId('access-time-icon')).toBeInTheDocument()
  })

  it('calls onClick when component is clicked', () => {
    const handleClick = jest.fn()

    const { getByTestId } = render(
      <Timestamp
        isSelected={false}
        onClick={handleClick}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setOpenClip={() => {}}
        timestamp={mockTimestamp}
      />,
    )

    fireEvent.click(getByTestId('wrapper'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('calls setOpenClip with correct timestamp when info icon is clicked', () => {
    const handleOpenClip = jest.fn()

    const { getByTestId } = render(
      <Timestamp isSelected={false} setOpenClip={handleOpenClip} timestamp={mockTimestamp} />,
    )

    fireEvent.click(getByTestId('info-icon'))
    expect(handleOpenClip).toHaveBeenCalledWith(mockTimestamp)
  })

  it('changes background color when isSelected is true', () => {
    const { getByTestId } = render(
      <Timestamp
        isSelected
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setOpenClip={() => {}}
        timestamp={mockTimestamp}
      />,
    )

    expect(getByTestId('wrapper')).toHaveStyle(`background: rgba(97, 138, 255, 0.1)`)
  })

  it('has default background color when isSelected is false', () => {
    const { getByTestId } = render(
      <Timestamp
        isSelected={false}
        // eslint-disable-next-line @typescript-eslint/no-empty-function
        setOpenClip={() => {}}
        timestamp={mockTimestamp}
      />,
    )

    expect(getByTestId('wrapper')).toHaveStyle(`background: ${colors.BG1}`)
  })
})
