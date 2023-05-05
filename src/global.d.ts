import { RootState } from '@react-three/fiber'
import { UserStore } from './stores/useUserStore'

/**
 * Use this function to add a variable to the window after extending the interface
 * import { addToGlobalForE2e } from '~/utils/tests'
 */

declare global {
  interface Window {
    e2e: {
      threeState?: RootState
      mockDataNodesLength?: number
      userStore?: UserStore
    }
  }
}
