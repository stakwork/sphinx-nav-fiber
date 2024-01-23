import { createTheme, ThemeProvider } from '@mui/material'
import createPalette from '@mui/material/styles/createPalette'

import { StyledEngineProvider } from '@mui/material/styles'
import { LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterMoment } from '@mui/x-date-pickers/AdapterMoment'
import { FC, PropsWithChildren, useCallback, useEffect, useRef } from 'react'
import { Socket } from 'socket.io-client'
import { ThemeProvider as StyleThemeProvider } from 'styled-components'
import useSocket from '~/hooks/useSockets'
import { useUserStore } from '~/stores/useUserStore'
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
    MuiPopover: {
      styleOverrides: {
        root: {
          zIndex: 99999,
        },
      },
    },
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

export const AppProviders: FC<PropsWithChildren> = ({ children }) => {
  console.log('How many times do you reload???')

  const [setNodeCount] = useUserStore((s) => [s.setNodeCount])

  const isSocketSet: { current: boolean } = useRef<boolean>(false)

  const socket: Socket | null = useSocket()

  const handleNewNode = useCallback(() => {
    setNodeCount('INCREMENT')
  }, [setNodeCount])

  // setup socket
  useEffect(() => {
    if (isSocketSet.current) {
      return
    }

    if (socket) {
      socket.on('newnode', handleNewNode)

      isSocketSet.current = true
    }
  }, [socket, handleNewNode])

  return (
    <ThemeProvider theme={appTheme}>
      <StyledEngineProvider injectFirst />
      <StyleThemeProvider theme={appTheme}>
        <LocalizationProvider dateAdapter={AdapterMoment}>{children}</LocalizationProvider>
      </StyleThemeProvider>
    </ThemeProvider>
  )
}
