import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { Tweet } from '.'
import { HoverCard } from '..'
import { Node } from '~/types'

const createNode = (node: Partial<Node>): Node =>
  ({
    boost: 0,
    edge_count: 0,
    label: 'label',
    name: 'name',
    node_type: 'Tweet',
    ref_id: 'ref',
    x: 0,
    y: 0,
    z: 0,
    ...node,
  } as Node)

describe('Tweet hover card', () => {
  it('renders post text, media, metrics, and external link for tweet nodes', () => {
    render(
      <Tweet
        node={createNode({
          node_type: 'Tweet',
          properties: {
            alias: 'Ada',
            bookmark_count: 2,
            image_url: 'https://example.com/tweet-image.jpg',
            impression_count: 1200,
            like_count: 34,
            quote_count: 5,
            reply_count: 6,
            retweet_count: 7,
            text: 'Readable tweet content',
            tweet_id: '123',
            twitter_handle: 'ada',
          } as never,
        })}
      />,
    )

    expect(screen.getByText('Readable tweet content')).toBeInTheDocument()

    expect(screen.getByRole('img', { name: 'Readable tweet content' })).toHaveAttribute(
      'src',
      'https://example.com/tweet-image.jpg',
    )

    expect(screen.getByRole('link', { name: 'Ada' })).toHaveAttribute('href', 'https://x.com/ada/status/123')
    expect(screen.getByText('1,200')).toBeInTheDocument()
    expect(screen.getByText('34')).toBeInTheDocument()
    expect(screen.getByText('7')).toBeInTheDocument()
  })

  it('uses the tweet card for Post nodes and hides empty metrics', () => {
    render(
      <HoverCard
        node={createNode({
          node_type: 'Post',
          properties: {
            alias: 'Writer',
            link: 'https://example.com/post',
            text: 'Post content',
          } as never,
        })}
      />,
    )

    expect(screen.getByText('Post content')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Writer' })).toHaveAttribute('href', 'https://example.com/post')
    expect(screen.queryByText('0')).not.toBeInTheDocument()
  })
})
