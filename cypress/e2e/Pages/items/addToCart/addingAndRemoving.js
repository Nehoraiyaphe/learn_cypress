// Function to add multiple items to the cart
export const addItemsToCart = (numItems) => {
  for (let i = 0; i < numItems; i++) {
    cy.get(".btn_primary").first().click();
  }
  cy.get(".fa-layers-counter").should("have.text", numItems.toString());
  cy.get(".btn_secondary").each(($el, index) => {
    if (index < numItems) {
      cy.wrap($el).should("have.text", "REMOVE");
    }
  });
};

// Function to remove all items from the cart
export const removeAllItemsFromCart = () => {
  cy.get(".bm-burger-button").click();
  cy.get("#reset_sidebar_link").click();
  cy.get(".fa-layers-counter").should("not.exist");
  cy.get(".btn_primary").each(($el) => {
    cy.wrap($el).should("have.text", "ADD TO CART");
  });
};

// Function to remove all items from the cart
export const removeItemsFromCartInTheCart = () => {
  cy.get(".inventory_item_name").first().click();
  cy.get(".btn_secondary").should("have.text", "REMOVE");
  cy.get(".btn_secondary").click();
  cy.get(".inventory_details_back_button").click({ force: true });
  cy.get(".btn_primary").first().should("have.text", "ADD TO CART");
};
