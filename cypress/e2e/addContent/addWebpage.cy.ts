describe('Add Webpage Content', () => {
  it('Carol adds webpage to graph', () => {
    cy.initialSetup('carol', 50)

    cy.get('[data-testid="add-content-modal"]').click()
    cy.get('[id="cy-youtube-channel-id"]').type('https://www.netflix.com/browse')
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="skip-location-btn"').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait(7000)
    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
  })
})
