/* eslint-disable prettier/prettier */
const { defineConfig } = require('cypress')
module.exports = defineConfig({
  chromeWebSecurity: false,
  videoCompression: 15,
  defaultCommandTimeout: 20000,
  viewportWidth: 1280,
  viewportHeight: 720,
  projectId: 'q6cwx9',
  e2e: {
    baseUrl: 'http://localhost:3012',
    setupNodeEvents(on, config) {
    },
  },

  component: {
    devServer: {
      framework: 'create-react-app',
      bundler: 'webpack',
    },
  },
})