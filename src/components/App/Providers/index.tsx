import { createTheme, ThemeProvider } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'

import { StyledEngineProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { FC, PropsWithChildren } from 'react'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { colors } from '~/utils/colors'
import { breakpoints } from '~/utils/media'
import { MuiButton } from './MuiButton'

const palette = createPalette({
  mode: 'dark',
  primary: {
    main: colors.primaryButton,
  },
})

export const appTheme = createTheme({
  palette,
  components: {
    MuiButton,
  },
  typography: {
    button: {
      textTransform: 'none',
      whiteSpace: 'nowrap',
    },
  },
  breakpoints: {
    values: {
      xs: breakpoints.small,
      sm: breakpoints.medium,
      md: breakpoints.large,
      lg: 1200,
      xl: 1500,
    },
  },
})

export const AppProviders: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={appTheme}>
    <StyledEngineProvider injectFirst />
    <StyleThemeProvider theme={appTheme}>
      <LocalizationProvider dateAdapter={AdapterMoment}>{children}</LocalizationProvider>
    </StyleThemeProvider>
  </ThemeProvider>
)
