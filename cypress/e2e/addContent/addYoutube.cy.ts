describe('Add Youtube Content', () => {
  it('Carol adds youtube video to graph', () => {
    cy.initialSetup('carol', 50)

    cy.get('[data-testid="add-content-modal"]').click()
    cy.get('[id="cy-youtube-channel-id"]').type('https://www.youtube.com/watch?v=dPLPSaFqJmY')
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="skip-location-btn"').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait(7000)
    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
  })
})
