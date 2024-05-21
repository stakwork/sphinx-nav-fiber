describe('Test Curation Table', () => {
  it.skip('Search Topic', () => {
    cy.initialSetup('alice', 300)

    cy.wait(1000)

    cy.get('#cy-open-soure-table').click()

    cy.wait(2000)

    cy.contains('button', 'Topics').click()

    cy.wait(2000)

    cy.get('input[placeholder="Search ..."]').type('Bitcoin')

    cy.wait(3000)

    cy.get('tbody').find('tr').should('have.length.greaterThan', 0)

    cy.get('[data-testid="topic-search-container"]').find('button[type="button"]').click()
  })

  it.skip('Rename a Topic', () => {
    const newTopic = 'Testing Rename Topic'
    cy.initialSetup('alice', 300)

    cy.wait(1000)

    cy.get('#cy-open-soure-table').click()

    cy.wait(2000)

    cy.contains('button', 'Topics').click()

    cy.wait(2000)

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

    cy.wait(2000)

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

    //?exact_match=false&sig=IPdj0TwvsmPUn7pNYm2x5my7D22dVCNWrF06SKDP40vWMUM6uzyOAM3o7vkJL7JGuMKySxuYGUHtJzCKvDwps-o%3D&msg=27b5c671-9e69-4d2f-8884-fc292f7ac6991716302892380

    http: const mergeTopic = 'authenticity'
    let specificValue = '' // Replace with the value you are looking for
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
