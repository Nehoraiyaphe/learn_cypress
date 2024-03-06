import { getLoginProcess } from "../../Tests/OperationalSystem.cy";

export const getLogout = (name, password) => {
  getLoginProcess();
  cy.get(".bm-burger-button").click();
  cy.get("#logout_sidebar_link").click();
  cy.get("[data-test=username]").should("have.value", "");
  cy.get("[data-test=password]").should("have.value", "");
};

export const PASSWORD = "secret_sauce";
export const STANDARD_USER = "standard_user";
