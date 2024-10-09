import React from 'react'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { AiAnswer } from '../index'
import { ExtractedEntity } from '~/types/index'

describe('AiAnswer Component', () => {
  const mockHandleLoaded = jest.fn()

  const renderComponent = (answer, entities) => {
    render(<AiAnswer answer={answer} entities={entities} handleLoaded={mockHandleLoaded} hasBeenRendered={false} />)
  }

  it('should display shows tooltip on hover over entity', async () => {
    const entities: ExtractedEntity[] = [
      {
        entity: 'React',
        description: 'A JavaScript library for building user interfaces.',
      },
    ]

    renderComponent('Learn about React and its features.', entities)

    await waitFor(() => expect(screen.getByText(/React/)).toBeInTheDocument())

    const reactEntity = screen.getByText(
      (content, element) => content.startsWith('React') && element.tagName === 'SPAN',
    )

    fireEvent.mouseOver(reactEntity)

    const tooltip = await screen.findByText('A JavaScript library for building user interfaces.')

    expect(tooltip).toBeVisible()
  })
})
