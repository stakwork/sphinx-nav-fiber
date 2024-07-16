/// <reference types="cypress" />

declare namespace Cypress {
  interface NodeAttributes {
    name: string
    type: string
    required: boolean
  }

  interface Chainable {
    initialSetup(username?: string, budget?: number): Chainable<void>
    addNodeType(nodeType: string, parentNode: string, attributes: NodeAttributes[]): Chainable<void>
  }
}
