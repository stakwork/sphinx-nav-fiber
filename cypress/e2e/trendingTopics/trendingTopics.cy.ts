//describe('test trending topics', () => {
//  it('Checking it trending topics exist', () => {
//    cy.intercept({
//      method: 'GET',
//      url: 'http://localhost:8444/api/graph/search/latest*',
//    }).as('loadLatest')
//
//    cy.intercept({
//      method: 'GET',
//      url: 'http://localhost:8444/api/about*',
//    }).as('loadAbout')
//
//    cy.intercept({
//      method: 'GET',
//      url: 'http://localhost:8444/api/stats*',
//    }).as('loadStats')
//
//    cy.intercept({
//      method: 'GET',
//      url: 'http://localhost:8444/api/get_trends*',
//    }).as('getTrends')
//
//    cy.intercept({
//      method: 'GET',
//      url: 'http://localhost:8444/api/graph/search*',
//    }).as('search')
//
//    cy.visit('/', {
//      onBeforeLoad(win) {
//        // @ts-ignore
//        win.CYPRESS_USER = 'carol' // eslint-disable-line no-param-reassign
//
//        // @ts-ignore
//        win.CYPRESS_USER_BUDGET = 300 // eslint-disable-line no-param-reassign
//      },
//    })
//
//    cy.wait(['@loadAbout', '@loadLatest', '@loadStats'])
//
//    // wait for boltwall queue to send tweets to jarvis
//    cy.wait(70000)
//
//    cy.wait('@getTrends').then((interception) => {
//      const responseBody = interception.response.body
//
//      cy.get('.list').should('exist')
//
//      for (let i = 0; i < responseBody.length; i++) {
//        cy.contains('.list', `${responseBody[i].name}`).should('exist')
//      }
//
//      cy.contains(`${responseBody[0].name}`).eq(0).click()
//
//      // wait for search result
//      cy.wait('@search', { timeout: 90000 }).then((interception) => {
//        cy.log('Search request intercepted')
//        expect(interception.response.statusCode).to.eq(402)
//      })
//
//      cy.intercept({
//        method: 'GET',
//        url: 'http://localhost:8444/api/graph/search*',
//      }).as('search2')
//
//      cy.wait('@search2')
//
//      // Check if the search result list has more than one child
//      // cy.get('.episode-wrapper')
//      //   .should('exist') // Ensure they exist
//      //   .should('have.length.greaterThan', 1) // Check that there are more than one
//      //   .first() // Select the first element
//      //   .click()
//
//      // cy.get('[data-testid="sidebar-sub-view"]').should('have.css', 'position', 'relative')
//
//      // cancel search
//      cy.get('[data-testid="search_action_icon"]').click()
//
//      cy.get('.list').should('exist')
//    })
//  })
//})
