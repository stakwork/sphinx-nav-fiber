describe('Add Tweet Content', () => {
  it('Carol adds tweet content to graph', () => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        // @ts-ignore
        win.CYPRESS_USER = 'carol'

        // @ts-ignore
        win.CYPRESS_USER_BUDGET = 50
      },
    })

    cy.wait(3000)
    // cy.get('[data-testid="prod-view"]').click()
    cy.get('[data-testid="add-content-modal"]').click()
    cy.get('[id="cy-youtube-channel-id"]').type(
      'https://twitter.com/imabearhunter/status/1770588891831030226?t=TC5U0QShe_wRXuGahXJEVA&s=19',
    )
    cy.get('[data-testid="add-content-btn"]').click()
    cy.get('[data-testid="skip-location-btn"').click()
    cy.get('[data-testid="check-icon"]').click()

    cy.wait(6000)
    cy.get('.Toastify__toast-body')
  })
})
