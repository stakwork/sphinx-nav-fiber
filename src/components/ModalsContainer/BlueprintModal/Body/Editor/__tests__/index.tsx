/* eslint-disable padding-line-between-statements */
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Editor } from '../index'
import { api } from '~/network/api'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'

jest.mock('~/network/api', () => ({
  api: {
    delete: jest.fn().mockResolvedValue({ status: 200 }),
    get: jest.fn().mockResolvedValue({
      data: {
        schemas: [
          { type: 'exampleType', is_deleted: false },
          { type: 'exampleParent', is_deleted: false },
        ],
      },
    }),
  },
}))

jest.mock('~/network/fetchSourcesData', () => ({
  getNodeSchemaTypes: jest.fn(),
}))

describe('Editor Component - Delete Node', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  const mockProps = {
    graphLoading: false,
    onSchemaCreate: jest.fn(),
    selectedSchema: {
      name: 'string',
      type: 'exampleType',
      ref_id: '123',
      parent: 'exampleParent',
    },
    onDelete: jest.fn(),
    setSelectedSchemaId: jest.fn(),
    setIsCreateNew: jest.fn(),
    setGraphLoading: jest.fn(),
    onSchemaUpdate: jest.fn(),
  }

  it('should display an error message and not update the UI if the delete operation fails', async () => {
    const mockErrorResponse = {
      status: 400,
      json: () =>
        Promise.resolve({
          errorCode: 'Cannot delete node with children',
        }),
    }

    ;(api.delete as jest.Mock).mockRejectedValue(mockErrorResponse)

    render(<Editor {...mockProps} />)

    fireEvent.click(screen.getByText('Delete'))

    await waitFor(() => {
      expect(api.delete).toHaveBeenCalledWith('/schema/123')
      expect(screen.getByText('Cannot delete node with children')).toBeInTheDocument()
    })

    expect(mockProps.onDelete).not.toHaveBeenCalled()
  })

  it('should update the UI and not show an error message if the delete operation succeeds', async () => {
    ;(api.delete as jest.Mock).mockResolvedValue({ status: 200 })

    render(<Editor {...mockProps} />)

    fireEvent.click(screen.getByText('Delete'))

    await waitFor(() => {
      expect(api.delete).toHaveBeenCalledWith('/schema/123')
      expect(screen.queryByText('Cannot delete node with children')).not.toBeInTheDocument()
    })

    expect(mockProps.onDelete).toHaveBeenCalled()
  })

  it('should ensure that correct parent is rendered', async () => {
    ;(getNodeSchemaTypes as jest.Mock).mockResolvedValue({
      schemas: [
        { type: 'exampleType', is_deleted: false },
        { type: 'exampleParent', is_deleted: false },
        { type: 'exampleChild', is_deleted: false },
      ],
    })

    render(<Editor {...mockProps} />)

    await waitFor(() => {
      expect(getNodeSchemaTypes).toHaveBeenCalled()
    })

    await waitFor(() => {
      expect(screen.getByText('Parent')).toBeInTheDocument()
      expect(screen.getByDisplayValue('ExampleParent')).toBeInTheDocument()
    })
  })
})
