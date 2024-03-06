/// <reference types="cypress" />

import {
  getLoginFieldsNegativeProcess,
  wrong_info_error,
  STANDARD_USER,
  WRONG_USER,
  PASSWORD,
  WRONG_PASSWORD,
  no_user_error,
  no_password_error,
} from "../../Pages/login/getLoginNegative";

describe("login fails", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login with wrong username", () => {
    getLoginFieldsNegativeProcess(WRONG_USER, PASSWORD, wrong_info_error);
  });

  it("login with wrong password", () => {
    getLoginFieldsNegativeProcess(
      STANDARD_USER,
      WRONG_PASSWORD,
      wrong_info_error
    );
  });

  it("login with username and no password", () => {
    getLoginFieldsNegativeProcess(STANDARD_USER, "", no_password_error);
  });

  it("login with password and no username", () => {
    getLoginFieldsNegativeProcess("", PASSWORD, no_user_error);
  });
});
