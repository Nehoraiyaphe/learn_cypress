/// <reference types="cypress" />

import {
  addItemsToCart,
  removeAllItemsFromCart,
} from "../../../Pages/items/addToCart/addingAndRemoving";
import { getLoginProcess } from "../../../Tests/OperationalSystem.cy";

describe("login standard_user into the website ", () => {
  beforeEach(() => {
    cy.visit("/");
    getLoginProcess();
  });

  it("add 2 items and check the cart and then empty it", () => {
    addItemsToCart(2);
    removeAllItemsFromCart();
    cy.get(".removed_cart_item").should("have.length", "2");
  });
});
