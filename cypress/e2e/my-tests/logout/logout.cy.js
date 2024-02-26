/// <reference types="cypress" />

const PASSWORD = "secret_sauce";

const STANDARD = "standard_user";
const LOCKED = "locked_out_user";
const PROBLEM = "problem_user";
const PERFORMANCE = "performance_glitch_user";

describe("login", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/");
  });

  it("displays username and password field", () => {
    cy.get("[data-test=username]").should("exist");
    cy.get("[data-test=password]").should("exist");
  });

  it("login standard_user into the website and disconnect", () => {
    cy.get("[data-test=username]").type(STANDARD);
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get(".app_logo").should("exist");
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");

    cy.get(".bm-burger-button").click();
    cy.get("#logout_sidebar_link").click();
    cy.get("[data-test=username]").should("have.value", "");
    cy.get("[data-test=password]").should("have.value", "");
  });
});
