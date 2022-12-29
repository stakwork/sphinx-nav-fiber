// eslint-disable-next-line import/no-extraneous-dependencies
import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    pageLoadTimeout: 90000,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    watchForFileChanges: false,
  },
});
