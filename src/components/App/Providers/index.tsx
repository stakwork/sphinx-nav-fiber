import { ThemeProvider, createTheme } from '@mui/material'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { FC, PropsWithChildren } from 'react'
import { colors } from '~/utils/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: colors.primaryButton,
    },
    mode: 'dark',
  },
})

export const AppProviders: FC<PropsWithChildren> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <LocalizationProvider dateAdapter={AdapterMoment}>{children}</LocalizationProvider>
  </ThemeProvider>
)
