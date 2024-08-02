/* eslint-disable padding-line-between-statements */
import { ThemeProvider } from '@mui/material'
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import React from 'react'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { useDataStore } from '~/stores/useDataStore'
import { colors } from '~/utils/colors'
import { appTheme } from '../../../Providers'
import { FilterSearch } from '../index'

jest.mock('~/stores/useDataStore', () => ({
  useDataStore: jest.fn(),
}))

const mockSetFilters = jest.fn()
const mockSetShowAllSchemas = jest.fn()

const mockSchemaAll = [{ type: 'Type1' }, { type: 'Type2' }, { type: 'Type3' }, { type: 'Type4' }, { type: 'Type5' }]

describe('FilterSearch Component', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useDataStore as unknown as jest.Mock).mockReturnValue({ setFilters: mockSetFilters })
  })

  const renderComponent = (showAllSchemas = false) =>
    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <FilterSearch
            anchorEl={document.createElement('div')}
            schemaAll={mockSchemaAll}
            setShowAllSchemas={mockSetShowAllSchemas}
            showAllSchemas={showAllSchemas}
          />
        </StyleThemeProvider>
      </ThemeProvider>,
    )

  it('should highlight node_type if selected and allow multiple selections', () => {
    renderComponent()

    const type1Pill = screen.getByText('Type1')
    const type2Pill = screen.getByText('Type2')

    fireEvent.click(type1Pill)
    fireEvent.click(type2Pill)

    expect(type1Pill).toHaveStyle(`background: ${colors.white}`)
    expect(type1Pill).toHaveStyle(`color: ${colors.black}`)
    expect(type2Pill).toHaveStyle(`background: ${colors.white}`)
    expect(type2Pill).toHaveStyle(`color: ${colors.black}`)
  })

  it('should ensure node_type gets added to the request', async () => {
    renderComponent()

    const type1Pill = screen.getByText('Type1')

    fireEvent.click(type1Pill)

    const showResultsButton = screen.getByText('Show Results')

    fireEvent.click(showResultsButton)

    await waitFor(() => {
      expect(mockSetFilters).toHaveBeenCalledWith(
        expect.objectContaining({
          node_type: ['Type1'],
        }),
      )
    })
  })

  it('should ensure all selected params in the filter get added correctly to the request', async () => {
    renderComponent()

    const type1Pill = screen.getByText('Type1')

    fireEvent.click(type1Pill)

    const hopsCheckbox = screen.getByLabelText('2 hops away')

    fireEvent.click(hopsCheckbox)

    const maxResultsSlider = screen.getByTestId('max-results-slider')
    fireEvent.mouseDown(maxResultsSlider)
    fireEvent.mouseUp(maxResultsSlider, { clientX: 50 })

    const sourceNodesSlider = screen.getByTestId('source-nodes-slider')
    fireEvent.mouseDown(sourceNodesSlider)
    fireEvent.mouseUp(sourceNodesSlider, { clientX: 20 })

    const showResultsButton = screen.getByText('Show Results')
    fireEvent.click(showResultsButton)

    waitFor(() => {
      expect(mockSetFilters).toHaveBeenCalledWith({
        node_type: ['Type1'],
        limit: '50',
        depth: '2',
        top_node_count: '20',
      })
    })
  })

  it('should ensure slider is calculated from left to right correctly', () => {
    renderComponent()

    const maxResultsSlider = screen.getByTestId('max-results-slider')
    fireEvent.mouseDown(maxResultsSlider)
    fireEvent.mouseUp(maxResultsSlider, { clientX: 50 })
    waitFor(() => {
      expect(maxResultsSlider).toHaveValue(50)
    })
  })

  it('should ensure only 1 on the Hops item can be selected at once (default should be 1)', () => {
    renderComponent()

    const directRelationshipCheckbox = screen.getByLabelText('Direct relationship')
    const twoHopsAwayCheckbox = screen.getByLabelText('2 hops away')

    expect(directRelationshipCheckbox).toBeChecked()
    expect(twoHopsAwayCheckbox).not.toBeChecked()

    fireEvent.click(twoHopsAwayCheckbox)

    expect(directRelationshipCheckbox).not.toBeChecked()
    expect(twoHopsAwayCheckbox).toBeChecked()
  })

  it('should ensure the "View More" button works correctly', () => {
    renderComponent()

    const viewMoreButton = screen.getByText('View More')
    fireEvent.click(viewMoreButton)

    expect(mockSetShowAllSchemas).toHaveBeenCalledWith(true)
  })

  it('should ensure the "Clear" button works correctly', async () => {
    renderComponent()

    const type1Pill = screen.getByText('Type1')
    fireEvent.click(type1Pill)

    const clearButton = screen.getByText('Clear')
    fireEvent.click(clearButton)

    waitFor(() => {
      expect(screen.getByText('0')).toBeInTheDocument()
      expect(type1Pill).toHaveStyle(`background: ${colors.BUTTON1_PRESS}`)
      expect(type1Pill).toHaveStyle(`color: ${colors.white}`)
    })
  })

  it('should ensure the modal opens and closes correctly', () => {
    const { rerender } = renderComponent(true)

    expect(screen.getByText('Type')).toBeInTheDocument()

    rerender(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <FilterSearch
            anchorEl={null}
            schemaAll={mockSchemaAll}
            setShowAllSchemas={mockSetShowAllSchemas}
            showAllSchemas
          />
        </StyleThemeProvider>
      </ThemeProvider>,
    )

    expect(screen.queryByText('Type')).not.toBeInTheDocument()
  })

  it('should reset Source Nodes, Hops, and Max Result to default values when "Clear" button is clicked', async () => {
    renderComponent()

    const type1Pill = screen.getByText('Type1')
    fireEvent.click(type1Pill)

    const hopsCheckbox = screen.getByLabelText('2 hops away')
    fireEvent.click(hopsCheckbox)

    const maxResultsSlider = screen.getByTestId('max-results-slider')
    fireEvent.mouseDown(maxResultsSlider)
    fireEvent.mouseUp(maxResultsSlider, { clientX: 50 })

    const sourceNodesSlider = screen.getByTestId('source-nodes-slider')
    fireEvent.mouseDown(sourceNodesSlider)
    fireEvent.mouseUp(sourceNodesSlider, { clientX: 20 })

    const clearButton = screen.getByText('Clear')
    fireEvent.click(clearButton)

    waitFor(() => {
      expect(screen.getByLabelText('Direct relationship')).toBeChecked()
      expect(screen.getByTestId('max-results-slider')).toHaveValue(30)
      expect(screen.getByTestId('source-nodes-slider')).toHaveValue(10)
    })
  })
})
