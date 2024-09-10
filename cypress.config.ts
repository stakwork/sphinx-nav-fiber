/* eslint-disable @typescript-eslint/no-unused-vars */
// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from 'cypress'

export default defineConfig({
  env: {
    codeCoverage: {
      exclude: ['cypress/**/*.*', '*/AppNew/*'],
    },
  },
  e2e: {
    retries: 5,
    baseUrl: 'http://localhost:3000',
    defaultCommandTimeout: 10000,
    pageLoadTimeout: 90000,
    requestTimeout: 60000,
    responseTimeout: 60000,
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      // include any other plugin code...

      // It's IMPORTANT to return the config object
      // with any changed environment variables
      return config
    },
    experimentalMemoryManagement: true,
    numTestsKeptInMemory: 0,
    viewportHeight: 900,
    viewportWidth: 1440,
    watchForFileChanges: false,
  },
  component: {
    supportFile: './cypress/support/components.ts',
    devServer: {
      framework: 'react',
      bundler: 'vite',
    },
    specPattern: 'src/**/*.cy.{js,jsx,ts,tsx}',
  },
  projectId: '5pz59y',
})
