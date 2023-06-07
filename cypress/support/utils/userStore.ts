export const setIsAdmin = (value: boolean) => {
  cy.window().its('e2e.userStore').invoke('setIsAdmin', value)
}

export const setPubKey = (value: string) => {
  cy.window().its('e2e.userStore').invoke('setPubKey', value)
}

export const resetUserStore = () => {
  setIsAdmin(false)
  setPubKey('')
}
