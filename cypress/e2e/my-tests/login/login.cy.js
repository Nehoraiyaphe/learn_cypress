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

  it("login standard_user into the website", () => {
    cy.get("[data-test=username]").type(STANDARD);
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get(".app_logo").should("exist");
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");
  });

  it("login locked_out_user into the website", () => {
    cy.get("[data-test=username]").type(LOCKED);
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Epic sadface: Sorry, this user has been locked out."
    );
  });

  it("login problem_user into the website", () => {
    cy.get("[data-test=username]").type(PROBLEM);
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get(".app_logo").should("exist");
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");
  });

  it("login performance_glitch_user into the website", () => {
    cy.get("[data-test=username]").type(PERFORMANCE);
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get(".app_logo").should("exist");
    cy.url("https://www.saucedemo.com/v1/inventory.html").should("exist");
  });
});
