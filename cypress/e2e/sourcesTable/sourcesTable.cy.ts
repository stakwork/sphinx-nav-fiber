/* eslint-disable @typescript-eslint/no-explicit-any */
import { actionMenu, addNodeModal, addNodeSubmitButton, host, resetUserStore, setIsAdmin, toast } from '../../support'
import { addSourcesBtn, openSourceBtn, table, testTitle } from './const'

const modal = () => cy.get(addNodeModal)
const toastBody = () => cy.get(toast)
const getDeleteWrapperId = (s: string) => `#delete-${s}`

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

    cy.get(table, { timeout: 10000 }).should('exist')
    resetUserStore()
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

      toastBody().should('be.visible')
      cy.get(table).find('tbody').contains(testTitle)
    })

    it("Can't edit the table", () => {
      setIsAdmin(false)

      // Try to delete an item
      cy.get(table).should('exist').and('contain.text', testTitle)
      cy.get(table).contains(testTitle).parents().eq(0).get('.delete-wrapper').should('not.exist')

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
      const cell = (title) => cy.get(table).get('tbody').contains(title).parents().eq(0)

      cell(testTitle).find(' > div').find('svg').click({ force: true })

      cy.get(table).get('tbody').find('input').click().type('1')
      cy.get(table).get('tbody').find('input + div').click()

      cy.wait('@update')
      cy.get(table).find('tbody').contains(`${testTitle}1`)

      // Delete an item
      cy.get(table)
        .get('tbody')
        .find(getDeleteWrapperId(`${testTitle}1`))
        .click()

      cy.get('[role="presentation"]').find('button:first-child').should('exist').contains(/yes/i).click()
      cy.wait('@delete')
      cy.get(table).should('exist').and('not.contain.text', `${testTitle}1`)
    })

    it('The test item was deleted after reload', () => {
      cy.get(table).should('exist').and('not.contain.text', `${testTitle}1`)
    })
  })
})
