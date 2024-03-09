/* eslint-disable padding-line-between-statements */
import * as React from 'react'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { SourcesView } from '../index'
import { useUserStore } from '~/stores/useUserStore'
import '@testing-library/jest-dom'
import { getNodeContent } from '../../../../network/fetchSourcesData'

jest.mock('~/stores/useUserStore', () => ({
  useUserStore: jest.fn(),
}))

jest.mock('~/network/fetchSourcesData', () => ({
  getNodeContent: jest.fn(),
}))

const mockNodes = [
  {
    node_type: 'Tweet',
    properties: {
      date_added_to_graph: '1617552000', // Equivalent to 04/04/2021
      tweet_id: '123456789',
      source_link: 'http://example.com',
      status: 'complete',
    },
    ref_id: '1',
  },
  {
    node_type: 'Article',
    properties: {
      date: '1617638400', // Equivalent to 05/04/2021
      source_link: 'http://examplearticle.com',
      status: 'pending',
    },
    ref_id: '2',
  },
]

describe('SourcesView Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useUserStore as unknown as jest.Mock).mockImplementation(() => [{ isAdmin: false }, jest.fn()])
    ;(getNodeContent as jest.Mock).mockResolvedValue({ nodes: mockNodes })
  })

  it('should render the "View Content" tab correctly', () => {
    render(<SourcesView />)

    const viewContentTab = screen.getByRole('tab', { name: 'View Content' })

    expect(viewContentTab).toBeInTheDocument()
  })

  it('should only render Sphinx-related content for Sphinx users', () => {
    ;(useUserStore as unknown as jest.Mock).mockImplementation(() => [{ isAdmin: true }, jest.fn()])
    render(<SourcesView />)

    const queuedSourcesTab = screen.getByRole('tab', { name: 'Queued sources' })
    const topicsTab = screen.getByRole('tab', { name: 'Topics' })

    expect(queuedSourcesTab).toBeInTheDocument()
    expect(topicsTab).toBeInTheDocument()
  })

  it('should not render Sphinx-related content for non-Sphinx users', () => {
    render(<SourcesView />)

    const queuedSourcesTab = screen.queryByRole('tab', { name: 'Queued sources' })
    const topicsTab = screen.queryByRole('tab', { name: 'Topics' })

    waitFor(() => {
      expect(queuedSourcesTab).toBeNull()
      expect(topicsTab).toBeNull()
    })
  })

  it('should render the add content button correctly', () => {
    render(<SourcesView />)

    waitFor(() => {
      const button = screen.getByRole('button', { name: /Add Content/i })

      expect(button).toBeInTheDocument()
    })
  })

  it('should trigger the onclick event for the add content button', async () => {
    const user = userEvent.setup()

    render(<SourcesView />)

    waitFor(async () => {
      const button = screen.getByRole('button', { name: /Add Content/i })

      await user.click(button)
      expect(button).toHaveBeenCalled()
      expect(screen.getByPlaceholderText('Paste your url here...'))
    })
  })

  it('should render table if results from the GET response', async () => {
    render(<SourcesView />)

    await waitFor(() => {
      const tableRows = screen.getAllByRole('row')

      expect(tableRows.length).toBe(3)
    })
  })

  it('should use the correct output for type, source, date, and status', async () => {
    render(<SourcesView />)

    await waitFor(() => {
      const tweetRow = screen.getByText('123456789')
      const articleRow = screen.getByText('http://examplearticle.com')
      const tweetDate = screen.getByText('4/4/2021')
      const articleDate = screen.getByText('5/4/2021')
      const tweetStatus = screen.getByText('complete')
      const articleStatus = screen.getByText('pending')

      expect(tweetRow).toBeInTheDocument()
      expect(articleRow).toBeInTheDocument()
      expect(tweetDate).toBeInTheDocument()
      expect(articleDate).toBeInTheDocument()
      expect(tweetStatus).toBeInTheDocument()
      expect(articleStatus).toBeInTheDocument()
    })
  })
})
