import '@testing-library/cypress/add-commands'

/// <reference types="cypress" />
// ***********************************************
// This example commands.ts shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
//
declare global {
  namespace Cypress {
    interface Chainable {
      initialSetup(username?: string, budget?: number): Chainable<void>
    }
  }
}

Cypress.Commands.add('initialSetup', (username, budget) => {
  cy.intercept({
    method: 'GET',
    url: 'http://localhost:8444/api/prediction/content/latest*',
  }).as('loadLatest')

  cy.intercept({
    method: 'GET',
    url: 'http://localhost:8444/api/about*',
  }).as('loadAbout')

  cy.intercept({
    method: 'GET',
    url: 'http://localhost:8444/api/stats*',
  }).as('loadStats')

  cy.intercept({
    method: 'GET',
    url: 'http://localhost:8444/api/get_trends*',
  }).as('getTrends')

  cy.visit('/', {
    onBeforeLoad(win) {
      // @ts-ignore
      win.CYPRESS_USER = username || ''

      // @ts-ignore
      win.CYPRESS_USER_BUDGET = budget || 0
    },
  })

  cy.wait(['@loadAbout', '@loadLatest', '@loadStats', '@getTrends'])
})
