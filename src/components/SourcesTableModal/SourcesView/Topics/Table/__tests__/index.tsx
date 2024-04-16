/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { Topic } from '~/types'
import { TopicRow } from '../TableRow'

describe('TableRowComponent', () => {
  const mockOnClick = jest.fn()
  const mockOnSearch = jest.fn()
  const mockCheckedStates = { '1': false }
  const mockSetCheckedStates = jest.fn()

  const singleEdgeTopic: Topic = {
    topic: 'Test Topic',
    edgeList: ['Edge1'],
    edgeCount: 1,
    date_added_to_graph: '123456789',
    ref_id: '1',
    is_muted: 'false',
  }

  const multipleEdgesTopic: Topic = {
    ...singleEdgeTopic,
    edgeList: ['Edge1', 'Edge2'],
    edgeCount: 2,
  }

  it('Does not show hover state for topics with only one edge', () => {
    render(
      <TopicRow
        checkedStates={mockCheckedStates}
        onClick={mockOnClick}
        onSearch={mockOnSearch}
        setCheckedStates={mockSetCheckedStates}
        topic={singleEdgeTopic}
      />,
    )

    waitFor(() => {
      const cell = screen.getByText(singleEdgeTopic.topic)

      fireEvent.mouseEnter(cell)
      expect(screen.queryByText(singleEdgeTopic.edgeList.join(', '))).not.toBeInTheDocument()
    })
  })

  it('Shows hover state for topics with more than one edge', () => {
    render(
      <TopicRow
        checkedStates={mockCheckedStates}
        onClick={mockOnClick}
        onSearch={mockOnSearch}
        setCheckedStates={mockSetCheckedStates}
        topic={multipleEdgesTopic}
      />,
    )

    waitFor(() => {
      const cell = screen.getByText(multipleEdgesTopic.topic)

      fireEvent.mouseEnter(cell)
      expect(screen.getByText(multipleEdgesTopic.edgeList.join(', '))).toBeInTheDocument()
    })
  })

  it('Ensures each row is the same size', () => {
    const { container } = render(
      <>
        <TopicRow
          checkedStates={mockCheckedStates}
          onClick={mockOnClick}
          onSearch={mockOnSearch}
          setCheckedStates={mockSetCheckedStates}
          topic={singleEdgeTopic}
        />
        <TopicRow
          checkedStates={mockCheckedStates}
          onClick={mockOnClick}
          onSearch={mockOnSearch}
          setCheckedStates={mockSetCheckedStates}
          topic={multipleEdgesTopic}
        />
      </>,
    )

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rows = container.querySelectorAll('tr')

    expect(rows).toHaveLength(2)
    expect(rows[0].getBoundingClientRect().height).toEqual(rows[1].getBoundingClientRect().height)
  })
})
