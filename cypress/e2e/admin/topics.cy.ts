describe('Test topics as Admin', () => {
  it('Mute topic', () => {
    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.contains('button', 'Topics').click()

    cy.get('tbody').find('tr').should('have.length.gt', 1)

    cy.get('tbody').within(() => {
      // Select the first row
      cy.get('tr')
        .first()
        .within(() => {
          // Click on the last column
          cy.get('td').last().click()
        })
    })

    cy.get('[data-testid="mute"]').click()

    cy.get('[data-testid="close-modal"]').click()

    cy.get('#cy-open-soure-table').click()

    cy.contains('button', 'Topics').click()

    cy.contains('th', 'Muted').click()

    cy.get('tbody').find('tr').should('have.length.gt', 0)

    cy.get('[data-testid="close-modal"]').click()
  })
})
