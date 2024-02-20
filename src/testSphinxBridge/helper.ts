import nodes from '../../relay/nodes.json'

export function getCurrentUser() {
  /* eslint-disable  @typescript-eslint/no-explicit-any */
  if ((window as any).CYPRESS_USER) {
    const user = (window as any).CYPRESS_USER

    let userNode

    for (let i = 0; i < nodes.length; i += 1) {
      if (nodes[i].alias === user) {
        userNode = nodes[i]

        break
      }
    }

    if (!userNode) {
      return null
    }

    return userNode
  }

  return null
}
