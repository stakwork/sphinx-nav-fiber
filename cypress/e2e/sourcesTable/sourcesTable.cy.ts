describe('Sources Table / Home interactions', () => {
  it('Source Table Flow', () => {
    cy.initialSetup('carol', 300)

    cy.get('#cy-open-soure-table').click()

    cy.contains('button', 'Sources Table').click()

    cy.contains('button', 'Twitter Handle').click()

    cy.get('[data-testid="close-modal"').click()
  })
})
