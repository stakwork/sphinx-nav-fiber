describe('Add Webpage Content', () => {
  it('Carol adds webpage to graph', () => {
    cy.initialSetup('virtualNode1', 50)

    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/add_node*',
    }).as('addWebpage')

    cy.get('[data-testid="add-content-modal"]').click()
    cy.get('#addContent').should('exist')
    cy.get('[id="cy-youtube-channel-id"]').type('https://www.netflix.com/browse')
    cy.wait(1000)
    cy.get('[data-testid="add-content-btn"]').should('not.be.disabled').click()
    cy.get('[data-testid="skip-location-btn"').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait('@addWebpage')
    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
    cy.get('#addContent').should('not.exist')
  })
})
