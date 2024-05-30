describe('Add Tweeter Handler', () => {
  it.skip('Carol adds tweet handle to graph', () => {
    cy.initialSetup('virtualNode1', 300)

    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/radar*',
    }).as('addSource')

    cy.get('[data-testid="add-content-modal"]').click()
    cy.get('[id="cy-youtube-channel-id"]').type('https://twitter.com/PhoenixWallet')
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="source_next_btn"]').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait('@addSource')
    cy.wait(5000)
    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
  })
})
