describe('Admin Login', () => {
  it('Admin uses the enable function', () => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        win['CYPRESS_USER'] = 'alice'
      },
    })
    let title = `Testing NavFiber`
    cy.wait(30000)
    cy.get('div[data-testid="settings-modal"]').click()
    cy.get('#cy-about-title-id').click()
    cy.get('#cy-about-title-id').type('{selectAll}')
    cy.get('#cy-about-title-id').type(title)

    cy.get('#add-node-submit-cta').click()
    cy.wait(200)
    cy.get('div[data-testid="close-modal"]').click()

    cy.get('.title').should('have.text', title)
  })
})
