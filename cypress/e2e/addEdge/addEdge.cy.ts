describe('Add Node Edge Via BluePrint', () => {
  it('Should log in as admin and add node edge', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/schema/all*',
    }).as('schemaList')

    const nodeType = 'Person'
    cy.addNodeType(nodeType, 'Thing', [
      {
        name: 'age',
        type: 'number',
        required: false,
      },
    ])

    cy.get('[data-testid="add-edge"]').click()
    cy.wait('@schemaList')

    cy.get('[data-testid="from_node"]').click()
    cy.contains(nodeType).click({ force: true })
    cy.wait(500)

    cy.get('[data-testid="edge_name"]').type('Works For')

    cy.get('[data-testid="to_node"]').click()
    cy.contains('Podcast').click({ force: true })
    cy.wait(500)

    cy.contains('Confirm').click({ force: true })
  })
})
