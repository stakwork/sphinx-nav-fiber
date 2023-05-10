import { budgetModal, getScenenChildrens, host, loader } from '../../support'
import { search, searchResultList } from './const'

describe('Search and render / Home interactions', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.intercept({
      hostname: host,
      method: 'GET',
      url: '/stats',
    }).as('stats')

    cy.wait('@stats')
    cy.wait(5000)
  })

  it('Search and render the Graph', () => {
    cy.intercept({
      hostname: host,
      method: 'GET',
      url: '/searching*',
    }).as('search')

    cy.get(search).should('exist').type('bitcoin {enter}')
    cy.get(budgetModal).should('exist').find('button').click()
    cy.get(loader).should('exist')
    cy.wait('@search')

    getScenenChildrens().should('exist')
    cy.get(searchResultList).should('exist')
  })
})
