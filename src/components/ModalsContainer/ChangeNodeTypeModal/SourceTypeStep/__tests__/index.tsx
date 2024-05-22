import '@testing-library/jest-dom'
import { render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import * as fetchSourcesData from '~/network/fetchSourcesData'
import { SourceTypeStep } from '..'

// @ts-ignore
window.setImmediate = window.setTimeout

jest.mock('~/stores/useFeatureFlagStore', () => ({
  useFeatureFlagStore: jest.fn(() => [true]),
}))

describe('SourceTypeStep', () => {
  it('renders with initial selected type', () => {
    const selectedType = ''

    render(<SourceTypeStep allowNextStep onSelectType={jest.fn()} selectedType={selectedType} skipToStep={jest.fn()} />)

    const nextBtn = screen.getByRole('button', { name: 'Next' })

    expect(nextBtn).toBeInTheDocument()

    const selectTypeText = screen.getByText('Select Type')

    expect(selectTypeText).toBeInTheDocument()

    const inputField = screen.getByRole('combobox')

    expect(inputField).toHaveValue(selectedType)
  })

  it('auto selects input field when component is rendered', () => {
    render(<SourceTypeStep allowNextStep onSelectType={jest.fn()} selectedType="" skipToStep={jest.fn()} />)

    const inputField = screen.getByRole('combobox')

    expect(inputField).toHaveFocus()
  })

  it('should filter out deleted node types', async () => {
    const mockedSchemaTypes = [
      { type: 'node1', is_deleted: false, ref_id: 'refId1' },
      { type: 'node2', is_deleted: true },
      { type: 'about', is_deleted: false, ref_id: 'refId2' },
      { type: 'schema', is_deleted: false, ref_id: 'refId3' },
    ]

    jest.spyOn(fetchSourcesData, 'getNodeSchemaTypes').mockResolvedValue({ schemas: mockedSchemaTypes })

    render(<SourceTypeStep allowNextStep onSelectType={jest.fn()} selectedType="" skipToStep={jest.fn()} />)

    await waitFor(() => {
      const autocompleteOptions = screen.getAllByRole('option')

      expect(autocompleteOptions).toHaveLength(1)
      expect(autocompleteOptions[0]).toHaveTextContent('Node1')

      const deletedNodeType = screen.queryByText('Node2')

      expect(deletedNodeType).toBeNull()
    })
  })
})
