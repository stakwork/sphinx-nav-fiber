/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import moment from 'moment'
import React from 'react'
import { TwitData } from '..'
import { useSelectedNode } from '../../../../../stores/useDataStore'
import { boost } from '../../../../../utils/boost'

jest.mock('../../../../../stores/useDataStore')
jest.mock('../../../../../utils/boost')

const mockedUseSelectedNode = useSelectedNode as jest.MockedFunction<typeof useSelectedNode>

const mockSelectedNode = {
  date: moment().unix(),
  boost: 10,
  text: 'Example tweet text',
  name: 'John Doe',
  verified: true,
  profile_picture: 'http://example.com/image.png',
  twitter_handle: 'johndoe',
  ref_id: '1',
  tweet_id: '123456789',
}

describe('TwitData Component', () => {
  beforeEach(() => {
    mockedUseSelectedNode.mockReturnValue(mockSelectedNode)
  })

  afterAll(() => {
    jest.restoreAllMocks()
  })

  it('renders correctly with selectedNode data', () => {
    const { getByText, getByAltText } = render(<TwitData />)

    expect(getByText('John Doe')).toBeInTheDocument()
    expect(getByAltText('verified')).toBeInTheDocument()
    expect(getByText('@johndoe')).toBeInTheDocument()
    expect(getByText('Example tweet text')).toBeInTheDocument()
    expect(getByText(moment.unix(mockSelectedNode.date).format('ll'))).toBeInTheDocument()
  })

  it('does not render without selectedNode', () => {
    mockedUseSelectedNode.mockReturnValueOnce(null)

    const { container } = render(<TwitData />)

    expect(container).toBeEmptyDOMElement()
  })

  it('shows verification badge for verified accounts', () => {
    const { getByAltText } = render(<TwitData />)

    expect(getByAltText('verified')).toBeInTheDocument()
  })

  it('displays the Twitter handle if present', () => {
    const { getByText } = render(<TwitData />)

    expect(getByText('@johndoe')).toBeInTheDocument()
  })

  it('text and date are correctly formatted and displayed', () => {
    const { getByText } = render(<TwitData />)

    expect(getByText('Example tweet text')).toBeInTheDocument()
    expect(getByText(moment.unix(mockSelectedNode.date).format('ll'))).toBeInTheDocument()
  })

  it.skip('boost amount is shown and can be updated', async () => {
    const { getByText, getByTestId } = render(<TwitData />)

    expect(getByText(mockSelectedNode.boost.toString())).toBeInTheDocument()
    expect(getByTestId('boost-amt')).toHaveTextContent('10')
    boost.mockResolvedValue({})

    fireEvent.click(getByTestId('booster-pill'))

    await waitFor(() => {
      expect(getByTestId('boost-amt')).toHaveTextContent('15')
    })
  })

  it('external link to the tweet is correctly constructed', () => {
    const { getByRole } = render(<TwitData />)
    const viewTweetLink = getByRole('link', { name: /View Tweet/i })

    expect(viewTweetLink).toHaveAttribute(
      'href',
      `https://twitter.com/${mockSelectedNode.twitter_handle}/status/${mockSelectedNode.tweet_id}?open=system`,
    )
  })
})
