/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { api } from '~/network/api'
import { getNodeSchemaTypes } from '~/network/fetchSourcesData'
import { Editor } from '../index'

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
  getNodeType: jest.fn(),
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

  it.skip('should display an error message and not update the UI if the delete operation fails', async () => {
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

  it.skip('should update the UI and not show an error message if the delete operation succeeds', async () => {
    ;(api.delete as jest.Mock).mockResolvedValue({ status: 200 })

    render(<Editor {...mockProps} />)

    fireEvent.click(screen.getByText('Delete'))

    await waitFor(() => {
      expect(api.delete).toHaveBeenCalledWith('/schema/123')
      expect(screen.queryByText('Cannot delete node with children')).not.toBeInTheDocument()
    })

    expect(mockProps.onDelete).toHaveBeenCalled()
  })

  it.skip('should ensure that correct parent is rendered', async () => {
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

  it('should send a PUT request with deleted attributes marked as "delete" when editing a node', async () => {
    const deletedAttributes = ['oldAttribute']
    const updatedData = {
      type: 'exampleType',
      parent: 'exampleParent',
      attributes: {
        newAttribute: 'newValue',
      },
    }

    api.put = jest.fn().mockResolvedValue({ status: 'success', ref_id: '123' })

    render(<Editor {...mockProps} />)

    waitFor(async () => {
      const handleSubmit = jest.spyOn(Editor.prototype, 'handleSubmitForm')
      // @ts-ignore
      await handleSubmit(updatedData, true, deletedAttributes)

      expect(api.put).toHaveBeenCalledWith(
        '/schema',
        JSON.stringify({
          type: 'exampleType',
          parent: 'exampleParent',
          attributes: {
            newAttribute: 'newValue',
            oldAttribute: 'delete',
          },
        }),
        {},
      )

      handleSubmit.mockRestore()
    })
  })
})
