import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import React from 'react'
import { SourceTypeStep } from '..'
jest.mock('~/network/fetchSourcesData', () => ({
  getNodeSchemaTypes: jest.fn(() =>
    Promise.resolve({
      schemas: [
        { type: 'node1', is_deleted: false },
        { type: 'node2', is_deleted: true },
        { type: 'node3', is_deleted: false },
      ],
    }),
  ),
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

  it('filters out deleted node types from the dropdown', async () => {
    render(<SourceTypeStep allowNextStep onSelectType={jest.fn()} selectedType="" skipToStep={jest.fn()} />)

    const input = await screen.findByRole('combobox')
    fireEvent.change(input, { target: { value: 'node2' } })

    const options = await screen.findAllByRole('option')
    expect(options).toHaveLength(2)
    expect(options[0]).toHaveTextContent('node1')
    expect(options[1]).toHaveTextContent('node3')
  })
})
