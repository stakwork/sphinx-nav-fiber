describe('Add Tweeter Handler', () => {
  it('Carol adds tweet handle to graph', () => {
    cy.initialSetup('carol', 50)

    cy.get('[data-testid="add-content-modal"]').click()
    cy.get('[id="cy-youtube-channel-id"]').type('https://twitter.com/PhoenixWallet')
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="source_next_btn"]').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait(7000)
    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
  })
})
