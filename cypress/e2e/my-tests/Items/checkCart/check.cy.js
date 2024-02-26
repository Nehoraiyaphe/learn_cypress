/// <reference types="cypress" />

const PASSWORD = "secret_sauce";
const STANDARD = "standard_user";

describe("login", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/");
  });

  it("displays username and password field", () => {
    cy.get("[data-test=username]").should("exist");
    cy.get("[data-test=password]").should("exist");
  });

  it("login standard_user into the website and check the empty cart", () => {
    cy.get("[data-test=username]").type(STANDARD);
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get(".app_logo").should("exist");
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");

    cy.get(".shopping_cart_container").click();
    cy.url("https://www.saucedemo.com/v1/cart.html").should("exist");

    cy.get(".btn_secondary").click();
    cy.get(".app_logo").should("exist");
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");
  });
});
