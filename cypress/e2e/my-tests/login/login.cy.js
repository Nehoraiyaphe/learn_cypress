/// <reference types="cypress" />

import {
  getLoginFieldsProcess,
  getLoginUrl,
  getLoginError,
  PASSWORD,
  STANDARD_USER,
  LOCKED_USER,
  PROBLEM_USER,
  PERFORMANCE_USER,
  locked_user_error,
} from "../../Pages/login/getLoginFields";

const mainPageUrl = Cypress.env("mainPageUrl");

describe("login", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("login standard_user into the website", () => {
    getLoginFieldsProcess(STANDARD_USER, PASSWORD);
    getLoginUrl(mainPageUrl);
  });

  it("login locked_out_user into the website", () => {
    getLoginFieldsProcess(LOCKED_USER, PASSWORD);
    getLoginError("[data-test=error]", locked_user_error);
  });

  it("login problem_USER_user into the website", () => {
    getLoginFieldsProcess(PROBLEM_USER, PASSWORD);
    getLoginUrl(mainPageUrl);
  });

  it("login performance_glitch_user into the website", () => {
    getLoginFieldsProcess(PERFORMANCE_USER, PASSWORD);
    getLoginUrl(mainPageUrl);
  });
});
