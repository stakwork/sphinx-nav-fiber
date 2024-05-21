describe('Test Curation Table', () => {
  it('Search Topic', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&search=Bitcoin*',
    }).as('searchTopic')

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('input[placeholder="Search ..."]').type('Bitcoin')

    cy.wait('@searchTopic')

    cy.get('tbody').find('tr').should('have.length.greaterThan', 0)

    cy.get('[data-testid="topic-search-container"]').find('button[type="button"]').click()
  })

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
    cy.get('#cy-topic').clear().type(newTopic)
    cy.contains('button', 'Save').click()

    cy.wait('@renameTopic')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text().trim()
        expect(tdValue).to.equal(newTopic)
      })
    })
  })

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
      url: 'http://localhost:8444/api/curation/search/authenticity*',
    }).as('topicSearch')

    const mergeTopic = 'authenticity'
    let specificValue = ''
    let matchFound = false
    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    //Get node content intercept
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
})
