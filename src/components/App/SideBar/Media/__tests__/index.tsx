import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import React from 'react'
import { Media } from '..'
import { useDataStore } from '../../../../../stores/useDataStore'
import * as format from '../../../../../utils/formatDescription'
import * as BoosterModule from '../../../../Booster'

const mockedUseDataStore = useDataStore as jest.MockedFunction<typeof useDataStore>

jest.mock('~/utils/formatDescription')
jest.mock('~/stores/useDataStore')

const mockedFormatDescription = jest.spyOn(format, 'formatDescription')

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
    mockedUseDataStore.mockImplementation(() => mockNode)

    mockedFormatDescription.mockImplementation((desc) => `Formatted: ${desc}`)

    jest.clearAllMocks()
  })

  it('Renders nothing if selectedNode is not provided and no node prop is passed', () => {
    mockedUseDataStore.mockImplementation(() => null)

    const { container } = render(<Media />)

    expect(container).toBeEmptyDOMElement()
  })

  it('Correctly formats and display the episodeTitle using formatDescription', () => {
    render(<Media node={mockNode} />)
    expect(mockedFormatDescription).toHaveBeenCalledWith(mockNode.episode_title)
  })

  it('Displays the BoostAmt component with the correct boostAmount', () => {
    const { getByText } = render(<Media />)

    expect(getByText(mockNode.boost.toString())).toBeInTheDocument()

    expect(getByText('sat')).toBeInTheDocument()
  })

  it('Renders the Booster component with appropriate props including content, count, refId, and a function to update the boost amount', () => {
    const setBoostAmount = jest.fn()

    const mockBooster = jest.spyOn(BoosterModule, 'Booster')

    jest.spyOn(React, 'useState').mockReturnValueOnce([mockNode.boost, setBoostAmount])

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

  it('Renders Description component with the selectedNode', () => {
    const { getByText } = render(<Media />)

    expect(getByText('Formatted: Example Episode Title')).toBeInTheDocument()
  })

  it('Renders Transcript component with the selectedNode', () => {
    const { getByText } = render(<Media node={mockNode} />)

    expect(getByText('Transcript')).toBeInTheDocument()
  })

  it('Initializes boostAmount state with the boost value from the node or selectedNode', () => {
    const { getByText } = render(<Media />)

    expect(getByText(mockNode.boost.toString())).toBeInTheDocument()
  })

  it('Confirms that useDataStore hook is called to obtain selectedNode', () => {
    render(<Media />)

    expect(mockedUseDataStore).toHaveBeenCalled()
  })

  it('Verifies the component reacts correctly to changes in selectedNode from useDataStore', () => {
    mockedUseDataStore.mockImplementation(() => ({
      link: 'http://example.com',
      image_url: 'http://example.com/image.png',
      date: '2022-02-09',
      boost: 15,
      text: 'example text',
      node_type: 'episode',
      type: 'video',
      id: '12',
      show_title: 'Example Show Title 1',
      episode_title: 'Example Episode Title 1',
      ref_id: 'ref1',
    }))

    const { getByText } = render(<Media />)

    expect(getByText('15')).toBeInTheDocument()
    expect(getByText('sat')).toBeInTheDocument()
    expect(mockedFormatDescription).toHaveBeenCalledWith('Example Episode Title 1')
    expect(getByText('Transcript')).toBeInTheDocument()
    expect(mockedUseDataStore).toHaveBeenCalled()
  })
})
