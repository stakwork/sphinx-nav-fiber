describe('Play Youtube Video fully', () => {
  it('Carol search and watches a video', () => {
    cy.initialSetup('carol', 300)

    cy.get('[data-testid="video"]').click()

    cy.get('#search-result-list').children().first().click()

    cy.get('[data-testid="play-or-pause"]').click()

    cy.get('[data-testid="play-icon"]').should('not.exist')

    cy.get('[data-testid="pause-icon"]').should('exist')

    cy.wait(5000)

    cy.get('[data-testid="play-or-pause"]').click()

    cy.get('[data-testid="play-icon"]').should('exist')

    cy.get('[data-testid="pause-icon"]').should('not.exist')
  })
})
