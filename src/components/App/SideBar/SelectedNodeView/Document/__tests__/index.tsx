import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from '@testing-library/react'
import React from 'react'
import { Document } from '..'
import { useSelectedNode } from '../../../../../../stores/useDataStore'

jest.mock('~/stores/useDataStore')
jest.mock('~/stores/useAppStore')
jest.mock('~/components/Icons/LinkIcon', () => jest.fn(() => <div data-testid="link-out-icon" />))

const mockNode = {
  date: 0,
  latitude: null,
  longitude: null,
  node_type: 'document',
  ref_id: '29835245-d8ef-48cf-82c9-9eb09116a638',
  source_link: 'https://bitcoinops.org/en/newsletters/2023/10/25/',
  text: 'Text description',
  topics: ['Bitcoin'],
  unique_id: 987654321,
  scale: 2,
  id: '29835245-d8ef-48cf-82c9-9eb09116a638',
  image_url: 'document.svg',
  type: 'document',
  x: -19.09865483951127,
  y: -336.947584637577,
  z: 907.8189609609137,
  index: 12,
  vx: 1.7587269626984922e-9,
  vy: 3.3867089340957155e-9,
  vz: 8.967562442379114e-9,
  weight: 0.7391304347826086,
}

const useSelectedNodeMock = useSelectedNode as jest.MockedFunction<typeof useSelectedNode>
const windowOpenMock = jest.fn()

beforeAll(() => {
  Object.defineProperty(window, '', {
    value: {
      open: windowOpenMock,
    },
  })
})

describe('Document Selected Veiw Tests', () => {
  useSelectedNodeMock.mockReturnValue(mockNode)

  it('asserts that clicking on the link out icon opens in a new tab', () => {
    const { getByTestId } = render(<Document />)

    expect(getByTestId('link-out-icon')).toBeInTheDocument()
    
    ;(async () => {
      await waitFor(() => fireEvent.click(getByTestId('link-out-icon')))

      expect(windowOpenMock).toHaveBeenCalledWith(mockNode.source_link)
    })()
  })
})
