/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import { SourcesView } from '..'
import { useFeatureFlagStore } from '../../../../stores/useFeatureFlagStore'
import { useUserStore } from '../../../../stores/useUserStore'
import { getNodeContent } from '../../../../network/fetchSourcesData'
import { isSphinx } from '~/utils/isSphinx'

jest.mock('~/utils/isSphinx', () => ({
  isSphinx: jest.fn(),
}))

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

jest.mock('~/stores/useFeatureFlagStore', () => ({
  useFeatureFlagStore: jest.fn(),
}))

const useFeatureFlagStoreMock = useFeatureFlagStore as jest.MockedFunction<typeof useFeatureFlagStore>
const useUserStoreMock = useUserStore as jest.MockedFunction<typeof useUserStore>
const isSphinxMock = isSphinx as jest.MockedFunction<typeof isSphinx>

describe('Test SourceView', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useUserStore as unknown as jest.Mock).mockImplementation(() => [
      { isAdmin: false },
      { queuedSourcesFlag: false },
      jest.fn(),
    ])
    ;(getNodeContent as jest.Mock).mockResolvedValue({ nodes: mockNodes })
    isSphinxMock.mockReturnValue(false)
  })

  it('assserts that when queuedSourceFlag is false, queued sources column is hidden', () => {
    useFeatureFlagStoreMock.mockReturnValue([false])
    useUserStoreMock.mockReturnValue([false])

    const { queryByText } = render(<SourcesView />)

    expect(queryByText('Queued sources')).not.toBeInTheDocument()
  })

  it('should render the "View Content" tab correctly', () => {
    isSphinxMock.mockReturnValue(true)

    render(<SourcesView />)

    const viewContentTab = screen.getByRole('tab', { name: 'View Content' })

    expect(viewContentTab).toBeInTheDocument()
  })

  it('should only render Sphinx-related content for Sphinx users', () => {
    ;(useUserStore as unknown as jest.Mock).mockImplementation(() => [{ isAdmin: true }, jest.fn()])
    render(<SourcesView />)
    waitFor(() => {
      const queuedSourcesTab = screen.getByRole('tab', { name: 'Queued sources' })
      const topicsTab = screen.getByRole('tab', { name: 'Topics' })

      expect(queuedSourcesTab).toBeInTheDocument()
      expect(topicsTab).toBeInTheDocument()
    })
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

  it('should render the table with nodes data if GET response is successful', async () => {
    ;(getNodeContent as jest.Mock).mockResolvedValue({
      nodes: mockNodes,
    })

    render(<SourcesView />)

    waitFor(async () => {
      const viewContentTab = screen.getByRole('tab', { name: 'View Content' })
      fireEvent.click(viewContentTab)

      const tweetRow = await screen.findByText('123456789')
      const articleRow = await screen.findByText('http://examplearticle.com')

      expect(tweetRow).toBeInTheDocument()
      expect(articleRow).toBeInTheDocument()
    })
  })

  describe('should use the correct output for type, source, date, and status', () => {
    beforeEach(() => {
      ;(getNodeContent as jest.Mock).mockResolvedValue({ nodes: mockNodes })
      useUserStoreMock.mockReturnValue([{ isAdmin: true }])
      useFeatureFlagStoreMock.mockReturnValue([true])
      isSphinxMock.mockReturnValue(true)
    })

    it('should render the correct node type for each row', async () => {
      render(<SourcesView />)
      waitFor(async () => {
        const viewContentTab = screen.getByRole('tab', { name: 'View Content' })
        fireEvent.click(viewContentTab)

        const tweetType = await screen.findByText('Tweet')
        const articleType = await screen.findByText('Article')

        expect(tweetType).toBeInTheDocument()
        expect(articleType).toBeInTheDocument()
      })
    })

    it('should render the correct source for each row', async () => {
      render(<SourcesView />)
      waitFor(async () => {
        const viewContentTab = screen.getByRole('tab', { name: 'View Content' })
        fireEvent.click(viewContentTab)

        const tweetId = await screen.findByText('123456789')
        const articleLink = await screen.findByText('http://examplearticle.com')

        expect(tweetId).toBeInTheDocument()
        expect(articleLink).toBeInTheDocument()
      })
    })

    it('should render the correct date for each row', async () => {
      render(<SourcesView />)
      waitFor(async () => {
        const viewContentTab = screen.getByRole('tab', { name: 'View Content' })
        fireEvent.click(viewContentTab)

        const tweetDate = await screen.findByText('4/4/2021')
        const articleDate = await screen.findByText('5/4/2021')

        expect(tweetDate).toBeInTheDocument()
        expect(articleDate).toBeInTheDocument()
      })
    })

    it('should render the correct status for each row', async () => {
      render(<SourcesView />)
      waitFor(async () => {
        const viewContentTab = screen.getByRole('tab', { name: 'View Content' })
        fireEvent.click(viewContentTab)

        const tweetStatus = await screen.findByText('complete')
        const articleStatus = await screen.findByText('pending')

        expect(tweetStatus).toBeInTheDocument()
        expect(articleStatus).toBeInTheDocument()
      })
    })
  })
})
