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
})
