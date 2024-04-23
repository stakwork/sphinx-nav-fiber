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

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/v2/search*',
    }).as('search')

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
        cy.contains('.list', `${responseBody[i].name}`).should('exist')
      }

      cy.contains(`${responseBody[0].name}`).eq(0).click()

      //wait for search result
      cy.wait('@search')

      cy.get('#search-result-list').should('exist')

      // Check if the search result list has more than one child
      cy.get('#search-result-list').children().should('have.length.gt', 0)

      cy.get('#search-result-list').children().first().click()

      cy.get('[data-testid="sidebar-sub-view"]').should('have.css', 'position', 'relative')

      //cancel search
      cy.get('[data-testid="search_action_icon"]').click()

      cy.get('.list').should('exist')
    })
  })
})
