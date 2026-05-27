import '@testing-library/jest-dom'
import { fireEvent, render, screen, within } from '@testing-library/react'
import React from 'react'
import { Node } from '~/network/fetchSourcesData'
import { Table } from '..'

jest.mock('~/stores/useModalStore', () => ({
  useModal: () => ({
    open: jest.fn(),
  }),
}))

jest.mock('~/components/Stats/Animation', () => ({
  Animation: () => <div data-testid="status-animation" />,
}))

const nodes = [
  {
    node_type: 'Article',
    properties: {
      date: '1617638400',
      source_link: 'https://example.com/newer',
      status: 'pending',
    },
    ref_id: 'newer',
  },
  {
    node_type: 'Article',
    properties: {
      date: '1617552000',
      source_link: 'https://example.com/older',
      status: 'complete',
    },
    ref_id: 'older',
  },
] as unknown as Node[]

const getBodySources = () => {
  const rows = screen.getAllByRole('row').slice(1)

  return rows.map((row) => within(row).getAllByRole('cell')[3].textContent)
}

describe('View Content Table sorting', () => {
  it('sorts by date when the Date header is clicked', () => {
    render(<Table nodes={nodes} />)

    expect(getBodySources()).toEqual(['https://example.com/newer', 'https://example.com/older'])

    fireEvent.click(screen.getByRole('button', { name: /date/i }))

    expect(getBodySources()).toEqual(['https://example.com/older', 'https://example.com/newer'])
  })

  it('sorts by status when the Status header is clicked', () => {
    render(<Table nodes={nodes} />)

    fireEvent.click(screen.getByRole('button', { name: /status/i }))

    expect(getBodySources()).toEqual(['https://example.com/older', 'https://example.com/newer'])
  })
})
