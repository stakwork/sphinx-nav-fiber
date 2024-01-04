export const showResults = (isAdmin: boolean) => {
  if (isAdmin) {
    return true
  }
  return false
}
