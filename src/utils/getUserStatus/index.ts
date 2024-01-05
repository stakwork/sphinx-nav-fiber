export const checkStatus = (isAdmin: boolean, tribeUuid: string, pubKey: string, tribeHost: string) => {
    if(isAdmin || tribeUuid !== '' || pubKey !== '' || tribeHost !== ''){
      return true
    }

    return false
}
