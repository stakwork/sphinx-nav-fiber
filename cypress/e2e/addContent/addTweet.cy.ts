describe('Add Tweet Content', () => {
  it('Carol adds tweet content to graph', () => {
    cy.initialSetup('carol', 300)

    cy.intercept(
      {
        method: 'POST',
        url: 'http://localhost:8444/api/add_node*',
      },
      {
        statusCode: 200,
        body: { success: true },
      },
    ).as('addTweet')

    cy.get('[data-testid="add-content-modal"]').click()

    cy.get('#addContent').should('exist')
    cy.get('[id="cy-youtube-channel-id"]').type('https://twitter.com/ijbguy/status/1771096005162729663')
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="skip-location-btn"]').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait('@addTweet').then((interception) => {
      console.log('Add Tweet Response:', interception.response)
      expect(interception.response.statusCode).to.equal(200)
    })

    cy.wait(5000)

    cy.get('body').then(($body) => {
      if ($body.find('.Toastify__toast-body').length > 0) {
        cy.get('.Toastify__toast-body', { timeout: 20000 }).should('have.text', 'Content Added')
      } else {
        throw new Error('Toast notification not found')
      }
    })
  })
})
