/// <reference types="cypress" />

const PASSWORD = "secret_sauce";
const STANDARD = "standard_user";

const FIRST = "any";
const LAST = "any";
const POSTAL = "1111";

describe("login", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/");
  });

  it("displays username and password field", () => {
    cy.get("[data-test=username]").should("exist");
    cy.get("[data-test=password]").should("exist");
  });

  it("login standard_user into the website and add products checkout the cart and check the error messages", () => {
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

    cy.get(".btn_action").click();
    cy.url("https://www.saucedemo.com/v1/checkout-step-one.html").should(
      "exist"
    );

    // cy.get("#first-name").type(FIRST);
    cy.get("#last-name").type(LAST);
    cy.get("#postal-code").type(POSTAL);
    cy.get(".btn_primary").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Error: First Name is required"
    );

    cy.get("#first-name").type(FIRST);
    cy.get("#last-name").clear();
    cy.get("#postal-code").type(POSTAL);
    cy.get(".btn_primary").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Error: Last Name is required"
    );

    cy.get("#first-name").type(FIRST);
    cy.get("#last-name").type(LAST);
    cy.get("#postal-code").clear();
    cy.get(".btn_primary").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Error: Postal Code is required"
    );
  });
});
