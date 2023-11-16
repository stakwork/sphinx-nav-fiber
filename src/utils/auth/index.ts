export function extractUuidAndHost(search: string): { host: string; uuid: string } {
  const emptyState = { host: '', uuid: '' }
  let newSearch = ''

  if (!search) {
    return emptyState
  }

  if (search[0] === '?') {
    newSearch = search.substring(1, search.length)
  }

  const splitSearch = newSearch.split('&')

  for (let i = 0; i < splitSearch.length; i += 1) {
    const paramsArr = splitSearch[i].split('=')
    const [key, value] = paramsArr

    if (key === 'uuid') {
      emptyState.uuid = value
    } else if (key === 'host') {
      emptyState.host = value
    }
  }

  return emptyState
}
