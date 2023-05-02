import { budgetModal, getScenenChildrens, host, loader, sidebarWrapper } from '../../support'
import { canvasHtmlPanel, episodeDescription, search, searchResultList } from './const'

describe('Search and render / Home interactions', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.intercept({
      hostname: host,
      method: 'GET',
      url: '/stats',
    }).as('stats')

    cy.wait('@stats', { timeout: 20000 })
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
    cy.wait('@search', { responseTimeout: 40000 })

    getScenenChildrens().should('exist')

    cy.get(sidebarWrapper)
      .should('exist')
      .find(searchResultList)
      .eq(0)
      // Select the first node
      .click()
      .find(episodeDescription)
      .then((el) => {
        const textContent = el.text().split(' ').slice(0, 2).join(' ')

        cy.get(canvasHtmlPanel).should('exist').contains(textContent)
      })
  })
})
