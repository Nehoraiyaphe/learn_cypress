/// <reference types="cypress" />

import {
  addItemsToCart,
  removeAllItemsFromCart,
} from "../../../Pages/items/addToCart/addingAndRemoving";
import { getLoginProcess } from "../../../Tests/OperationalSystem.cy";

describe("login into the website and add items to cart", () => {
  beforeEach(() => {
    cy.visit("/");
    getLoginProcess();
  });

  it("add 2 items and remove them", () => {
    addItemsToCart(2);
    cy.get(".fa-layers-counter").should("have.text", "2");
    removeAllItemsFromCart();
  });
});
