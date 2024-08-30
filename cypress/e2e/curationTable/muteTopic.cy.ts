describe('Mute Topics', () => {
  it('Mute Topic', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=False&sort_by=date&node_type=Topic*',
    }).as('loadTopics')

    cy.intercept({
      method: 'PUT',
      url: 'http://localhost:8444/api/node*',
    }).as('muteTopic')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/nodes/info?skip=0&limit=50&muted=True&sort_by=date&node_type=Topic*',
    }).as('loadMutedTopics')

    let specificValue = ''
    let secondSpecificValue = ''
    let firstMatchFound = false
    let secondMatchFound = false

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.get('[data-testid="sources-table"]').should('exist')

    cy.contains('button', 'Topics').click()

    cy.wait('@loadTopics')

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text().trim()

        specificValue = tdValue
        cy.get('.approve-wrapper button').eq(0).click()
      })
    })

    cy.wait('@muteTopic')

    cy.get('thead').contains('Muted').click()

    cy.wait('@loadMutedTopics')

    cy.get('tbody')
      .find('tr')
      .each(($tr) => {
        cy.wrap($tr)
          .find('td:nth-child(2)')
          .invoke('text')
          .then((text) => {
            if (text.trim() === specificValue) {
              firstMatchFound = true
            }
          })
      })
      .then(() => {
        expect(firstMatchFound).to.be.true
      })

    cy.get('thead').contains('Muted').click()

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        const tdValue = $td.text().trim()

        secondSpecificValue = tdValue
        cy.get('.approve-wrapper button').eq(1).click()
      })
    })

    cy.get('div[data-testid="mute"]').click()

    cy.wait('@muteTopic')

    cy.get('thead').contains('Muted').click()

    cy.get('tbody')
      .find('tr')
      .each(($tr) => {
        cy.wrap($tr)
          .find('td:nth-child(2)')
          .invoke('text')
          .then((text) => {
            if (text.trim() === secondSpecificValue) {
              secondMatchFound = true
            }
          })
      })
      .then(() => {
        expect(secondMatchFound).to.be.true
      })
  })
})
