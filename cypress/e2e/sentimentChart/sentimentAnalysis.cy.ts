import { budgetModal, helperActionsMenu, host, search, siriBtn } from '../../support'
import { requestAnalysBtn, sentimentChart } from './const'

describe('Search and render / Home interactions', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.wait(5000)
  })

  it('Search and render the Graph', () => {
    cy.intercept(
      {
        hostname: host,
        method: 'GET',
        url: '/searching*',
      },
      {
        fixture: 'search.json',
      },
    ).as('search')

    cy.intercept(
      {
        hostname: host,
        method: 'GET',
        url: '/sentiments*',
      },
      {
        fixture: 'sentiments.json',
      },
    ).as('sentiments')

    cy.get(search).should('exist').type('bitcoin {enter}')
    cy.get(budgetModal).should('exist').find('button').click()
    cy.wait('@search')

    cy.get(siriBtn).click({ force: true })

    cy.get(helperActionsMenu)
      .contains(/sentimen/gi)
      .click()

    cy.get(requestAnalysBtn).click()

    cy.wait('@sentiments')
    cy.get(sentimentChart).should('exist')
  })
})
