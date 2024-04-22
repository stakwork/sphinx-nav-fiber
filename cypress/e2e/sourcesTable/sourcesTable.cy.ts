describe('Sources Table / Home interactions', () => {
  it('Source Table Flow', () => {
    let trCount

    cy.initialSetup('alice', 300)

    cy.get('#cy-open-soure-table').click()

    cy.contains('button', 'Sources Table').click()

    cy.get('tbody.MuiTableBody-root').find('tr').its('length').should('be.gt', 0)

    cy.contains('button', 'Twitter Handle').click()

    cy.get('tbody.MuiTableBody-root').find('tr').its('length').should('be.gt', 0)

    cy.contains('button', 'Youtube channel').click()

    cy.get('tbody.MuiTableBody-root').find('tr').its('length').should('be.gt', 0)

    cy.contains('button', 'All').click()

    cy.get('tbody.MuiTableBody-root')
      .find('tr')
      .its('length')
      .then((count) => {
        trCount = count

        cy.get('tbody.MuiTableBody-root').find('tr').its('length').should('equal', trCount)

        cy.get('tbody.MuiTableBody-root').find('tr').eq(0).find('.delete-wrapper').click()

        cy.get('button[kind="small"]').contains('No').click()

        cy.get('tbody.MuiTableBody-root').find('tr').its('length').should('equal', trCount)

        cy.get('tbody.MuiTableBody-root').find('tr').eq(0).find('.delete-wrapper').click()

        cy.get('button[kind="small"]').contains('Yes').click()

        cy.get('tbody.MuiTableBody-root')
          .find('tr')
          .its('length')
          .should('equal', trCount - 1)

        cy.get('[data-testid="close-modal"]').click()
      })
  })
})
