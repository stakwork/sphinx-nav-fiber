import { RootState } from '@react-three/fiber'
import { UserStore } from './stores/useUserStore'

/* eslint-disable @typescript-eslint/no-empty-interface */
import { Theme } from '@mui/material'
import 'styled-components'

/**
 * Use this function to add a variable to the window after extending the interface
 * import { addToGlobalForE2e } from '~/utils/tests'
 */

declare global {
  interface Window {
    e2e: {
      threeState?: RootState
      userStore?: UserStore
    }
  }
}

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
