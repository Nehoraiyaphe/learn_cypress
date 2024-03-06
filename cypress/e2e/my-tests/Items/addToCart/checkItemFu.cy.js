/// <reference types="cypress" />

import {
  addItemsToCart,
  removeItemsFromCartInTheCart,
} from "../../../Pages/items/addToCart/addingAndRemoving";
import { getLoginProcess } from "../../../Tests/OperationalSystem.cy";

describe("login standard_user into the website and add 3 items to cart and remove them", () => {
  beforeEach(() => {
    cy.visit("/");
    getLoginProcess();
  });

  it("add item to cart enter the cart and remove it", () => {
    addItemsToCart(1);
    removeItemsFromCartInTheCart();
  });
});
