import { createTheme, ThemeProvider } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'

import { StyledEngineProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { FC, PropsWithChildren } from 'react'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import { colors } from '~/utils/colors'
import { breakpoints } from '~/utils/media'

const palette = createPalette({
  mode: 'dark',
  primary: {
    main: colors.primaryButton,
  },
})

const MuiButton = {
  defaultProps: {
    disableElevation: true,
    disableRipple: true,
  },
  styleOverrides: {
    root: {
      display: 'inline-flex',
      padding: '12px 20px',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '10px',
      borderRadius: '200px',
      background: colors.BUTTON1,
      color: 'var(--Primary-Text, #fff)',
      textAlign: 'center',
      fontFamily: 'Barlow',
      fontSize: '12px',
      fontStyle: 'normal',
      fontWeight: '400',
      lineHeight: 'normal',
      cursor: 'pointer',
      textTransform: 'initial',
      columnGap: '6px',
      '&:hover': {
        background: colors.BUTTON1_HOVER,
        color: colors.GRAY3,
        outline: 'none',
        boxShadow: 'none',
      },
      '&:focus': {
        outline: 'none',
        boxShadow: 'none',
        background: colors.BUTTON1_PRESS,
        color: colors.GRAY6,
      },
      '&:active': {
        outline: 'none',
        boxShadow: 'none',
        background: colors.BUTTON1_PRESS,
        color: colors.GRAY6,
      },
      '&.MuiButton-sizeSmall': {
        padding: '7px 16px',
        fontSize: '11px',
        fontWeight: 500,
      },
      '&.MuiButton-sizeLarge': {
        padding: '12px 24px',
        fontSize: '1.2rem',
      },

      '&.MuiButton-outlined': {},
    },
    outlined: {
      // Add your custom styles here for the outlined variant
      borderColor: colors.BUTTON1,
      borderWidth: '1px',
      backgroundColor: 'transparent',
      '&:hover': {
        borderColor: colors.BUTTON1_HOVER,
        backgroundColor: 'transparent',
        color: colors.GRAY3,
      },
      '&:active': {
        backgroundColor: colors.BUTTON1_PRESS,
        color: colors.GRAY6,
      },
    },
    startIcon: {
      // Define the size of the icon (adjust as needed)
      fontSize: '1em',
    },
    endIcon: {
      // Define the size of the icon (adjust as needed)
      fontSize: '1em',
    },
  },
}

export const appTheme = createTheme({
  palette,
  components: {
    MuiButton,
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
