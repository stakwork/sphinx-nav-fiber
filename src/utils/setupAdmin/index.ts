import sphinx from 'sphinx-bridge'
import { useUserStore } from '~/stores/useUserStore'

export async function setupAdmin() {
  try {
    // get token from sphinx
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const signedToken = await sphinx.getSignedToken()

    if (signedToken.success) {
      useUserStore.getState().setSignedToken(signedToken.token)
    }

    // save token to userStore
  } catch (error) {
    console.log(error)
  }
}
