import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { postAboutData } from '~/network/fetchSourcesData'
import { useModal } from '~/stores/useModalStore'
import { OnboardingModal } from '../index'

jest.mock('~/network/fetchSourcesData', () => ({
  postAboutData: jest.fn(),
}))

jest.mock('~/stores/useModalStore', () => ({
  useModal: jest.fn(),
}))

const useModalMock = useModal as jest.MockedFunction<typeof useModal>
const postAboutDataMock = postAboutData as jest.MockedFunction<typeof postAboutData>

describe('OnboardingModal Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()

    useModalMock.mockReturnValue({
      close: jest.fn(),
      visible: true,
    })
  })

  test('renders the onboarding modal', () => {
    render(<OnboardingModal />)
    expect(screen.getByText('Welcome to SecondBrain')).toBeInTheDocument()
    expect(screen.getByText('Set a name and short description for your graph.')).toBeInTheDocument()
  })

  test('submits form successfully', async () => {
    postAboutDataMock.mockResolvedValue({ status: 'success' })

    render(<OnboardingModal />)

    fireEvent.change(screen.getByPlaceholderText('Type graph title here...'), { target: { value: 'Test Title' } })

    fireEvent.change(screen.getByPlaceholderText('Type graph description here...'), {
      target: { value: 'Test Description' },
    })

    fireEvent.click(screen.getByText('Confirm'))

    await waitFor(() => {
      expect(postAboutDataMock).toHaveBeenCalledWith({
        title: 'Test Title',
        description: 'Test Description',
      })
    })
  })

  test('displays error on form submission failure', async () => {
    postAboutDataMock.mockRejectedValue({ status: 400, json: async () => ({ errorCode: 'Error occurred' }) })

    render(<OnboardingModal />)

    fireEvent.change(screen.getByPlaceholderText('Type graph title here...'), { target: { value: 'Test Title' } })

    fireEvent.change(screen.getByPlaceholderText('Type graph description here...'), {
      target: { value: 'Test Description' },
    })

    fireEvent.click(screen.getByText('Confirm'))

    await waitFor(() => {
      expect(screen.getByText('Error occurred')).toBeInTheDocument()
    })
  })

  test('closes modal on successful submission', async () => {
    const closeMock = jest.fn()

    useModalMock.mockReturnValue({
      close: closeMock,
      visible: true,
    })

    postAboutDataMock.mockResolvedValue({ status: 'success' })

    render(<OnboardingModal />)

    fireEvent.change(screen.getByPlaceholderText('Type graph title here...'), { target: { value: 'Test Title' } })

    fireEvent.change(screen.getByPlaceholderText('Type graph description here...'), {
      target: { value: 'Test Description' },
    })

    fireEvent.click(screen.getByText('Confirm'))

    await waitFor(() => {
      expect(closeMock).toHaveBeenCalled()
    })
  })

  test('resets form and error on modal close', async () => {
    const { rerender } = render(<OnboardingModal />)

    fireEvent.change(screen.getByPlaceholderText('Type graph title here...'), { target: { value: 'Test Title' } })

    fireEvent.change(screen.getByPlaceholderText('Type graph description here...'), {
      target: { value: 'Test Description' },
    })

    useModalMock.mockReturnValue({
      close: jest.fn(),
      visible: false,
    })

    rerender(<OnboardingModal />)

    waitFor(() => {
      expect(screen.getByPlaceholderText('Type graph title here...')).toHaveValue('')
      expect(screen.getByPlaceholderText('Type graph description here...')).toHaveValue('')
    })
  })
})
