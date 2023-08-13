const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  reporter:'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/relatorio', //pode colocar onde quiser
    overwrite: true, // essa opção é  para subscereever 
    html: true, // para criar em html
    json: false, // para não criar em json, por não ser tão amigavel 
    timestamp: 'ddmmyyyy_HHMMss' // para dia, mês, ano, hora, minuto e segundo
  }
});
