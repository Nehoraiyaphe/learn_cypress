export const getLoginFieldsNegativeProcess = (name, password, error_text) => {
  name && cy.get("[data-test=username]").type(name);
  password && cy.get("[data-test=password]").type(password);
  cy.get("#login-button").click();
  cy.get("[data-test=error]").should("have.text", error_text);
};

export const PASSWORD = "secret_sauce";
export const WRONG_PASSWORD = "wrong_password";
export const WRONG_USER = "wrong_username";
export const STANDARD_USER = "standard_user";
export const wrong_info_error =
  "Epic sadface: Username and password do not match any user in this service";
export const no_user_error = "Epic sadface: Username is required";
export const no_password_error = "Epic sadface: Password is required";
