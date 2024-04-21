import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { GraphBlueprint } from '../index'

jest.mock('../../../../../network/fetchSourcesData', () => ({
  getSchemaAll: jest.fn().mockResolvedValue({ schemas: [{ type: 'Custom', is_deleted: false }] }),
}))

describe('GraphBlueprint', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should display only one Custom node', async () => {
    render(<GraphBlueprint />)

    const customNodes = await screen.findAllByText('Custom')

    expect(customNodes).toHaveLength(1)
  })
})
