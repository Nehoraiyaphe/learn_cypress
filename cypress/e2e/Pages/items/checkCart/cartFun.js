const cartPageUrl = Cypress.env("cartPageUrl");
const mainPageUrl = Cypress.env("mainPageUrl");
const checkOutUrl = Cypress.env("checkOutUrl");
const checkoutCompleteUrl = Cypress.env("checkoutCompleteUrl");

export const assertCartItemCount = (expectedCount) => {
  cy.get(".cart_item").should("have.length", expectedCount);
};

export const resetAppState = () => {
  cy.get(".bm-burger-button").click();
  cy.get("#reset_sidebar_link").click();
  cy.get(".bm-cross-button").click();
  cy.get(".fa-layers-counter").should("not.exist");
};

export const navigateToCartPage = () => {
  cy.get(".shopping_cart_container").click();
  cy.url(cartPageUrl).should("exist");
};

export const navigateFromCartToHome = () => {
  cy.get(".btn_secondary").click();
  cy.url(mainPageUrl).should("exist");
};

export const navigateFromCartToCheckOut = () => {
  cy.get(".btn_action").click();
  cy.url(checkOutUrl).should("exist");
};

export const navigateFromCheckOutToCheckoutComplete = () => {
  cy.get(".btn_action").click();
  cy.url(checkoutCompleteUrl).should("exist");
};
