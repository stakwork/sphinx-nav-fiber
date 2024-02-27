import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { SourceTypeStep } from '..'

describe('SourceTypeStep', () => {
  it('renders with initial selected type', () => {
    const selectedType = 'Corporation'

    render(<SourceTypeStep allowNextStep onNextStep={jest.fn()} onSelectType={jest.fn()} selectedType={selectedType} />)

    const nextBtn = screen.getByRole('button', { name: 'Next' })

    expect(nextBtn).toBeInTheDocument()

    const selectTypeText = screen.getByText('Select Type')

    expect(selectTypeText).toBeInTheDocument()

    const inputField = screen.getByRole('combobox')

    expect(inputField).toHaveValue(selectedType)
  })

  it('auto selects input field when component is rendered', () => {
    render(<SourceTypeStep allowNextStep onNextStep={jest.fn()} onSelectType={jest.fn()} selectedType="" />)

    const inputField = screen.getByRole('combobox')

    expect(inputField).toHaveFocus()
  })
})
