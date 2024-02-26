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

  it("login standard_user into the website and add 3 items to cart and remove them", () => {
    cy.get("[data-test=username]").type(STANDARD);
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get(".app_logo").should("exist");
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");

    cy.get(".btn_primary").first().click();
    cy.get(".inventory_item_name").first().click();
    cy.get(".btn_secondary").should("have.text", "REMOVE");
    cy.get(".btn_secondary").click();
    cy.get(".inventory_details_back_button").click({ force: true });
    cy.get(".btn_primary").first().should("have.text", "ADD TO CART");
  });
});
