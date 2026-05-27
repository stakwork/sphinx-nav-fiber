import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import React from 'react'
import { ThemeProvider } from 'styled-components'
import { colors } from '~/utils/colors'
import { Toolbar } from '..'

const theme = {
  transitions: {
    create: () => 'none',
  },
}

const renderToolbar = (activeAction?: 'createType' | 'addEdge') =>
  render(
    <ThemeProvider theme={theme}>
      <Toolbar activeAction={activeAction} onAddEdgeNode={jest.fn()} onCreateNew={jest.fn()} />
    </ThemeProvider>,
  )

describe('Blueprint Toolbar', () => {
  it('keeps the selected create type button visible', () => {
    renderToolbar('createType')

    expect(screen.getByTestId('add-schema-type')).not.toHaveStyle(`background: ${colors.black}`)
  })

  it('keeps the selected add edge button visible', () => {
    renderToolbar('addEdge')

    expect(screen.getByTestId('add-edge')).not.toHaveStyle(`background: ${colors.black}`)
  })
})
