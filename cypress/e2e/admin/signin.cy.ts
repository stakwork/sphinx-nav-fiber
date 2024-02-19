describe('Admin Login', () => {
  it('Admin uses the enable function', () => {
    cy.visit('http://localhost:3000', {
      onBeforeLoad(win) {
        win['CYPRESS_USER'] = 'alice'
      },
    })
  })
})
