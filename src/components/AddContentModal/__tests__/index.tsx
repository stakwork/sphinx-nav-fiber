/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { render, waitFor, fireEvent } from '@testing-library/react'
import { api } from '~/network/api'
import { getLSat } from '~/utils'
import { sphinxBridge } from '~/testSphinxBridge'
import * as sphinx from 'sphinx-bridge'
import { AddContentModal } from '../index'
import { FormProvider, useForm } from 'react-hook-form'
import React from 'react'

jest.mock('~/network/api')
jest.mock('~/utils')
jest.mock('sphinx-bridge')
jest.mock('~/testSphinxBridge')
jest.mock('react-toastify/dist/ReactToastify.css', () => null)

jest.mock('~/stores/useModalStore', () => ({
  useModal: () => ({
    close: jest.fn(),
  }),
}))

const TestComponent = () => {
  const form = useForm()
  return (
    <FormProvider {...form}>
      <AddContentModal />
    </FormProvider>
  )
}

describe('AddContentModal', () => {
  it('should send the correct tweet_id when sourceType is x.com', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ;(sphinx.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(sphinxBridge.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(getLSat as jest.Mock).mockResolvedValue('test_lsat_token')
    ;(api.post as jest.Mock).mockResolvedValue({})

    const { getByText, getByPlaceholderText } = render(<TestComponent />)

    waitFor(() => {
      expect(getByText('Add Content')).toBeInTheDocument()
      fireEvent.change(getByPlaceholderText(/Paste your url here.../i), {
        target: { value: 'https://x.com/linear/status/1801364934464241783' },
      })
      const nextButton = getByText('Next')
      fireEvent.click(nextButton)

      const skipButton = getByText('Skip')
      fireEvent.click(skipButton)

      const approveButton = getByText('Approve')
      fireEvent.click(approveButton)

      expect(api.post).toHaveBeenCalledWith(
        '/add_node',
        JSON.stringify({
          tweet_id: '1801364934464241783',
          content_type: 'tweet',
          pubkey: 'test_pubkey',
        }),
        { Authorization: 'test_lsat_token' },
      )
    })
  })

  it('should send the correct tweet_id when sourceType is twitter.com', () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ;(sphinx.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(sphinxBridge.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(getLSat as jest.Mock).mockResolvedValue('test_lsat_token')
    ;(api.post as jest.Mock).mockResolvedValue({})

    const { getByText, getByPlaceholderText } = render(<TestComponent />)

    waitFor(() => {
      expect(getByText('Add Content')).toBeInTheDocument()
      fireEvent.change(getByPlaceholderText(/Paste your url here.../i), {
        target: { value: 'https://twitter.com/linear/status/1801364934464241783' },
      })

      const nextButton = getByText('Next')
      fireEvent.click(nextButton)

      const skipButton = getByText('Skip')
      fireEvent.click(skipButton)

      const approveButton = getByText('Approve')
      fireEvent.click(approveButton)

      expect(api.post).toHaveBeenCalledWith(
        '/add_node',
        JSON.stringify({
          tweet_id: '1801364934464241783',
          content_type: 'tweet',
          pubkey: 'test_pubkey',
        }),
        { Authorization: 'test_lsat_token' },
      )
    })
  })
})
