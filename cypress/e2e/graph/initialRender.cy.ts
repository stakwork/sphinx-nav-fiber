import { getScenenChildrens, host } from '../../support'

describe('Initial graph render / Home interactions', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.intercept({
      hostname: host,
      method: 'GET',
      url: '/stats',
    }).as('stats')

    cy.wait('@stats')
  })

  it('The graph is rendered', () => {
    getScenenChildrens().should('exist')

    getScenenChildrens().then((children) => {
      expect(children).to.be.length
    })
  })
})
