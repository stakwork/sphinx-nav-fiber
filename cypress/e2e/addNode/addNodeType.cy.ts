describe('Add Node Type Via BluePrint', () => {
  it('Should log in as admin and add node type', () => {
    cy.initialSetup('alice', 300)

    cy.get('[data-testid="add-blueprint-modal"]').click()
    cy.wait(1000)

    cy.get('[data-testid="cy-item-name"]').clear()
    cy.get('[data-testid="cy-item-name"]').type('Player')
    cy.wait(200)

    cy.get('[data-testid="add-attribute-btn"]').click()
    cy.wait(200)

    cy.get('[data-testid="cy-item-name-1"]').type('age')
    cy.get('[data-testid="cy-item-select-1"]').click()
    cy.contains('number').click({ force: true })
    cy.get('[data-testid="cy-item-1"]').click()
    cy.wait(200)

    cy.contains('Confirm').click({ force: true })
  })
})
