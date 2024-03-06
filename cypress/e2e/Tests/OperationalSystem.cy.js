const mainPageUrl = Cypress.env("mainPageUrl");

const PASSWORD = "secret_sauce";
const STANDARD_USER = "standard_user";

export const getLoginUrl = (url) => {
  cy.url(url).should("exist");
};

export const getLoginProcess = () => {
  cy.get("[data-test=username]").type(STANDARD_USER);
  cy.get("[data-test=password]").type(PASSWORD);
  cy.get("#login-button").click();
  getLoginUrl(mainPageUrl);
};
