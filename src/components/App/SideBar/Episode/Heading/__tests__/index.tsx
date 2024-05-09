/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { Heading } from '..'
import { useDataStore } from '../../../../../../stores/useDataStore'

const mockedUseDataStore = useDataStore as jest.MockedFunction<typeof useDataStore>

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
}))

describe('Heading Component', () => {
  it('renders the episode title from selectedNode', () => {
    mockedUseDataStore.mockImplementation(() => [{ episode_title: 'Test Episode Title' }, jest.fn()])

    const { getByText } = render(<Heading selectedNodeShow={undefined} />)

    expect(getByText('Test Episode Title')).toBeInTheDocument()
  })

  it('renders "Unknown" when episode_title is missing', () => {
    mockedUseDataStore.mockImplementation(() => [{}, jest.fn()])

    const { getByText } = render(<Heading selectedNodeShow={undefined} />)

    expect(getByText('Unknown')).toBeInTheDocument()
  })

  it('renders selectedNodeShow title and updates selectedNode onClick', () => {
    const setSelectedNode = jest.fn()

    const selectedNodeShow = {
      show_title: 'Test Show Title',
      image_url: 'test_show_image_url.png',
    }

    mockedUseDataStore.mockImplementation(() => [{}, setSelectedNode])

    const { getByText } = render(<Heading selectedNodeShow={selectedNodeShow} />)

    fireEvent.click(getByText('Test Show Title'))

    expect(setSelectedNode).toHaveBeenCalledWith(selectedNodeShow)
  })

  it('displays the TypeBadge based on the type of the selectedNode', () => {
    mockedUseDataStore.mockImplementation(() => [{ type: 'podcast' }, jest.fn()])

    const { getByText } = render(<Heading selectedNodeShow={undefined} />)
    waitFor(() => {
      expect(getByText('podcast')).toBeInTheDocument()
    })
  })
})
