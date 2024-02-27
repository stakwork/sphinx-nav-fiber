import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import { SelectedNodeView } from '../index'
import * as DataStore from '~/stores/useDataStore'
import * as PlayerStore from '~/stores/usePlayerStore'

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
  useSelectedNode: jest.fn(),
}))

jest.mock('~/stores/usePlayerStore', () => ({
  usePlayerStore: jest.fn(),
}))

jest.mock('../../../Helper/TeachMe/index', () => ({ TeachMeText: () => <div>TeachMeText component</div> }))
jest.mock('../../Data', () => ({ Data: () => <div>Data component</div> }))
jest.mock('../../Episode', () => ({ Episode: () => <div>Episode component</div> }))
jest.mock('../../Image', () => ({ Image: () => <div>Image component</div> }))
jest.mock('../../Media', () => ({ Media: () => <div>Media component</div> }))
jest.mock('../../Messages', () => ({ Messages: () => <div>Messages component</div> }))
jest.mock('../../Person', () => ({ Person: () => <div>Person component</div> }))
jest.mock('../../Show', () => ({ Show: () => <div>Show component</div> }))
jest.mock('../../Topic', () => ({ Topic: () => <div>Topic component</div> }))
jest.mock('../../TwitData', () => ({ TwitData: () => <div>TwitData component</div> }))
jest.mock('../Document', () => ({ Document: () => <div>Document component</div> }))

describe('SelectedNodeView', () => {
  const setPlayingNodeMock = jest.fn()

  beforeEach(() => {
    jest.clearAllMocks()
    ;(DataStore.useDataStore as unknown as jest.Mock).mockImplementation(() => [false])
    ;(PlayerStore.usePlayerStore as unknown as jest.Mock).mockImplementation(() => [setPlayingNodeMock])
  })

  it.each([
    ['guest', 'Person component'],
    ['person', 'Person component'],
    ['data_series', 'Data component'],
    ['tribe_message', 'Messages component'],
    ['tweet', 'TwitData component'],
    ['topic', 'Topic component'],
    ['show', 'Show component'],
    ['youtube', 'Media component'],
    ['podcast', 'Media component'],
    ['clip', 'Media component'],
    ['twitter_space', 'Media component'],
    ['document', 'Document component'],
    ['episode', 'Episode component'],
    ['image', 'Image component'],
  ])('renders %s node_type as %s component', (nodeType, expectedComponent) => {
    ;(DataStore.useSelectedNode as jest.Mock).mockImplementation(() => ({ node_type: nodeType }))

    const { getByText } = render(<SelectedNodeView />)

    expect(getByText(expectedComponent)).toBeInTheDocument()
  })

  it('renders TeachMeText when showTeachMe is true', () => {
    ;(DataStore.useDataStore as unknown as jest.Mock).mockImplementation(() => [true])

    const { getByText } = render(<SelectedNodeView />)

    expect(getByText('TeachMeText component')).toBeInTheDocument()
  })

  // Additional test to check if setPlayingNode is called for MEDIA_TYPES
  it.each([['clip'], ['twitter_space'], ['youtube'], ['episode'], ['podcast']])(
    'calls setPlayingNode for media type %s',
    (nodeType) => {
      ;(DataStore.useSelectedNode as jest.Mock).mockImplementation(() => ({ node_type: nodeType }))

      render(<SelectedNodeView />)

      expect(setPlayingNodeMock).toHaveBeenCalled()
    },
  )
})
