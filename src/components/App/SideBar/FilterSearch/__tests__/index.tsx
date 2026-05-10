import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { getSchemaAll } from '~/network/fetchSourcesData'
import { useDataStore } from '~/stores/useDataStore'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useSchemaStore } from '~/stores/useSchemaStore'
import { colors } from '~/utils/colors'
import { appTheme } from '../../../Providers'
import { FilterSearch } from '../index'

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
}))

jest.mock('~/stores/useSchemaStore', () => ({
  useSchemaStore: jest.fn(),
}))

jest.mock('~/stores/useFeatureFlagStore', () => ({
  useFeatureFlagStore: jest.fn(),
}))

jest.mock('~/network/fetchSourcesData', () => ({
  getSchemaAll: jest.fn(),
}))

const mockSetFilters = jest.fn()
const mockSetAnchorEl = jest.fn()
const mockFetchData = jest.fn()
const mockSetAbortRequests = jest.fn()
const mockOnClose = jest.fn()

jest.mock('~/stores/useSchemaStore', () => ({
  useSchemaStore: jest.fn(),
}))

describe('FilterSearch Component', () => {
  const mockSetSchemas = jest.fn()
  const mockSetSchemaLinks = jest.fn()
  const mockSchemaAll = [{ type: 'Type1' }, { type: 'Type2' }, { type: 'Type3' }]
  const mockSchemaLinks = [
    { edge_type: 'HAS', ref_id: 'edge1', source: 'source1', target: 'target1' },
    { edge_type: 'SOURCE', ref_id: 'edge2', source: 'source2', target: 'target2' },
    { edge_type: 'CHILD_OF', ref_id: 'edge3', source: 'source3', target: 'target3' },
  ]

  beforeEach(() => {
    jest.clearAllMocks()

    //
    ;(useDataStore as jest.Mock).mockReturnValue({
      setFilters: mockSetFilters,
      fetchData: mockFetchData,
      resetData: jest.fn(),
      setAbortRequests: mockSetAbortRequests,
    })

    //
    ;(useSchemaStore as jest.Mock).mockReturnValue([mockSchemaAll, mockSchemaLinks, mockSetSchemas, mockSetSchemaLinks]) // Return an array

    //
    ;(useFeatureFlagStore as jest.Mock).mockReturnValue({ fastFiltersFeatureFlag: true })

    //
    ;(getSchemaAll as jest.Mock).mockResolvedValue({ schemas: mockSchemaAll, edges: mockSchemaLinks })
  })

  const renderComponent = () =>
    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <FilterSearch anchorEl={document.createElement('div')} onClose={mockOnClose} setAnchorEl={mockSetAnchorEl} />
        </StyleThemeProvider>
      </ThemeProvider>,
    )

  it('should fetch and display schema types', async () => {
    renderComponent()

    await waitFor(() => {
      mockSchemaAll.forEach((schema) => {
        expect(screen.getByText(schema.type)).toBeInTheDocument()
      })
    })

    expect(screen.getByText('HAS')).toBeInTheDocument()
    expect(screen.queryByText('CHILD_OF')).not.toBeInTheDocument()
  })

  it('should highlight selected schema type when clicked', async () => {
    renderComponent()

    const type1Pill = screen.getByText('Type1')

    fireEvent.click(type1Pill)

    expect(type1Pill).toHaveStyle(`background: ${colors.white}`)
    expect(type1Pill).toHaveStyle(`color: ${colors.black}`)
  })

  it('should highlight selected edge type when clicked', async () => {
    renderComponent()

    const edgePill = screen.getByText('HAS')

    fireEvent.click(edgePill)

    expect(edgePill).toHaveStyle(`background: ${colors.white}`)
    expect(edgePill).toHaveStyle(`color: ${colors.black}`)
  })

  it('should apply filters when "Apply" is clicked', async () => {
    renderComponent()

    const type1Pill = screen.getByText('Type1')
    const edgePill = screen.getByText('HAS')

    fireEvent.click(type1Pill)
    fireEvent.click(edgePill)

    const showResultsButton = screen.getByText('Apply')

    fireEvent.click(showResultsButton)

    await waitFor(() => {
      expect(mockSetFilters).toHaveBeenCalledWith({
        node_type: ['Type1'],
        edge_type: ['HAS'],
        limit: 1000,
        depth: '3',
        top_node_count: '10',
      })
    })
  })
  // Add more specific tests as needed...
})
