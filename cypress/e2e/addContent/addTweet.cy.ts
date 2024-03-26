describe('Add Tweet Content', () => {
  it('Carol adds tweet content to graph', () => {
    cy.initialSetup('carol', 50)

    cy.get('[data-testid="add-content-modal"]').click()
    cy.get('[id="cy-youtube-channel-id"]').type('https://twitter.com/ijbguy/status/1771096005162729663')
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="skip-location-btn"').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait(7000)
    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
  })
})
