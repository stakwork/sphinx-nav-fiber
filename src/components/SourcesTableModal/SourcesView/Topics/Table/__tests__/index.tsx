/* eslint-disable padding-line-between-statements */
import React from 'react'
import { render, fireEvent, screen, waitFor } from '@testing-library/react'
import '@testing-library/jest-dom'
import { TableRowComponent } from '../TableRow'
import { Topic } from '~/types'

describe('TableRowComponent', () => {
  const mockOnClick = jest.fn()
  const mockOnSearch = jest.fn()

  const singleEdgeTopic: Topic = {
    topic: 'Test Topic',
    edgeList: ['Edge1'],
    edgeCount: 1,
    date_added_to_graph: '123456789',
    ref_id: '1',
    muted_topic: 'false',
  }

  const multipleEdgesTopic: Topic = {
    ...singleEdgeTopic,
    edgeList: ['Edge1', 'Edge2'],
    edgeCount: 2,
  }

  it('does not show hover state for topics with only one edge', () => {
    render(<TableRowComponent onClick={mockOnClick} onSearch={mockOnSearch} topic={singleEdgeTopic} />)

    waitFor(() => {
      const cell = screen.getByText(singleEdgeTopic.topic)

      fireEvent.mouseEnter(cell)
      expect(screen.queryByText(singleEdgeTopic.edgeList.join(', '))).not.toBeInTheDocument()
    })
  })

  it('shows hover state for topics with more than one edge', () => {
    render(<TableRowComponent onClick={mockOnClick} onSearch={mockOnSearch} topic={multipleEdgesTopic} />)

    waitFor(() => {
      const cell = screen.getByText(multipleEdgesTopic.topic)

      fireEvent.mouseEnter(cell)
      expect(screen.getByText(multipleEdgesTopic.edgeList.join(', '))).toBeInTheDocument()
    })
  })

  it('ensures each row is the same size', () => {
    const { container } = render(
      <>
        <TableRowComponent onClick={mockOnClick} onSearch={mockOnSearch} topic={singleEdgeTopic} />
        <TableRowComponent onClick={mockOnClick} onSearch={mockOnSearch} topic={multipleEdgesTopic} />
      </>,
    )

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const rows = container.querySelectorAll('tr')

    expect(rows).toHaveLength(2)
    expect(rows[0].getBoundingClientRect().height).toEqual(rows[1].getBoundingClientRect().height)
  })
})
