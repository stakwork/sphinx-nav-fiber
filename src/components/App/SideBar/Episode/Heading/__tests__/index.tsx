/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { useNodeNavigation } from '~/components/Universe/useNodeNavigation'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import { Heading } from '..'

// Mock the stores
jest.mock('~/stores/useGraphStore', () => ({
  useSelectedNode: jest.fn(),
}))

jest.mock('~/stores/useAppStore', () => ({
  useAppStore: jest.fn(),
}))

jest.mock('~/components/Universe/useNodeNavigation', () => ({
  useNodeNavigation: jest.fn(),
}))

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => jest.fn(),
  useLocation: () => ({ pathname: '/episode/123/node/456' }),
}))

describe('Heading Component', () => {
  const mockNavigateToNode = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(useNodeNavigation as jest.Mock).mockReturnValue({
      navigateToNode: mockNavigateToNode,
    })
  })

  it('renders the episode title from selectedNode', () => {
    const selectedNode = { episode_title: 'Test Episode Title' }

    ;(useSelectedNode as jest.Mock).mockReturnValue(selectedNode)
    ;(useAppStore as jest.Mock).mockReturnValue(() => '')

    const { getByText } = render(<Heading selectedNodeShow={undefined} />)

    expect(getByText('Test Episode Title')).toBeInTheDocument()
  })

  it('renders "Unknown" when episode_title is missing', () => {
    const selectedNode = {}

    ;(useSelectedNode as jest.Mock).mockReturnValue(selectedNode)
    ;(useAppStore as jest.Mock).mockReturnValue(() => '')

    const { getByText } = render(<Heading selectedNodeShow={undefined} />)

    expect(getByText('Unknown')).toBeInTheDocument()
  })

  it('renders selectedNodeShow title and updates selectedNode onClick', () => {
    const selectedNodeShow = {
      show_title: 'Test Show Title',
      image_url: 'test_show_image_url.png',
      ref_id: 'test-id',
    }

    ;(useSelectedNode as jest.Mock).mockReturnValue({})
    ;(useAppStore as jest.Mock).mockReturnValue(() => '')

    const { getByText } = render(<Heading selectedNodeShow={selectedNodeShow} />)

    fireEvent.click(getByText('Test Show Title'))

    expect(mockNavigateToNode).toHaveBeenCalledWith(selectedNodeShow.ref_id)
  })

  it('displays the TypeBadge based on the type of the selectedNode', async () => {
    const selectedNode = { type: 'podcast' }

    ;(useSelectedNode as jest.Mock).mockReturnValue(selectedNode)
    ;(useAppStore as jest.Mock).mockReturnValue(() => '')

    const { getByText } = render(<Heading selectedNodeShow={undefined} />)

    await waitFor(() => {
      expect(getByText('podcast')).toBeInTheDocument()
    })
  })
})
