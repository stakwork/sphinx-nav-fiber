import { render } from '@testing-library/react'
import * as React from 'react'
import { graphStyles, useDataStore } from '..'

describe('useDataStore', () => {
  it('defaults graphStyle to "sphere"', () => {
    let style = ''

    const ComponentUsingDataStore = () => {
      const { graphStyle } = useDataStore.getState()

      style = graphStyle

      return <></>
    }

    // Render the mock component
    render(<ComponentUsingDataStore />)

    expect(style).toEqual('sphere')
  })

  it('should return views in correct order', () => {
    expect(graphStyles).toEqual(['sphere', 'force', 'split', 'earth'])
  })

  it('removes node correctly', () => {
    const initialData = {
      nodes: [
        { id: 'node_1', ref_id: 'node_1' },
        { id: 'node_2', ref_id: 'node_2' },
        { id: 'node_3', ref_id: 'node_3' },
      ],
      links: [{ source: '1', target: '3' }],
    }

    const { removeNode, setData } = useDataStore.getState()

    // Set initial data
    setData(initialData)

    // Remove node with id '2'
    removeNode('node_2')

    // Get updated state data
    const updatedData = useDataStore.getState().data

    // Expected result after removing node '2'
    const expectedData = {
      nodes: [
        { id: 'node_1', ref_id: 'node_1' },
        { id: 'node_3', ref_id: 'node_3' },
      ],
      links: [{ source: '1', target: '3' }],
    }

    expect(updatedData).toEqual(expectedData)
  })
})
