import '@testing-library/cypress/add-commands'

/// <reference types="cypress" />

// @ts-check
/// <reference path="../global.d.ts" />

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

Cypress.Commands.add('initialSetup', (username, budget) => {
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

  cy.intercept({
    method: 'GET',
    url: 'http://localhost:8444/api/prediction/graph/search/latest*',
  }).as('loadLatest')

  cy.visit('/', {
    onBeforeLoad(win) {
      win.localStorage.setItem('featureFlags', JSON.stringify({ chatInterfaceFeatureFlag: true }))

      // @ts-ignore
      win.CYPRESS_USER = username || '' // eslint-disable-line no-param-reassign

      // @ts-ignore
      win.CYPRESS_USER_BUDGET = budget || 0 // eslint-disable-line no-param-reassign
    },
  })

  cy.wait(['@loadAbout', '@loadLatest', '@loadStats'])

  cy.get('[data-testid="explore-graph-btn"]', { timeout: 90000 }).should('be.visible').click()

  cy.wait(['@getTrends'])
})
