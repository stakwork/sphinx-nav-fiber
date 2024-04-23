import { render, screen, within, fireEvent } from '@testing-library/react'
import React from 'react'
import { TWITTER_LINK, sourcesMapper } from '~/components/SourcesTableModal/SourcesView/constants'
import { RSS, TWITTER_HANDLE, YOUTUBE_CHANNEL } from '~/constants'
import Table from '../index' // Adjust path as needed

describe('Table Component Tests', () => {
  // Mock data based on your Sources type
  const mockData = [
    { ref_id: '1', source: '@snyke', source_type: TWITTER_HANDLE },
    { ref_id: '2', source: '@danielprince1038', source_type: YOUTUBE_CHANNEL },
    { ref_id: '3', source: 'https://anchor.fm/s/71a8cc78/podcast/rss', source_type: RSS },
  ]

  it('should correctly render links for each source type', () => {
    render(<Table canEdit={false} data={mockData} />)

    // Twitter link
    const twitterLink = screen.getByText(`@${mockData[0].source}`).closest('a')

    expect(twitterLink).toBeInTheDocument()
    expect(twitterLink).toHaveAttribute('href', `${TWITTER_LINK}/${mockData[0].source}`)

    // YouTube link
    const youtubeLink = screen.getByText(mockData[1].source).closest('a')

    expect(youtubeLink).toBeInTheDocument()
    expect(youtubeLink).toHaveAttribute('href', `${mockData[1].source}?open=system`)

    // RSS link
    const rssLink = screen.getByText(mockData[2].source).closest('a')

    expect(rssLink).toBeInTheDocument()
    expect(rssLink).toHaveAttribute('href', mockData[2].source)
  })

  it('should display the most recently added source at the top', () => {
    render(<Table canEdit={false} data={mockData} />)

    const rows = screen.getAllByRole('row')
    const firstRow = rows[1] as HTMLTableRowElement

    const expectedSourceTypeText = sourcesMapper[mockData[0].source_type]
    const sourceTypeCell = within(firstRow.cells[1]).getByText(expectedSourceTypeText)

    let sourceCellText = mockData[0].source

    if (mockData[0].source_type === TWITTER_HANDLE) {
      // Use template literal here
      sourceCellText = `@${sourceCellText}`
    }

    const sourceCell = within(firstRow.cells[2]).getByText(sourceCellText)

    expect(sourceTypeCell).toBeInTheDocument()
    expect(sourceCell).toBeInTheDocument()
  })

  it('should display loader when clicking on delete icon', async () => {
    const isEdit = true

    render(<Table canEdit={isEdit} data={mockData} />)

    const deleteIcon = screen.getByTestId('delete-icon-2')

    fireEvent.click(deleteIcon)

    const confirmDelete = await screen.findByText('Yes')

    fireEvent.click(confirmDelete)

    const loader = await screen.findByTestId('delete-loader-2')

    expect(loader).toBeInTheDocument()
  })

  it('should display loader when clicking on edit icon and then check icon', async () => {
    const isEdit = true

    render(<Table canEdit={isEdit} data={mockData} />)

    const editIcon = screen.getByTestId('edit-icon-1')

    fireEvent.click(editIcon)

    const checkIcon = screen.getByTestId('check-icon-1')

    fireEvent.click(checkIcon)

    const loader = await screen.findByTestId('edit-loader-1')

    expect(loader).toBeInTheDocument()
  })
})
