describe('Admin Login', () => {
  beforeEach(() => {
    const username = 'alice'
    cy.initialSetup(username, 50)
    cy.intercept('POST', '/api/about*').as('updateAbout')
  })

  it('Admin updates the About section successfully', () => {
    const title = 'Testing NavFiber'
    const description = 'Testing Graph Description'

    // Open settings modal
    cy.get('[data-testid="settings-modal"]').click()

    // Assert settings label
    cy.get('[data-testid="setting-label"]').should('have.text', 'Admin Settings')

    // Update About title and description
    cy.fillInput('[data-testid="about-title-input"]', title)
    cy.fillInput('[data-testid="about-description-input"]', description)

    // Submit the form
    cy.get('[data-testid="submit-button"]').click()

    // Wait for the network request to complete and assert response
    cy.wait('@updateAbout').its('response.statusCode').should('be.oneOf', [200, 201])

    // Verify that the UI reflects the updated values
    cy.get('.title').should('have.text', title)
    cy.get('.description').should('have.text', description)
    cy.get('[data-testid="success-message"]')
      .should('be.visible')
      .and('contain', 'About section updated successfully')
  })
})
