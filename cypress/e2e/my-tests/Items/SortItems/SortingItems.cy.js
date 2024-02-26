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

  it("login standard_user into the website and Sort items", () => {
    cy.get("[data-test=username]").type(STANDARD);
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get(".app_logo").should("exist");
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");

    cy.get(".product_sort_container").select("az");
    cy.get(".inventory_item_name")
      .last()
      .should("have.text", "Test.allTheThings() T-Shirt (Red)");

    cy.get(".product_sort_container").select("za");
    cy.get(".inventory_item_name")
      .first()
      .should("have.text", "Test.allTheThings() T-Shirt (Red)");

    cy.get(".product_sort_container").select("lohi");
    cy.get(".inventory_item_price").first().should("have.text", `$${7.99}`);
    cy.get(".inventory_item_price").last().should("have.text", `$${49.99}`);

    cy.get(".product_sort_container").select("hilo");
    cy.get(".inventory_item_price").last().should("have.text", `$${7.99}`);
    cy.get(".inventory_item_price").first().should("have.text", `$${49.99}`);
  });
});
