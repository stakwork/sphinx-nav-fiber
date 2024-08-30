describe('Test Curation Table', () => {
  it.skip('Merge Two Topics', () => {
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
      url: 'http://localhost:8444/api/curation/search/authenticity*',
    }).as('topicSearch')

    const mergeTopic = 'authenticity'
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
        const tdValue = $td.text().trim()

        specificValue = tdValue
        cy.get('.approve-wrapper button').eq(1).click()
      })
    })

    cy.get('div[data-testid="merge"]').click()

    cy.get('#blur-on-select').type(mergeTopic)

    cy.wait('@topicSearch')
    cy.get('div[data-testid="authenticity"]').click()

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

  it.skip('Filter topics', () => {
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
