describe('Merge Topics', () => {
  it('Merge Two Topics', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info*',
    }).as('loadTopics')

    cy.intercept({
      method: 'POST',
      url: 'http://localhost:8444/api/curation/merge*',
    }).as('mergeTopic')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/curation/search/*',
    }).as('topicSearch')

    let mergeTopic
    let specificValue = ''
    let matchFound = false

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    // Get node content intercept
    cy.wait('@loadTopics')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        specificValue = $td.text().trim()

        cy.get('.approve-wrapper button').eq(1).click()
      })
    })

    cy.get('tbody > tr:nth-child(3)')
      .within(() => {
        cy.get('td:nth-child(2)').then(($td) => {
          // Access the value of the first td
          mergeTopic = $td.text().trim()
        })
      })
      .then(() => {
        cy.get('div[data-testid="merge"]').click()

        cy.get('#blur-on-select').type(mergeTopic)

        cy.wait('@topicSearch')
        cy.get(`div[data-testid="${mergeTopic}"]`).click()

        cy.get('[data-testid="merge-topics-button"]').click()

        cy.wait('@mergeTopic')

        cy.get('#mergeTopic').should('not.exist')

        cy.get('thead').contains('Muted').click()

        cy.get('tbody')
          .find('tr')
          .each(($tr) => {
            cy.wrap($tr)
              .find('td:nth-child(2)')
              .invoke('text')
              .then((text) => {
                if (text.trim() === specificValue) {
                  matchFound = true
                }
              })
          })
          .then(() => {
            expect(matchFound).to.be.true
          })
      })
  })
})
