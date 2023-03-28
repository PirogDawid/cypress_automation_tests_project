const { defineConfig } = require('cypress')

module.exports = defineConfig({
  
 
  env: {
    FOO: 'bar'
  },
  e2e: {
    baseUrl: 'http://localhost:8080',
    "includeShadowDom": true,
    "chromeWebSecurity": true,
    "viewportHeight": 1080,
    "viewportWidth": 1920,
    "defaultCommandTimeout": 10000,
    
    
  }
})