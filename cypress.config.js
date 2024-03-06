const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: "https://www.saucedemo.com/v1",
    env: {
      mainPageUrl: "https://www.saucedemo.com/v1/inventory.html",
      cartPageUrl: "https://www.saucedemo.com/v1/cart.html",
      checkOutUrl: "https://www.saucedemo.com/v1/checkout-step-one.html",
      checkoutCompleteUrl:
        "https://www.saucedemo.com/v1/checkout-complete.html",
    },
  },
});
