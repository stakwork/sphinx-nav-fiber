export const setIsAdmin = (value: boolean) => {
  cy.window().its('userStore').invoke('setIsAdmin', value)
}

export const setPubKey = (value: string) => {
  cy.window().its('userStore').invoke('setPubKey', value)
}

export const resetUserStore = () => {
  setIsAdmin(false)
  setPubKey('')
}