describe('Add Node Type Via BluePrint', () => {
  it('Should log in as admin and add node type', () => {
    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/schema*',
    }).as('schemaRequest')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/schema/all*',
    }).as('schemaList')

    cy.initialSetup('alice', 300)

    const nodeType = 'Player'
    cy.get('#explore-graph').should('be.visible').click()
    cy.get('[data-testid="add-blueprint-modal"]').click()
    cy.wait(1000)

    cy.get('[data-testid="add-schema-type"]').click()
    cy.wait('@schemaList')

    cy.get('#blur-on-select').click()
    cy.get('[data-testid="Thing"]').click()

    cy.get('#cy-item-name').type(nodeType)
    cy.wait(500)

    cy.get('[data-testid="add-attribute-btn"]').click()
    cy.wait(500)

    cy.get('[data-testid^="cy-item-name-"]').last().type('age')

    cy.get('[data-testid^="cy-item-select-"]').last().click()
    cy.contains('number').click()
    cy.get('[data-testid^="cy-item-"]').last().click()
    cy.wait(200)

    cy.contains('Confirm').click()
    cy.wait('@schemaRequest')

    cy.get('body').trigger('keydown', { keyCode: 27 })
    cy.wait(500)

    cy.get('[data-testid="add-item-modal"]').click()
    cy.wait(100)

    cy.get(`[data-testid="${nodeType}"]`).click()
    cy.wait(100)

    cy.get('[placeholder="Required"]').type('Lionel Messi')
    cy.contains('Next').click()
    cy.wait(500)

    cy.get('[data-testid="check-icon"]').click()
  })
})
