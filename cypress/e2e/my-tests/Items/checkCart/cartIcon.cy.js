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

  it("login standard_user into the website and check the cart icon if it has the right number", () => {
    cy.get("[data-test=username]").type(STANDARD);
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get(".app_logo").should("exist");
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");

    cy.get(".btn_primary").first().click();
    cy.get(".btn_primary").first().click();
    cy.get(".fa-layers-counter").should("have.text", "2");

    cy.get(".shopping_cart_container").click();
    cy.url("https://www.saucedemo.com/v1/cart.html").should("exist");
    cy.get(".cart_item").should("have.length", "2");

    cy.get(".bm-burger-button").click();
    cy.get("#reset_sidebar_link").click();

    cy.get(".bm-cross-button").click();
    cy.get(".fa-layers-counter").should("not.exist");
    // cy.get(".removed_cart_item").should("have.length", "2");
  });
});
