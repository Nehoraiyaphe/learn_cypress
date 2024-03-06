export const AZshirt = "Test.allTheThings() T-Shirt (Red)";
export const ZAshirt = "Sauce Labs Backpack";

export const getSelectorAndCheckAZSort = (selector, itemText) => {
  cy.get(".product_sort_container").select(selector);
  cy.get(".inventory_item_name").last().should("have.text", itemText);
};

export const getSelectorAndCheckPriceSort = (selector, lowPrice, highPrice) => {
  cy.get(".product_sort_container").select(selector);
  if (selector === "lohi") {
    cy.get(".inventory_item_price").first().should("have.text", `$${lowPrice}`);
    cy.get(".inventory_item_price").last().should("have.text", `$${highPrice}`);
  }
  if (selector === "hilo") {
    cy.get(".inventory_item_price")
      .first()
      .should("have.text", `$${highPrice}`);
    cy.get(".inventory_item_price").last().should("have.text", `$${lowPrice}`);
  }
};
