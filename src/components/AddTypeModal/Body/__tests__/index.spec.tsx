/* eslint-disable padding-line-between-statements */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { Body } from '../index'
import * as fetchSourcesData from '~/network/fetchSourcesData'
import '@testing-library/jest-dom'

describe('Body Component', () => {
  it('filters out deleted types from the dropdown', async () => {
    const mockData = [
      {
        age: 'string',
        is_deleted: true,
        name: 'string',
        namez: 'string',
        newattribute: 'string',
        parent: 'Person',
        ref_id: 'string',
        surname: '?string',
        type: 'Persontest',
        uuid: 'ed6e3319-5c50-4504-8aa8-bb15db7bd668',
      },
      {
        name: 'string',
        parent: 'thing',
        ref_id: '58e36ad9-54cb-4e1b-9442-6a3801ee2977',
        type: 'place',
      },
    ]

    jest.mock('~/network/fetchSourcesData', () => ({
      getNodeSchemaTypes: jest.fn().mockResolvedValue({ schemas: mockData }),
    }))

    const onSchemaCreateMock = jest.fn()
    const onDeleteMock = jest.fn()

    const getNodeSchemaTypesSpy = jest.spyOn(fetchSourcesData, 'getNodeSchemaTypes')

    getNodeSchemaTypesSpy.mockResolvedValue({ schemas: mockData })

    render(<Body onDelete={onDeleteMock} onSchemaCreate={onSchemaCreateMock} selectedSchema={null} />)

    await screen.findByText('Loading…')

    expect(screen.queryByText('Persontest')).not.toBeInTheDocument()

    expect(screen.getByText('Place')).toBeInTheDocument()
  })
})
