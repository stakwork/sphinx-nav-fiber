import { fireEvent, render, screen } from '@testing-library/react'
import { MainToolbar } from '..'
import { useModal } from '../../../../stores/useModalStore'

jest.mock('~/stores/useModalStore')

describe('MainToolbar Component Tests', () => {
  it('renders MainToolbar component with correct elements', () => {

    (useModal as jest.Mock).mockImplementation((id: string) => ({
      close: jest.fn(),
      open: jest.fn(),
      visible: id === 'sourcesTable',
    }))

    render(<MainToolbar />)

    expect(screen.getByText('Add Content')).toBeInTheDocument()
    expect(screen.getByText('Source Table')).toBeInTheDocument()
    expect(screen.getByText('Settings')).toBeInTheDocument()
  })

  it('calls openSourcesModal when Source table is clicked', () => {
    const openMock = jest
      .fn()(useModal as jest.Mock)
      .mockImplementation((id: string) => ({
        close: jest.fn(),
        open: id === 'sourcesTable' ? openMock : jest.fn(),
        visible: false,
      }))

    render(<MainToolbar />)
    fireEvent.click(screen.getByTestId('cy-open-soure-table'))

    expect(openMock).toHaveBeenCalled()
  })

  it('calls openContentAddModal when Add content button is clicked', () => {
    const openMock = jest
      .fn()(useModal as jest.Mock)
      .mockImplementation((id: string) => ({
        close: jest.fn(),
        open: id === 'addContent' ? openMock : jest.fn(),
        visible: false,
      }))

    render(<MainToolbar />)
    fireEvent.click(screen.getByTestId('add-content-modal'))

    expect(openMock).toHaveBeenCalled()
  })

  it('calls openSettingsModal when Settings button is clicked', () => {
    const openMock = jest
      .fn()(useModal as jest.Mock)
      .mockImplementation((id: string) => ({
        close: jest.fn(),
        open: id === 'settings' ? openMock : jest.fn(),
        visible: false,
      }))

    render(<MainToolbar />)
    fireEvent.click(screen.getByText('settings-modal'))

    expect(openMock).toHaveBeenCalled()
  })
})
