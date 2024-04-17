describe('test trending topics', () => {
  it('Checking it trending topics exist', () => {
    cy.initialSetup('alice', 300)
    cy.get('.list').should('exist')
    cy.contains('.list', '#Misinformation').should('exist')
    cy.contains('.list', '#Billionaires').should('exist')
  })
})
