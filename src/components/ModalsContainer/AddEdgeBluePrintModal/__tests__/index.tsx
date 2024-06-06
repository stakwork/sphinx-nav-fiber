/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { Body } from '../Body'
import { postBluePrintType } from '~/network/fetchSourcesData'

jest.mock('~/stores/useModalStore', () => ({
  useModal: () => ({
    close: jest.fn(),
  }),
}))

jest.mock('~/network/fetchSourcesData', () => ({
  postBluePrintType: jest.fn(),
}))

const TestComponent = () => {
  const form = useForm()
  return (
    <FormProvider {...form}>
      <Body />
    </FormProvider>
  )
}

describe('AddEdgeToBluePrint Modal', () => {
  it('should render the modal and allow submitting an edge', async () => {
    const { getByText, getByTestId, getByPlaceholderText } = render(<TestComponent />)

    expect(getByText('Add Edge')).toBeInTheDocument()

    waitFor(async () => {
      const fromAutocomplete = getByTestId('from_node')
      fireEvent.click(fromAutocomplete)

      fireEvent.change(fromAutocomplete, { target: { value: 'Person' } })
      fireEvent.keyDown(fromAutocomplete, { key: 'Enter', code: 'Enter' })

      expect(fromAutocomplete).toHaveValue('Person')

      const input = getByPlaceholderText('Enter type name')

      fireEvent.change(input, { target: { value: 'Plays For' } })

      expect(input).toHaveValue('Plays For')

      const toAutocomplete = getByTestId('to_node')
      fireEvent.click(toAutocomplete)

      fireEvent.change(toAutocomplete, { target: { value: 'Thing' } })
      fireEvent.keyDown(toAutocomplete, { key: 'Enter', code: 'Enter' })

      expect(toAutocomplete).toHaveValue('Thing')
      const confirmButton = getByText('Confirm')
      fireEvent.click(confirmButton)

      await waitFor(() => {
        expect(postBluePrintType).toHaveBeenCalledWith({
          source: 'Person',
          target: 'Team',
          edge_type: 'Plays For',
        })
      })
    })
  })
  it('should disable the submit button if required fields are not filled', async () => {
    const { getByText } = render(<Body />)
    const confirmButton = getByText('Confirm')

    fireEvent.click(confirmButton)

    await waitFor(() => {
      expect(postBluePrintType).not.toHaveBeenCalled()
    })
  })
})
