/// <reference types="cypress" />

declare namespace Cypress {
  interface Chainable {
    initialSetup(username?: string, budget?: number): Chainable<void>
  }
}
