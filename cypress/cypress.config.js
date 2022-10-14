const { defineConfig } = require('cypress')

module.exports = defineConfig({
  env: {
    MAILOSAUR_API_KEY: 'YOUR_API_KEY',
  },
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
  },
})
