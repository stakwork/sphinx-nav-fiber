describe('Checking test enviroment', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Using "yarn start-e2e" for tests running', () => {
    cy.get('#e2e-check').should('be.exist')
  })
})
