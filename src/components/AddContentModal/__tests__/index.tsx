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
jest.mock('~/network/fetchSourcesData', () => ({
  getPriceData: jest.fn().mockResolvedValue({ data: { price: 10 } }),
}))

jest.mock('~/stores/useModalStore', () => ({
  useModal: () => ({
    close: jest.fn(),
    visible: true,
  }),
}))

jest.mock('~/stores/useUserStore', () => ({
  useUserStore: (selector: (s: unknown) => unknown) =>
    selector({
      budget: 100,
      setBudget: jest.fn(),
    }),
}))

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: (selector: (s: unknown) => unknown) =>
    selector({
      setRunningProjectId: jest.fn(),
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
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should send the correct tweet_id when sourceType is x.com', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ;(sphinx.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(sphinxBridge.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(getLSat as jest.Mock).mockResolvedValue('test_lsat_token')
    ;(api.post as jest.Mock).mockResolvedValue({})

    const { getByText, getByPlaceholderText } = render(<TestComponent />)

    await waitFor(() => expect(getByText('Add Content')).toBeInTheDocument())

    fireEvent.change(getByPlaceholderText(/Paste your url here.../i), {
      target: { value: 'https://x.com/linear/status/1801364934464241783' },
    })

    await waitFor(() => expect(getByText('Next')).not.toBeDisabled())
    fireEvent.click(getByText('Next'))

    await waitFor(() => expect(getByText('Approve')).toBeInTheDocument())
    fireEvent.click(getByText('Approve'))

    await waitFor(() =>
      expect(api.post).toHaveBeenCalledWith(
        '/add_node',
        JSON.stringify({
          tweet_id: '1801364934464241783',
          content_type: 'tweet',
          pubkey: 'test_pubkey',
        }),
        { Authorization: 'test_lsat_token' },
      ),
    )
  })

  it('should not crash when api.post resolves with no data field', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ;(sphinx.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(sphinxBridge.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(getLSat as jest.Mock).mockResolvedValue('test_lsat_token')
    // Simulate backend returning a response with no `data` field
    ;(api.post as jest.Mock).mockResolvedValue({})

    const { findByText, findByPlaceholderText } = render(<TestComponent />)

    // Wait for SourceStep to appear and enter a YouTube URL
    const urlInput = await findByPlaceholderText(/Paste your url here.../i)
    fireEvent.change(urlInput, { target: { value: 'https://www.youtube.com/watch?v=dQw4w9WgXcQ' } })

    // Wait for Next button to be enabled, then advance to BudgetStep
    const nextButton = await findByText('Next')
    await waitFor(() => expect(nextButton).not.toBeDisabled())
    fireEvent.click(nextButton)

    // BudgetStep renders — click Approve; assert no crash with missing `data`
    const approveButton = await findByText('Approve')
    expect(() => fireEvent.click(approveButton)).not.toThrow()
  })

  it('should send the correct tweet_id when sourceType is twitter.com', async () => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    ;(sphinx.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(sphinxBridge.enable as jest.Mock).mockResolvedValue({ pubkey: 'test_pubkey' })
    ;(getLSat as jest.Mock).mockResolvedValue('test_lsat_token')
    ;(api.post as jest.Mock).mockResolvedValue({})

    const { getByText, getByPlaceholderText } = render(<TestComponent />)

    await waitFor(() => expect(getByText('Add Content')).toBeInTheDocument())

    fireEvent.change(getByPlaceholderText(/Paste your url here.../i), {
      target: { value: 'https://twitter.com/linear/status/1801364934464241783' },
    })

    await waitFor(() => expect(getByText('Next')).not.toBeDisabled())
    fireEvent.click(getByText('Next'))

    await waitFor(() => expect(getByText('Approve')).toBeInTheDocument())
    fireEvent.click(getByText('Approve'))

    await waitFor(() =>
      expect(api.post).toHaveBeenCalledWith(
        '/add_node',
        JSON.stringify({
          tweet_id: '1801364934464241783',
          content_type: 'tweet',
          pubkey: 'test_pubkey',
        }),
        { Authorization: 'test_lsat_token' },
      ),
    )
  })
})
