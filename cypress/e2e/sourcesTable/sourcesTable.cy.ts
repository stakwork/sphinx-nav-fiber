/* eslint-disable @typescript-eslint/no-explicit-any */
import { actionMenu, addNodeModal, addNodeSubmitButton, host, resetUserStore, setIsAdmin, toast } from '../../support'
import { addSourcesBtn, openSourceBtn, table, testTitle } from './const'

const modal = () => cy.get(addNodeModal)
const toastBody = () => cy.get(toast)

describe('Sources Table / Home interactions', () => {
  beforeEach(() => {
    cy.visit('/')

    cy.intercept({
      hostname: host,
      method: 'GET',
      url: '/radar*',
    }).as('radar')

    cy.get(actionMenu).click({ waitForAnimations: false })
    cy.get(openSourceBtn).click({ waitForAnimations: false })

    cy.wait('@radar')
    resetUserStore()
  })

  it('The table is rendered', () => {
    cy.get(table).should('exist')
  })

  describe('User is not admin', () => {
    it('Can add the source', () => {
      setIsAdmin(false)

      cy.intercept({
        hostname: host,
        method: 'POST',
        url: '/radar',
      }).as('post')

      // Add new source
      cy.get(addSourcesBtn).click()
      modal().should('exist').find('[aria-label="Dropdown select"]').click()
      modal().find('[aria-label="Topic"]').click()
      modal().find('input[name="source"]').type(testTitle)
      modal().get(addNodeSubmitButton).click()
      cy.wait('@post')
      cy.wait('@radar')

      // Waiting for Toast opacity keyframe to complete
      cy.wait(3000)
      toastBody().should('be.visible')
      cy.get(table).find('tbody tr:last-child').contains(testTitle)
    })

    it("Can't edit the table", () => {
      setIsAdmin(false)

      // Try to delete an item
      cy.get(table).should('exist').and('contain.text', testTitle)
      cy.get('tbody > tr:first-child .delete-wrapper').should('not.exist')

      // Try to update an Item
      const cell = () => cy.get('tbody > tr:first-child > td + td')

      cell().find('svg').should('not.exist')
    })
  })

  describe('User is admin', () => {
    it('Can edit the table', () => {
      setIsAdmin(true)

      cy.intercept({
        hostname: host,
        method: 'PUT',
        url: '/radar/*',
      }).as('update')

      cy.intercept({
        hostname: host,
        method: 'DELETE',
        url: '/radar/*',
      }).as('delete')

      // Update an Item
      const cell = () => cy.get('tbody > tr:last-child > td + td:not(:last-child) > div')

      cell().find(' > div').find('svg').click({ force: true })
      cell().find('input').click().type('1')
      cell().find('input + div').click()
      cy.wait('@update')
      cy.get(table).find('tbody tr:last-child').contains(`${testTitle}1`)

      // Delete an item
      cy.get('tbody > tr:last-child .delete-wrapper').should('exist').click()

      cy.get('[role="presentation"]').find('button:first-child').should('exist').contains(/yes/i).click()
      cy.wait('@delete')
      cy.get(table).should('exist').and('not.contain.text', `${testTitle}1`)
    })

    it('The test item was deleted after reload', () => {
      cy.get(table).should('exist').and('not.contain.text', `${testTitle}1`)
    })
  })
})
