import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import * as BoosterModule from '~/components/Booster'
import { useAppStore } from '~/stores/useAppStore'
import { useSelectedNode } from '~/stores/useGraphStore'
import * as format from '~/utils/formatDescription'
import { Media } from '..'

jest.mock('~/utils/formatDescription')
jest.mock('~/stores/useAppStore')
jest.mock('~/stores/useGraphStore')

const mockedUseSelectedNode = useSelectedNode as jest.MockedFunction<typeof useSelectedNode>
const mockedFormatDescription = jest.spyOn(format, 'formatDescription')
const mockedUseAppStore = useAppStore as jest.MockedFunction<typeof useAppStore>

describe('Media Component Tests', () => {
  const mockNode = {
    link: 'http://example.com',
    image_url: 'http://example.com/image.png',
    date: '2021-01-01',
    boost: 15,
    node_type: 'episode',
    text: 'example text',
    type: 'video',
    id: '1',
    show_title: 'Example Show Title',
    episode_title: 'Example Episode Title',
    ref_id: 'ref1',
  }

  beforeEach(() => {
    mockedUseSelectedNode.mockReturnValue(mockNode)
    mockedFormatDescription.mockImplementation((desc) => `Formatted: ${desc}`)
    mockedUseAppStore.mockReturnValue(() => '')

    jest.clearAllMocks()
  })

  it.skip('Renders nothing if selectedNode is not provided and no node prop is passed', () => {
    mockedUseSelectedNode.mockReturnValue(null)

    const { container } = render(<Media />)

    expect(container).toBeEmptyDOMElement()
  })

  it.skip('Correctly formats and display the episodeTitle using formatDescription', () => {
    render(<Media node={mockNode} />)
    expect(mockedFormatDescription).toHaveBeenCalledWith(mockNode.episode_title)
  })

  it.skip('Displays the BoostAmt component with the correct boostAmount', () => {
    const { getByText } = render(<Media />)

    expect(getByText(mockNode.boost.toString())).toBeInTheDocument()
    expect(getByText('sat')).toBeInTheDocument()
  })

  it.skip('Renders the Booster component with appropriate props including content, count, refId, and a function to update the boost amount', () => {
    const setBoostAmount = jest.fn()

    jest.spyOn(React, 'useState').mockReturnValueOnce([mockNode.boost, setBoostAmount])

    const mockBooster = jest.spyOn(BoosterModule, 'Booster')

    render(<Media />)

    expect(mockBooster).toHaveBeenCalledWith(
      expect.objectContaining({
        content: mockNode,
        count: mockNode.boost,
        refId: mockNode.ref_id,
        updateCount: setBoostAmount,
      }),
      {},
    )
  })

  it.skip('Renders Description component with the selectedNode', () => {
    const { getByText } = render(<Media />)

    expect(getByText('Formatted: Example Episode Title')).toBeInTheDocument()
  })

  it.skip('Renders Transcript component with the selectedNode', () => {
    const { getByText } = render(<Media node={mockNode} />)

    expect(getByText('Transcript')).toBeInTheDocument()
  })

  it.skip('Initializes boostAmount state with the boost value from the node or selectedNode', () => {
    const { getByText } = render(<Media />)

    expect(getByText(mockNode.boost.toString())).toBeInTheDocument()
  })

  it.skip('Confirms that useSelectedNode hook is called to obtain selectedNode', () => {
    render(<Media />)

    expect(mockedUseSelectedNode).toHaveBeenCalled()
  })

  it.skip('Verifies the component reacts correctly to changes in selectedNode from useSelectedNode', () => {
    const newMockNode = {
      link: 'http://example.com',
      image_url: 'http://example.com/image.png',
      date: '2022-02-09',
      boost: 20,
      text: 'example text',
      node_type: 'episode',
      type: 'video',
      id: '12',
      show_title: 'Example Show Title 1',
      episode_title: 'Example Episode Title 1',
      ref_id: 'ref1',
    }

    mockedUseSelectedNode.mockReturnValue(newMockNode)

    const { getByText } = render(<Media />)

    expect(getByText('20')).toBeInTheDocument()
    expect(getByText('sat')).toBeInTheDocument()
    expect(mockedFormatDescription).toHaveBeenCalledWith('Example Episode Title 1')
    expect(getByText('Transcript')).toBeInTheDocument()
    expect(mockedUseSelectedNode).toHaveBeenCalled()
  })
})
