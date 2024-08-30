describe('Filter', () => {
  it('Filter topics', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    let firstCount

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(4)').then(($td) => {
        const tdValue = $td.text().trim()

        firstCount = parseInt(tdValue)
      })
    })

    cy.get('thead').contains('Count').click()

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(4)').then(($td) => {
        const tdValue = parseInt($td.text().trim())

        expect(tdValue).to.be.gt(firstCount)
      })
    })
  })
})
