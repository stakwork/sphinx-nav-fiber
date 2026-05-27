import '@testing-library/jest-dom'
import { ThemeProvider } from '@mui/material'
import { fireEvent, render, screen } from '@testing-library/react'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { useAppStore } from '~/stores/useAppStore'
import { appTheme } from '../../Providers'
import { UniverseQuestion } from '..'

const renderWithProviders = (ui: React.ReactElement) =>
  render(
    <ThemeProvider theme={appTheme}>
      <StyleThemeProvider theme={appTheme}>{ui}</StyleThemeProvider>
    </ThemeProvider>,
  )

describe('UniverseQuestion', () => {
  beforeEach(() => {
    useAppStore.setState({
      showCollapseButton: true,
      sidebarIsOpen: false,
      universeQuestionIsOpen: true,
    })
  })

  it('closes the chat splash when the title is clicked', () => {
    renderWithProviders(<UniverseQuestion />)

    fireEvent.click(screen.getByRole('button', { name: 'Ideas have shapes' }))

    expect(useAppStore.getState().universeQuestionIsOpen).toBe(false)
    expect(useAppStore.getState().sidebarIsOpen).toBe(true)
    expect(useAppStore.getState().showCollapseButton).toBe(true)
  })
})
