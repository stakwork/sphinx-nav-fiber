/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { TopicTableProps } from '../../../types'
import { Table } from '../index'

const mockData = {
  '1': {
    ref_id: '1',
    topic: 'Topic 1',
    edgeCount: 5,
    edgeList: ['Edge1', 'Edge2'],
    date_added_to_graph: '1616161616',
    is_muted: false,
  },
  '2': {
    ref_id: '2',
    topic: 'Topic 2',
    edgeCount: 3,
    edgeList: ['Edge3', 'Edge4'],
    date_added_to_graph: '1616161617',
    is_muted: true,
  },
}

const mockIds = ['1', '2']
const mockOnTopicEdit = jest.fn()

const mockOnChangeFilter = jest.fn()
const mockSetShowMuteUnmute = jest.fn()
const mockSetCheckedStates = jest.fn()

const defaultProps: TopicTableProps = {
  showMuted: false,
  onTopicEdit: mockOnTopicEdit,
  onChangeFilter: mockOnChangeFilter,
  setShowMuteUnmute: mockSetShowMuteUnmute,
  checkedStates: {},
  setCheckedStates: mockSetCheckedStates,
}

const renderTable = (props = defaultProps) => render(<Table {...props} checkedStates={{}} />)

describe('Table Component', () => {
  beforeEach(() => {
    jest.mock('~/stores/useTopicsStore', () => ({
      useTopicsStore: jest.fn(() => [mockData, mockIds]),
    }))
  })

  test('renders the correct icons', () => {
    const { getByTestId } = renderTable()

    waitFor(async () => {
      expect(getByTestId('ThreeDotsIcons')).toBeInTheDocument()

      const button = await screen.findAllByTestId('ThreeDotsIcons')

      fireEvent.click(button)
      expect(getByTestId('ThreeDotsIcons')).toBeInTheDocument()
      expect(getByTestId('VisibilityOff')).toBeInTheDocument()
      expect(getByTestId('EditTopicIcon')).toBeInTheDocument()
      expect(getByTestId('MergeIcon')).toBeInTheDocument()
      expect(getByTestId('AddCircleIcon')).toBeInTheDocument()
    })
  })

  test('on click it opens dropdown', async () => {
    const { getByTestId } = renderTable()

    waitFor(async () => {
      fireEvent.click(getByTestId('ThreeDotsIcons'))
      await waitFor(() => expect(screen.getByText(/Rename/i)).toBeInTheDocument())
    })
  })

  test('correctly display either mute or unmute (and correct icons) depending if filtering by muted topics', async () => {
    const { rerender, getByTestId } = renderTable()

    waitFor(async () => {
      const muteButton = screen.queryByText(/Show Muted/i)

      fireEvent.click(muteButton)

      const button = await screen.findAllByTestId('ThreeDotsIcons')

      fireEvent.click(button)
      expect(getByTestId('VisibilityOff')).toBeInTheDocument()
      await waitFor(() => expect(screen.getByText(/Mute/i)).toBeInTheDocument())
    })

    rerender(<Table {...defaultProps} checkedStates={{}} showMuted />)

    waitFor(async () => {
      const unMuteButton = screen.queryByText(/Show Unmuted/i)

      fireEvent.click(unMuteButton)

      const button = await screen.findAllByTestId('ThreeDotsIcons')

      fireEvent.click(button)
      expect(getByTestId('VisibilityOn')).toBeInTheDocument()
      await waitFor(() => expect(screen.getByText(/Unmute/i)).toBeInTheDocument())
    })
  })

  test('onclick of each options triggers the correct next step', async () => {
    const { getByTestId } = renderTable()

    waitFor(async () => {
      fireEvent.click(getByTestId('ThreeDotsIcons'))

      const renameOption = await screen.findByText(/Rename/i)

      userEvent.click(renameOption)
      expect(mockOnTopicEdit).toHaveBeenCalledWith(expect.any(String), 'editTopic')

      const mergeOption = await screen.findByText(/Merge/i)

      userEvent.click(mergeOption)
      expect(mockOnTopicEdit).toHaveBeenCalledWith(expect.any(String), 'mergeTopic')

      const addEdgeOption = await screen.findByText(/rename/i)

      userEvent.click(addEdgeOption)
      expect(mockOnTopicEdit).toHaveBeenCalledWith(expect.any(String), 'addEdge')
    })
  })

  test('visibility and three dots icons are disabled when more than one value is selected', async () => {
    const { getByTestId } = renderTable()

    waitFor(async () => {
      // Simulate selecting more than one value
      mockSetCheckedStates.mockImplementation(() => ({ '1': true, '2': true }))

      await screen.findAllByTestId('ThreeDotsIcons')
      fireEvent.click(getByTestId('ThreeDotsIcons'))

      expect(getByTestId('ThreeDotsIcons')).toBeDisabled()
      expect(getByTestId('VisibilityOff')).toBeDisabled()
    })
  })
})
