describe('Add Tweeter Handler', () => {
  it('Carol adds tweet handle to graph', () => {
    cy.intercept({
      method: 'GET',
      url: 'http://localhost:8444/api/about*',
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

    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        // @ts-ignore
        win.CYPRESS_USER = 'carol'

        // @ts-ignore
        win.CYPRESS_USER_BUDGET = 50
      },
    })

    cy.wait(['@loadAbout', '@loadLatest', '@loadStats', '@getTrends'])

    cy.get('[data-testid="add-content-modal"]').click()
    cy.get('[id="cy-youtube-channel-id"]').type('https://twitter.com/PhoenixWallet')
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="source_next_btn"]').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait(7000)
    cy.get('.Toastify__toast-body').should('have.text', 'Content Added')
  })
})
