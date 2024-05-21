describe('Test Curation Table', () => {
  it('Search Topic', () => {
    cy.initialSetup('alice', 300)

    cy.wait(3000)

    cy.get('#cy-open-soure-table').click()

    cy.wait(2000)

    cy.contains('button', 'Topics').click()

    cy.wait(2000)

    cy.get('input[placeholder="Search ..."]').type('Bitcoin')

    cy.wait(3000)

    cy.get('tbody').find('tr').should('have.length.greaterThan', 0)

    cy.get('[data-testid="topic-search-container"]').find('button[type="button"]').click()
  })

  it('Rename a Topic', () => {
    const newTopic = 'Testing Rename Topic'
    cy.initialSetup('alice', 300)

    cy.wait(3000)

    cy.get('#cy-open-soure-table').click()

    cy.wait(2000)

    cy.contains('button', 'Topics').click()

    cy.wait(2000)

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text()
        cy.get('.approve-wrapper button').eq(1).click()
      })
    })
    cy.get('div[data-testid="rename"]').click()
    cy.get('#cy-topic').clear().type(newTopic)
    cy.contains('button', 'Save').click()

    cy.wait(2000)

    cy.get('tbody > tr:first').within(() => {
      cy.get('td:nth-child(2)').then(($td) => {
        // Access the value of the first td
        const tdValue = $td.text().trim()
        expect(tdValue).to.equal(newTopic)
      })
    })
  })
})
