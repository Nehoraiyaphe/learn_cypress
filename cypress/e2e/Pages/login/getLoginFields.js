export const getLoginFieldsProcess = (name, password) => {
  cy.get("[data-test=username]").type(name);
  cy.get("[data-test=password]").type(password);
  cy.get("#login-button").click();
};

export const getLoginUrl = (url) => {
  cy.url(url).should("exist");
};

export const getLoginError = (getter, error_text) => {
  cy.get(getter).should("have.text", error_text);
};

export const PASSWORD = "secret_sauce";
export const STANDARD_USER = "standard_user";
export const LOCKED_USER = "locked_out_user";
export const PROBLEM_USER = "problem_user";
export const PERFORMANCE_USER = "performance_glitch_user";
export const locked_user_error =
  "Epic sadface: Sorry, this user has been locked out.";
