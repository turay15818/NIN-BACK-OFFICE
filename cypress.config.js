/* eslint-disable prettier/prettier */
const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:3012/#/',
  },
})
