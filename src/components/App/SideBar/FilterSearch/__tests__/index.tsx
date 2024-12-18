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
  const mockSchemaAll = [{ type: 'Type1' }, { type: 'Type2' }, { type: 'Type3' }]

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
    ;(useSchemaStore as jest.Mock).mockReturnValue([mockSchemaAll, mockSetSchemas]) // Return an array

    //
    ;(useFeatureFlagStore as jest.Mock).mockReturnValue({ fastFiltersFeatureFlag: true })

    //
    ;(getSchemaAll as jest.Mock).mockResolvedValue({ schemas: mockSchemaAll })
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
  })

  it('should highlight selected schema type when clicked', async () => {
    renderComponent()

    const type1Pill = screen.getByText('Type1')

    fireEvent.click(type1Pill)

    expect(type1Pill).toHaveStyle(`background: ${colors.white}`)
    expect(type1Pill).toHaveStyle(`color: ${colors.black}`)
  })

  it('should apply filters when "Apply" is clicked', async () => {
    renderComponent()

    const type1Pill = screen.getByText('Type1')

    fireEvent.click(type1Pill)

    const showResultsButton = screen.getByText('Apply')

    fireEvent.click(showResultsButton)

    await waitFor(() => {
      expect(mockSetFilters).toHaveBeenCalledWith({
        node_type: ['Type1'],
        limit: 30,
        depth: '1',
        top_node_count: '10',
      })
    })
  })
  // Add more specific tests as needed...
})
