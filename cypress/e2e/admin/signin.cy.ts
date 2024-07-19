describe('Admin Login', () => {
  it('Admin uses the enable function', () => {
    const username = 'alice'

    cy.initialSetup(username, 50)

    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/about*',
    }).as('updateAbout')

    const title = `Testing NavFiber`
    const description = 'Testing Graph Description'

    // Open settings modal
    cy.get('div[data-testid="settings-modal"]').should('be.visible').click()

    // Asserting the settings label text
    cy.get('[data-testid="setting-label"]').should('have.text', 'Admin Settings')

    // Efficiently interact with the about title
    cy.get('#cy-about-title-id').should('be.visible').click().type('{selectAll}').type(title)

    // Efficiently interact with the about description
    cy.get('#cy-about-id').should('be.visible').click().type('{selectAll}').type(description)

    // Submit the form
    cy.get('#add-node-submit-cta').click()
    cy.wait('@updateAbout')

    // Close modal and assert the title
    cy.get('div[data-testid="close-modal"]').click()
    cy.get('.title').should('have.text', title)
  })
})
