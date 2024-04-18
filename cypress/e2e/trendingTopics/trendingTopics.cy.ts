describe('test trending topics', () => {
  it('Checking it trending topics exist', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/prediction/content/latest*',
    }).as('loadLatest')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/about*',
    }).as('loadAbout')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/stats*',
    }).as('loadStats')

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/get_trends*',
    }).as('getTrends')

    cy.visit('/', {
      onBeforeLoad(win) {
        // @ts-ignore
        win.CYPRESS_USER = 'carol' // eslint-disable-line no-param-reassign

        // @ts-ignore
        win.CYPRESS_USER_BUDGET = 300 // eslint-disable-line no-param-reassign
      },
    })

    cy.wait(['@loadAbout', '@loadLatest', '@loadStats'])

    cy.wait('@getTrends').then((interception) => {
      const responseBody = interception.response.body
      cy.get('.list').should('exist')
      for (let i = 0; i < responseBody.length; i++) {
        cy.contains('.list', `#${responseBody[i].name}`).should('exist')
      }
    })
  })
})
