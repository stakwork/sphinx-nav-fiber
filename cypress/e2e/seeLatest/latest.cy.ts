//describe('See latest button as new node are added', () => {
//  it('See latest as nodes are being added', () => {
//    cy.initialSetup('carol', 300)
//
//    // add tweet node
//    cy.fixture('trendingTopics.json').then(async (data) => {
//      //   await addTweetNodeToJarvisBackend(data)
//      for (let i = 0; i < data.length; i += 1) {
//        let newDate
//        const date = new Date()
//
//        if (i % 2 === 0) {
//          newDate = date.toISOString()
//        } else {
//          const formatDate = new Date(date)
//
//          formatDate.setDate(date.getDate() - 3)
//          newDate = formatDate.toISOString()
//        }
//
//        cy.request({
//          method: 'POST',
//          url: 'http://localhost:8444/v1/tweet',
//          headers: {
//            'Content-Type': 'application/json',
//            'x-api-token': 'navfiber-tester',
//          },
//          body: { ...data[i], newDate },
//        })
//      }
//
//      // this is for the queue we have in boltwall
//      cy.wait(70000)
//
//      cy.intercept({
//        method: 'GET',
//        url: 'http://localhost:8444/api/prediction/graph/search/latest*',
//      }).as('getLatest')
//
//      cy.get('[data-testid="see_latest_button"]').should('exist')
//
//      cy.get('[data-testid="see_latest_button"]').click()
//      cy.wait('@getLatest')
//
//      cy.get('[data-testid="see_latest_button"]').should('not.exist')
//
//      // TODO: Get to know if twitter nodes are what is being returned
//
//      // .then((interception) => {
//      //   const { query } = interception.request
//
//      //   expect(query.media_type).to.equal('twitter')
//      // })
//    })
//  })
//})
