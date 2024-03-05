describe('Admin Login', () => {
  it('Admin uses the enable function', () => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        win.CYPRESS_USER = 'alice'
      },
    })

    const title = `Testing NavFiber`

    cy.wait(30000)
    cy.get('[data-testid="prod-view"]').click()
    cy.wait(30000)
    cy.get('[data-testid="settings-modal"]').click()
    // cy.get('[data-testid="setting-label"]').should('have.text', 'Settings')
    cy.get('[data-testid="setting-label"]').should('have.text', 'Admin Settings')
    // .invoke('text')
    // .then((value) => {
    //   console.log(value)
    // })
    cy.get('#cy-about-title-id').click()
    cy.get('#cy-about-title-id').type('{selectAll}')
    cy.get('#cy-about-title-id').type(title)

    cy.get('#add-node-submit-cta').click()
    cy.wait(200)
    cy.get('div[data-testid="close-modal"]').click()

    cy.get('.title').should('have.text', title)
  })
})
