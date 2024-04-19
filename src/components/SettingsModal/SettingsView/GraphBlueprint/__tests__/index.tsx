import '@testing-library/jest-dom'
import { render, waitFor } from '@testing-library/react'
import React from 'react'
import { GraphBlueprint } from '..'

jest.mock('~/network/fetchSourcesData', () => ({
  getSchemaAll: jest.fn().mockResolvedValue({
    schemas: [{ type: 'Custom', is_deleted: false }],
  }),
}))

describe('GraphBlueprint', () => {
  beforeEach(() => {
    jest.spyOn(React, 'useState').mockImplementation((initState?: unknown) => [initState, jest.fn()])
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  it('should display only one Custom node', async () => {
    const { getAllByText } = render(<GraphBlueprint />)

    ;(async () => {
      await waitFor(() => {
        const customNode = getAllByText('Custom')

        expect(customNode).toHaveLength(1)
      })
    })()
  })
})
