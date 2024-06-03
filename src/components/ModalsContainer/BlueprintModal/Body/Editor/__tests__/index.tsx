/* eslint-disable padding-line-between-statements */
import React from 'react'
import '@testing-library/jest-dom'
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import { Editor } from '../index'
import { api } from '~/network/api'

jest.mock('~/network/api', () => ({
  api: {
    delete: jest.fn().mockResolvedValue({ status: 200 }),
    get: jest.fn(),
    post: jest.fn(),
    put: jest.fn(),
  },
}))

describe('Editor Component - Delete Node', () => {
  beforeEach(() => {
    jest.clearAllMocks()
  })

  it('should display an error message and not update the UI if the delete operation fails', async () => {
    const onDeleteMock = jest.fn()
    const mockErrorResponse = {
      status: 400,
      json: () =>
        Promise.resolve({
          errorCode: 'Cannot delete node with children',
        }),
    }

    ;(api.delete as jest.Mock).mockRejectedValue(mockErrorResponse)

    const { getByText } = render(
      <Editor
        onDelete={onDeleteMock}
        onSchemaCreate={() => {
          jest.fn()
        }}
        selectedSchema={{ type: 'exampleType', ref_id: '123' }}
        setIsCreateNew={() => {
          jest.fn()
        }}
        setSelectedSchemaId={() => {
          jest.fn()
        }}
      />,
    )

    fireEvent.click(getByText('Delete'))

    await waitFor(() => {
      expect(api.delete).toHaveBeenCalledWith('/schema/123')
      expect(screen.getByText('Cannot delete node with children')).toBeInTheDocument()
    })

    expect(onDeleteMock).not.toHaveBeenCalled()
  })

  it('should update the UI and not show an error message if the delete operation succeeds', async () => {
    const onDeleteMock = jest.fn()
    ;(api.delete as jest.Mock).mockResolvedValue({ status: 200 })

    const { getByText, queryByText } = render(
      <Editor
        onDelete={onDeleteMock}
        onSchemaCreate={() => {
          jest.fn()
        }}
        selectedSchema={{ type: 'exampleType', ref_id: '123' }}
        setIsCreateNew={() => {
          jest.fn()
        }}
        setSelectedSchemaId={() => {
          jest.fn()
        }}
      />,
    )

    fireEvent.click(getByText('Delete'))

    await waitFor(() => {
      expect(api.delete).toHaveBeenCalledWith('/schema/123')
      expect(queryByText('Cannot delete node with children')).not.toBeInTheDocument()
    })

    expect(onDeleteMock).toHaveBeenCalled()
  })
})
