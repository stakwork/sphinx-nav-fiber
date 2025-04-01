//describe('Add Tweet Content', () => {
//  it('Carol adds tweet content to graph', () => {
//    cy.initialSetup('carol', 300)
//
//    cy.intercept({
//      method: 'POST',
//      url: 'http://localhost:8444/api/add_node*',
//    }).as('addTweet')
//
//    cy.get('[data-testid="add-content-modal"]').click()
//
//    cy.get('#addContent').should('exist')
//    cy.get('[id="cy-youtube-channel-id"]').type('https://x.com/notgrubles/status/1883539158364471443')
//    cy.get('[data-testid="add-content-btn"]').click()
//    cy.get('[data-testid="check-icon"]').click()
//
//    cy.wait('@addTweet').then((interception) => {
//      // check we get a 402 response code, when trying to add content for the first time
//      expect(interception.response.statusCode).to.eq(402)
//    })
//
//    cy.intercept({
//      method: 'POST',
//      url: 'http://localhost:8444/api/add_node*',
//    }).as('addTweet2')
//
//    cy.wait('@addTweet2').then((intersection) => {
//      console.log(intersection.response)
//      cy.log(JSON.stringify(intersection.response))
//    }) // This is because add source is currently skipped,
//
//    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
//
//    cy.get('#addContent').should('not.exist')
//  })
//})
