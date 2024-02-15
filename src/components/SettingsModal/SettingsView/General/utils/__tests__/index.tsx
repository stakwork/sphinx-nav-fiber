/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import React from 'react'
import * as fetchSourcesDataModule from '~/network/fetchSourcesData'
import { postAboutData } from '~/network/fetchSourcesData'
import { useAppStore } from '~/stores/useAppStore'
import { General } from '../../index'

jest.mock('~/network/fetchSourcesData')
jest.mock('~/stores/useAppStore')

describe('General', () => {
  const mockSetAppMetaData = jest.fn()

  beforeEach(() => {
    jest.resetAllMocks()

    useAppStore.mockReturnValue({
      setAppMetaData: mockSetAppMetaData,
    })
  })

  it('should render General component with initial form values', () => {
    const initialValues = {
      title: 'Test Title',
      description: 'Test Description',
      mission_statement: 'Test Mission Statement',
      search_term: 'Test Search Term',
    }

    render(<General initialValues={initialValues} />)

    expect(screen.getByLabelText(/graph title/i)).toHaveValue(initialValues.title)
    expect(screen.getByLabelText(/graph description/i)).toHaveValue(initialValues.description)
  })

  it('should call postAboutData on form submission', async () => {
    const postAboutDataSpy = jest.spyOn(fetchSourcesDataModule, 'postAboutData')

    render(<General initialValues={{}} />)

    await fireEvent.click(screen.getByRole('button', { name: /save changes/i }))
    ;(async () => {
      await waitFor(() => {
        expect(postAboutDataSpy).toHaveBeenCalled()
      })
    })()
  })

  it('should update app metadata on successful form submission', async () => {
    fetchSourcesDataModule.postAboutData.mockResolvedValue({ status: 'success' })

    render(<General initialValues={{}} />)

    await fireEvent.click(screen.getByRole('button', { name: /save changes/i }))
    ;(async () => {
      await waitFor(() => expect(mockSetAppMetaData).toHaveBeenCalled())
    })()
  })

  it('should handle error case for postAboutData', async () => {
    const mockConsoleWarn = jest.spyOn(console, 'warn')

    postAboutData.mockRejectedValue(new Error('Test error'))

    render(<General initialValues={{}} />)

    await fireEvent.click(screen.getByRole('button', { name: /save changes/i }))
    ;(async () => {
      await waitFor(() => expect(mockConsoleWarn).toHaveBeenCalledWith(expect.any(Error)))
    })()

    mockConsoleWarn.mockRestore()
  })

  it('should show loading state when isSubmitting is true', async () => {
    render(<General initialValues={{}} />)

    userEvent.type(screen.getByLabelText(/graph title/i), 'Test Title')

    await fireEvent.click(screen.getByRole('button', { name: /save changes/i }))
    ;(async () => {
      await waitFor(() => expect(screen.getByTestId('submit-loader')).toBeInTheDocument())
    })()
  })
})
