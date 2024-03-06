/// <reference types="cypress" />

import {
  getLogout,
  PASSWORD,
  STANDARD_USER,
} from "../../Pages/logout/getLogout";

describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login standard_user into the website and disconnect", () => {
    getLogout(STANDARD_USER, PASSWORD);
  });
});
