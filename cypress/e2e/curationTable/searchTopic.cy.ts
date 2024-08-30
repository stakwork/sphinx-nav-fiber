describe('Searching for a topic', () => {
  it('Search Topic', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    let topic

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('tbody > tr:nth-child(2)')
      .within(() => {
        cy.get('td:nth-child(2)').then(($td) => {
          topic = $td.text().trim()

          cy.intercept({
            method: 'GET',
            url: `http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&search=*`,
          }).as('searchTopic')
          console.log(encodeURIComponent(topic))
        })
      })
      .then(() => {
        cy.get('input[placeholder="Search ..."]').type(topic)

        cy.wait('@searchTopic')

        cy.get('tbody').find('tr').should('have.length.greaterThan', 0)

        cy.get('[data-testid="topic-search-container"]').find('button[type="button"]').click()
      })
  })
})
