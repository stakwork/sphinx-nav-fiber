describe('Add Webpage Content', () => {
  it('Carol adds webpage to graph', () => {
    cy.initialSetup('carol', 50)

    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/add_node*',
    }).as('addWebpage')

    http: cy.get('[data-testid="add-content-modal"]').click()
    cy.get('[id="cy-youtube-channel-id"]').type('https://www.netflix.com/browse')
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="skip-location-btn"').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait('@addWebpage')
    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
  })
})
