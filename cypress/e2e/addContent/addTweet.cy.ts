describe('Add Tweet Content', () => {
  it('Carol adds tweet content to graph', () => {
    cy.initialSetup('carol', 300)

    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/add_node*',
    }).as('addTweet')

    cy.get('[data-testid="add-content-modal"]').click()

    cy.get('#addContent').should('exist')
    cy.get('[id="cy-youtube-channel-id"]').type('https://twitter.com/ijbguy/status/1771096005162729663')
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="skip-location-btn"').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait('@addTweet')
    cy.wait(5500) // This is because add source is currently skipped,
    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
    cy.get('#addContent').should('not.exist')
  })
})
