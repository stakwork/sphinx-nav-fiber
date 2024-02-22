// ***********************************************************
// This example support/e2e.ts is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import nodes from '../fixtures/nodes.json'
import './commands'

// Alternatively you can use CommonJS syntax:
// require('./commands')

// coverage
import '@cypress/code-coverage/support'

// Add alice as the Second Brain tribe admin
async function setAdmin() {
  let user
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i].alias === 'alice') {
      user = nodes[i]
      break
    }
  }
  try {
    await fetch('http://localhost:8444/api/set_admin_pubkey', {
      method: 'POST',
      headers: { 'x-admin-token': 'navfiber_e2e_testing', 'Content-Type': 'application/json' },
      body: JSON.stringify({
        pubkey: user.pubkey,
        name: user.alias,
      }),
    })
  } catch (error) {
    console.error(JSON.stringify(error))
  }
}

setAdmin()
