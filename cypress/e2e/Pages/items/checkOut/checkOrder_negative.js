export const FIRST_NAME = "any";
export const LAST_NAME = "any";
export const POSTAL_CODE = "1111";

export const fillCheckoutForm = (firstName, lastName, postalCode) => {
  firstName && cy.get("#first-name").type(firstName);
  lastName && cy.get("#last-name").type(lastName);
  postalCode && cy.get("#postal-code").type(postalCode);
  cy.get(".btn_primary").click();
};

// Function to assert the error message displayed on the checkout page
export const assertCheckoutError = (expectedErrorMessage) => {
  cy.get("[data-test=error]").should("have.text", expectedErrorMessage);
};

export const clearCheckOutFelids = () => {
  cy.get("#first-name").clear();
  cy.get("#last-name").clear();
  cy.get("#postal-code").clear();
};

export const finishOrderMessage = () => {
  cy.get(".subheader").should("have.text", "Finish");
  cy.get(".complete-header").should("have.text", "THANK YOU FOR YOUR ORDER");
};
