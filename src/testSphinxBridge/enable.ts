import nodes from '../../relay/nodes.json'

export function enableSphinx() {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  if ((window as any).CYPRESS_USER) {
    const user = (window as any).CYPRESS_USER

    let pubkey = ''

    for (let i = 0; i < nodes.length; i += 1) {
      if (nodes[i].alias === user) {
        pubkey = nodes[i].pubkey

        break
      }
    }

    if (!pubkey) {
      return null
    }

    return { budget: 0, pubkey }
  }

  return null
}
