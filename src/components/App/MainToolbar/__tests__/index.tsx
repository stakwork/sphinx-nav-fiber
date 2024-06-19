/* eslint-disable padding-line-between-statements */
import '@testing-library/jest-dom'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { useFeatureFlagStore } from '~/stores/useFeatureFlagStore'
import { useModal } from '~/stores/useModalStore'
import { MainToolbar } from '..'
import { ThemeProvider } from '@mui/material'
import { appTheme } from '../../Providers'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { isSphinx } from '../../../../utils/isSphinx'

jest.mock('~/utils/isSphinx', () => ({
  isSphinx: jest.fn(),
}))

jest.mock('~/stores/useModalStore', () => ({
  useModal: jest.fn(),
}))

jest.mock('~/stores/useFeatureFlagStore', () => ({
  useFeatureFlagStore: jest.fn(),
}))

describe('MainToolbar Component Tests', () => {
  beforeEach(() => {
    jest.clearAllMocks()
    ;(useModal as jest.Mock).mockReturnValue({
      open: jest.fn(),
    })
    ;(useFeatureFlagStore as unknown as jest.Mock).mockReturnValue({
      customSchemaFeatureFlag: true,
      userFeedbackFeatureFlag: true,
    })
  })

  it('calls openSourcesModal when Source table is clicked', () => {
    const openMock = jest.fn()
    ;(useModal as jest.Mock).mockReturnValue({
      open: openMock,
    })

    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <MainToolbar />
        </StyleThemeProvider>
      </ThemeProvider>,
    )
    waitFor(() => {
      fireEvent.click(screen.getByTestId('cy-open-soure-table'))
      expect(openMock).toHaveBeenCalled()
    })
  })

  it('renders MainToolbar component with correct elements', () => {
    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <MainToolbar />
        </StyleThemeProvider>
      </ThemeProvider>,
    )

    waitFor(() => {
      expect(screen.getByText('Add Item')).toBeInTheDocument()
      expect(screen.getByText('Add Content')).toBeInTheDocument()
      expect(screen.getByText('Source Table')).toBeInTheDocument()
      expect(screen.getByText('Settings')).toBeInTheDocument()
    })
  })

  it('calls openContentAddModal when Add content button is clicked', () => {
    const openMock = jest.fn()
    ;(useModal as jest.Mock).mockReturnValue({
      open: openMock,
    })

    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <MainToolbar />
        </StyleThemeProvider>
      </ThemeProvider>,
    )
    fireEvent.click(screen.getByTestId('add-content-modal'))

    expect(openMock).toHaveBeenCalled()
  })

  it('calls openSettingsModal when Settings button is clicked', () => {
    const openMock = jest.fn()
    ;(useModal as jest.Mock).mockReturnValue({
      open: openMock,
    })

    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <MainToolbar />
        </StyleThemeProvider>
      </ThemeProvider>,
    )
    fireEvent.click(screen.getByTestId('settings-modal'))

    expect(openMock).toHaveBeenCalled()
  })

  it('should render feedback button only if userFeedbackFeatureFlag is true and isSphinx returns true', () => {
    ;(useFeatureFlagStore as unknown as jest.Mock).mockReturnValue({
      userFeedbackFeatureFlag: true,
    })
    ;(isSphinx as unknown as jest.Mock).mockReturnValue({
      sphinxEnabled: true,
    })

    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <MainToolbar />
        </StyleThemeProvider>
      </ThemeProvider>,
    )
    const feedbackButton = screen.getByTestId('feedback-modal')
    expect(feedbackButton).toBeInTheDocument()
  })

  it('should not render feedback button if userFeedbackFeatureFlag is true but isSphinx returns false', () => {
    ;(useFeatureFlagStore as unknown as jest.Mock).mockReturnValue({
      userFeedbackFeatureFlag: false,
    })
    ;(isSphinx as unknown as jest.Mock).mockReturnValue({
      sphinxEnabled: false,
    })

    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <MainToolbar />
        </StyleThemeProvider>
      </ThemeProvider>,
    )
    const feedbackButton = screen.queryByTestId('feedback-modal')
    waitFor(() => {
      expect(feedbackButton).not.toBeInTheDocument()
    })
  })

  it('should open feedback modal on click', () => {
    const openFeedbackModal = jest.fn()
    ;(useModal as jest.Mock).mockReturnValue({ open: openFeedbackModal })
    ;(useFeatureFlagStore as unknown as jest.Mock).mockReturnValue({ userFeedbackFeatureFlag: true })

    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <MainToolbar />
        </StyleThemeProvider>
      </ThemeProvider>,
    )

    const feedbackButton = screen.getByTestId('feedback-modal')
    fireEvent.click(feedbackButton)
    expect(openFeedbackModal).toHaveBeenCalled()
  })

  it('should show tooltip on hover', () => {
    ;(useFeatureFlagStore as unknown as jest.Mock).mockReturnValue({
      userFeedbackFeatureFlag: true,
    })

    render(
      <ThemeProvider theme={appTheme}>
        <StyleThemeProvider theme={appTheme}>
          <MainToolbar />
        </StyleThemeProvider>
      </ThemeProvider>,
    )
    const feedbackButton = screen.getByTestId('feedback-modal')
    fireEvent.mouseOver(feedbackButton)
    const tooltip = screen.getByText('Send Feedback')
    expect(tooltip).toBeInTheDocument()
  })
})
