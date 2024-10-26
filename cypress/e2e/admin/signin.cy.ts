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

    cy.get('[data-testid="onboarding-title"]').should('have.text', 'Welcome to SecondBrain!')

    // Efficiently interact with the about title
    cy.get('#cy-graph-title-id').should('be.visible').click().type('{selectAll}').type(title)

    // Efficiently interact with the about description
    cy.get('#cy-graph-description-id').should('be.visible').click().type('{selectAll}').type(description)

    // Submit the form
    cy.get('#onboarding-confirm-cta').click()
    cy.wait('@updateAbout')

    cy.wait(1000)

    cy.get('.title').should('have.text', title)
  })
})
