import { render, screen } from '@testing-library/react'
import { Episode } from '..'

jest.mock('~/components/DataRetriever', () => ({
  useGraphData: jest.fn(),
}))

jest.mock('~/stores/useDataStore', () => ({
  useSelectedNode: jest.fn(),
}))

jest.mock('~/stores/usePlayerStore', () => ({
  usePlayerStore: jest.fn(),
}))

describe('Episode Component', () => {
  beforeEach(() => {
    require('~/components/DataRetriever').useGraphData.mockReturnValue({
      nodes: [{}, {}, {}],
    })

    require('~/stores/useDataStore').useSelectedNode.mockReturnValue({
      ref_id: '123',
      node_type: 'show',
      show_title: 'Test Show',
      timestamps: [
        { timestamp: '00:01:00', ref_id: 'ts1' },
        { timestamp: '00:02:00', ref_id: 'ts2' },
      ],
    })

    const mockSetFunction = jest.fn()

    require('~/stores/usePlayerStore').usePlayerStore.mockReturnValue([null, mockSetFunction, mockSetFunction])
  })

  it('renders correctly when a selected node is provided', () => {
    render(<Episode />)

    expect(screen.getByText('Test Show')).toBeInTheDocument()

    expect(screen.getByText('00:01:00')).toBeInTheDocument()
    expect(screen.getByText('00:02:00')).toBeInTheDocument()
  })

  it('renders no content or a specific message when there is no selected node', () => {
    require('~/stores/useDataStore').useSelectedNode.mockReturnValue(null)
    render(<Episode />)
    expect(screen.queryByText('Some specific content')).not.toBeInTheDocument()
  })

  it('displays timestamps related to the selected node', () => {
    render(<Episode />)

    expect(screen.getByText('00:01:00')).toBeInTheDocument()
    expect(screen.getByText('00:02:00')).toBeInTheDocument()
  })
})
