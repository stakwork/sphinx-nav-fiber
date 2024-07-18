/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode, useUpdateSelectedNode } from '~/stores/useGraphStore'
import { Heading } from '..'

// Mock the stores
jest.mock('~/stores/useGraphStore', () => ({
  useSelectedNode: jest.fn(),
  useUpdateSelectedNode: jest.fn(),
}))

jest.mock('~/stores/useAppStore', () => ({
  useAppStore: jest.fn(),
}))

describe('Heading Component', () => {
  it('renders the episode title from selectedNode', () => {
    const selectedNode = { episode_title: 'Test Episode Title' }
    const setSelectedNode = jest.fn()

    ;(useSelectedNode as jest.Mock).mockReturnValue(selectedNode)
    ;(useUpdateSelectedNode as jest.Mock).mockReturnValue(setSelectedNode)
    ;(useAppStore as jest.Mock).mockReturnValue(() => '')

    const { getByText } = render(<Heading selectedNodeShow={undefined} />)

    expect(getByText('Test Episode Title')).toBeInTheDocument()
  })

  it('renders "Unknown" when episode_title is missing', () => {
    const selectedNode = {}
    const setSelectedNode = jest.fn()

    ;(useSelectedNode as jest.Mock).mockReturnValue(selectedNode)
    ;(useUpdateSelectedNode as jest.Mock).mockReturnValue(setSelectedNode)
    ;(useAppStore as jest.Mock).mockReturnValue(() => '')

    const { getByText } = render(<Heading selectedNodeShow={undefined} />)

    expect(getByText('Unknown')).toBeInTheDocument()
  })

  it('renders selectedNodeShow title and updates selectedNode onClick', () => {
    const setSelectedNode = jest.fn()

    const selectedNodeShow = {
      show_title: 'Test Show Title',
      image_url: 'test_show_image_url.png',
    }

    ;(useSelectedNode as jest.Mock).mockReturnValue({})
    ;(useUpdateSelectedNode as jest.Mock).mockReturnValue(setSelectedNode)
    ;(useAppStore as jest.Mock).mockReturnValue(() => '')

    const { getByText } = render(<Heading selectedNodeShow={selectedNodeShow} />)

    fireEvent.click(getByText('Test Show Title'))

    expect(setSelectedNode).toHaveBeenCalledWith(selectedNodeShow)
  })

  it('displays the TypeBadge based on the type of the selectedNode', async () => {
    const selectedNode = { type: 'podcast' }
    const setSelectedNode = jest.fn()

    ;(useSelectedNode as jest.Mock).mockReturnValue(selectedNode)
    ;(useUpdateSelectedNode as jest.Mock).mockReturnValue(setSelectedNode)
    ;(useAppStore as jest.Mock).mockReturnValue(() => '')

    const { getByText } = render(<Heading selectedNodeShow={undefined} />)

    await waitFor(() => {
      expect(getByText('podcast')).toBeInTheDocument()
    })
  })
})
