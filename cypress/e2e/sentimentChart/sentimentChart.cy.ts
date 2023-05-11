import { actionMenu, closeSidebar, host } from '../../support'
import { chartWrapper, openChartBtn } from './const'

describe('Sentiment chart  / Home interactions', () => {
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
  })

  it('Chart is rendered', () => {
    cy.intercept(
      {
        hostname: host,
        method: 'GET',
        url: '/sentiments',
      },
      (req) => {
        req.continue((res) => {
          expect(res.body?.data).to.not.empty
        })
      },
    ).as('sentiments')

    cy.get(actionMenu).click({ waitForAnimations: false })
    cy.get(openChartBtn).click({ waitForAnimations: false })

    cy.wait('@sentiments')

    cy.get(chartWrapper).contains(/Sentiment chart/i)
    cy.get(chartWrapper).find('svg').should('exist')
    cy.get(closeSidebar).click()
    cy.get(chartWrapper).should('not.exist')
  })
})
