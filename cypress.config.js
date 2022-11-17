/* eslint-disable import/no-extraneous-dependencies */
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  projectId: 'eykidm',
  e2e: {
    baseUrl: 'http://localhost:3000',
  },
});
