import { budgetModal, host, loader, search } from '../../support'
import { requestAnalysBtn, sentimentChart, sentimentSlider, sentimentTab } from './const'

describe('Search and render / Home interactions', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.intercept(
      {
        hostname: host,
        method: 'GET',
        url: '/stats',
      },
      {
        fixture: 'stats.json',
      },
    ).as('stats')

    cy.wait('@stats')
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
    cy.get(loader).should('exist')
    cy.wait('@search')

    cy.get(sentimentTab).click({ force: true })
    cy.get(sentimentSlider).click(2, 20)
    cy.get(requestAnalysBtn).click()

    cy.wait('@sentiments')
    cy.get(sentimentChart).should('exist')
  })
})
