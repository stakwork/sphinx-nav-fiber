import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import moment from 'moment'
import React from 'react'
import { Transcript } from '..'

const mockSelectedNode = {
  date: moment().unix(),
  boost: 10,
  text: 'Example tweet',
  name: 'John Doe',
  verified: true,
  profile_picture: 'http://example.com/image.png',
  twitter_handle: 'johndoe',
  ref_id: '1',
  tweet_id: '123456789',
}

describe('Transcript component', () => {
  test('copyButton state reverses to false after 2000 milliseconds', async () => {
    const { getByRole, getByText } = render(<Transcript node={mockSelectedNode} stateless />)

    const copyButton = getByRole('button', { name: 'Copy' })

    expect(copyButton).toBeInTheDocument()

    userEvent.click(copyButton)

    jest.useFakeTimers()

    jest.advanceTimersByTime(2000)

    await waitFor(() => {
      expect(getByText(/Copy/i)).toBeInTheDocument()
    })
  })
})
