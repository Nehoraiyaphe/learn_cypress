/// <reference types="cypress" />

const PASSWORD = "secret_sauce";

const STANDARD = "standard_user";
const LOCKED = "locked_out_user";
const PROBLEM = "problem_user";
const PERFORMANCE = "performance_glitch_user";

describe("login fails", () => {
  beforeEach(() => {
    cy.visit("https://www.saucedemo.com/v1/");
  });

  it("displays username and password field", () => {
    cy.get("[data-test=username]").should("exist");
    cy.get("[data-test=password]").should("exist");
  });

  it("login with wrong username", () => {
    cy.get("[data-test=username]").type("wrong_username");
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("login with wrong password", () => {
    cy.get("[data-test=username]").type(STANDARD);
    cy.get("[data-test=password]").type("wrong_password");
    cy.get("#login-button").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Epic sadface: Username and password do not match any user in this service"
    );
  });

  it("login with username and no password", () => {
    cy.get("[data-test=username]").type(STANDARD);
    cy.get("#login-button").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Epic sadface: Password is required"
    );
  });

  it("login with password and no username", () => {
    cy.get("[data-test=password]").type(PASSWORD);
    cy.get("#login-button").click();
    cy.get("[data-test=error]").should(
      "have.text",
      "Epic sadface: Username is required"
    );
  });
});
