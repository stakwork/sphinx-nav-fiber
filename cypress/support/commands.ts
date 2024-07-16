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
    url: 'http://localhost:8444/api/prediction/graph/search*',
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
      win.CYPRESS_USER = username || '' // eslint-disable-line no-param-reassign

      // @ts-ignore
      win.CYPRESS_USER_BUDGET = budget || 0 // eslint-disable-line no-param-reassign
    },
  })

  cy.wait(['@loadAbout', '@loadStats', '@getTrends'])
})

Cypress.Commands.add('addNodeType', (nodeType, parentNode, nodeAttributes) => {
  cy.intercept({
    method: 'POST',
    url: 'http://localhost:8444/api/schema*',
  }).as('schemaRequest')

  cy.intercept({
    method: 'GET',
    url: 'http://localhost:8444/api/schema/all*',
  }).as('schemaList')

  cy.initialSetup('alice', 300)

  cy.get('[data-testid="add-blueprint-modal"]').click()
  cy.wait(1000)

  cy.get('[data-testid="add-schema-type"]').click()
  cy.wait('@schemaList')

  cy.get('#blur-on-select').click()
  cy.get(`[data-testid="${parentNode}"]`).click()

  cy.get('#cy-item-name').type(nodeType)
  cy.wait(500)

  if (nodeAttributes.length > 0) {
    nodeAttributes.forEach((attr) => {
      cy.get('[data-testid="add-attribute-btn"]').click()
      cy.wait(500)

      cy.get('[data-testid="cy-item-name-1"]').type(attr.name)
      cy.get('[data-testid="cy-item-select-1"]').click()
      cy.contains(attr.type).click()

      if (!attr.required) {
        cy.get('[data-testid="cy-item-1"]').click()
        cy.wait(200)
      }
    })
  }

  cy.contains('Confirm').click()
  cy.wait('@schemaRequest')
})
