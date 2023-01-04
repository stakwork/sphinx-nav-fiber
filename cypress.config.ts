// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "cypress";

export default defineConfig({
  projectId: '5pz59y',
  e2e: {
    baseUrl: 'http://localhost:3000',
    pageLoadTimeout: 90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
  },
});
