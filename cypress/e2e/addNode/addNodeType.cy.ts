describe('Add Node Type Via BluePrint', () => {
  it('Should log in as admin and add node type', () => {
    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/schema*',
    }).as('schemaRequest')

    cy.initialSetup('alice', 300)

    const nodeType = 'Player'
    cy.get('[data-testid="add-blueprint-modal"]').click()
    cy.wait(1000)

    cy.get('[data-testid="add-schema-type"]').click()
    cy.wait(200)

    cy.get('#blur-on-select').click()
    cy.get('[data-testid="Thing"]').click({ force: true })
    cy.wait(200)

    cy.get('#cy-item-name').type(nodeType)
    cy.wait(500)

    cy.get('[data-testid="add-attribute-btn"]').click()
    cy.wait(500)

    cy.get('[data-testid="cy-item-name-1"]').type('age')
    cy.get('[data-testid="cy-item-select-1"]').click()
    cy.contains('number').click({ force: true })
    cy.get('[data-testid="cy-item-1"]').click()
    cy.wait(200)

    cy.contains('Confirm').click({ force: true })
    cy.wait('@schemaRequest')

    cy.get('body').trigger('keydown', { keyCode: 27 })
    cy.wait(500)
    cy.get('body').trigger('keyup', { keyCode: 27 })

    cy.get('[data-testid="add-item-modal"]').click()
    cy.wait(100)

    cy.contains(nodeType).click({ force: true })
    cy.wait(100)

    cy.get('[placeholder="Required"]').type('Lionel Messi')
    cy.contains('Next').click({ force: true })
    cy.wait(500)

    cy.get('[data-testid="check-icon"]').click()
  })
})
