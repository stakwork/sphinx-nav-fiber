describe('Rename Topic', () => {
  it('Rename a Topic', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info*',
    }).as('loadTopics')

    cy.intercept({
      method: 'PUT',
      url: 'http://localhost:8444/api/node*',
    }).as('renameTopic')

    const newTopic = 'Testing Rename Topic'

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text()

        cy.get('.approve-wrapper button').eq(1).click()
      })
    })

    cy.get('div[data-testid="rename"]').click()

    cy.get('#editTopic').should('exist')

    cy.get('#cy-topic').clear().type(newTopic)
    cy.contains('button', 'Save').click()

    cy.wait('@renameTopic')

    cy.get('#editTopic').should('not.exist')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text().trim()

        expect(tdValue).to.equal(newTopic)
      })
    })
  })
})
