export const showResults = (isAdmin: boolean, tribeUuid: string, pubKey: string, tribeHost: string) => {
  if (isAdmin || pubKey !== '' || tribeUuid !== '' || tribeHost !== '') {
    return true
  }

  return false
}
