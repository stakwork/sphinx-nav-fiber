import sphinxTobi from 'sphinx-bridge-tobibams'
import { useUserStore } from '~/stores/useUserStore'

export async function setupAdmin() {
  try {
    // enable sphinx
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const tobi = await sphinxTobi.enable()

    console.log(tobi)

    // get token from sphinx
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    const signedToken = await sphinxTobi.getSignedToken()

    if (signedToken.success) {
      useUserStore.getState().setSignedToken(signedToken.token)
    }

    // save token to userStore
  } catch (error) {
    console.log(error)
  }
}
