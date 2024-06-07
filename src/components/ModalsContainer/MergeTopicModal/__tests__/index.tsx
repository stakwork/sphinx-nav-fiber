/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { FormProvider, useForm } from 'react-hook-form'
import { MergeNodeModal } from '../index'
import * as ModalStore from '~/stores/useModalStore'
import * as TopicsStore from '~/stores/useTopicsStore'
import * as fetchSourcesData from '~/network/fetchSourcesData'

jest.mock('~/stores/useTopicsStore')
jest.mock('~/stores/useModalStore')
jest.mock('~/stores/useDataStore')
jest.mock('~/network/fetchSourcesData')

const TestComponent = () => {
  const form = useForm()
  return (
    <FormProvider {...form}>
      <MergeNodeModal />
    </FormProvider>
  )
}

describe('MergeNodeModal', () => {
  it('should render the modal and allow submitting a merge request', async () => {
    const mockSetState = jest.fn()
    const mockClose = jest.fn()
    const mockOpen = jest.fn()
    const mockVisisble = true

    jest.spyOn(TopicsStore, 'useTopicsStore').mockImplementation((selector) =>
      selector({
        ids: ['1', '2', '3'],
        total: 3,
        setState: mockSetState,
      }),
    )

    jest
      .spyOn(ModalStore, 'useModal')
      .mockImplementation(() => ({ close: mockClose, open: mockOpen, visible: mockVisisble }))
    jest.spyOn(fetchSourcesData, 'postMergeTopics').mockResolvedValue({})

    const { getByTestId } = render(<TestComponent />)

    waitFor(async () => {
      const mergeButton = getByTestId('merge-topics-button')
      expect(mergeButton).toBeDisabled()

      const toNodeDropdown = getByTestId('to-node')

      fireEvent.change(toNodeDropdown, { target: { value: 'Renewable Energy' } })
      fireEvent.keyDown(toNodeDropdown, { key: 'Enter', code: 'Enter' })

      await waitFor(() => {
        expect(mergeButton).toBeEnabled()
      })

      const swapIcon = getByTestId('swap-icon')
      fireEvent.click(swapIcon)

      await waitFor(() => {
        expect(mergeButton).toBeEnabled()
      })
    })
  })
})
