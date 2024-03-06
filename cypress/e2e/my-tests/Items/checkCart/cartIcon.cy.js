/// <reference types="cypress" />

import { addItemsToCart } from "../../../Pages/items/addToCart/addingAndRemoving";
import {
  assertCartItemCount,
  navigateToCartPage,
  resetAppState,
} from "../../../Pages/items/checkCart/cartIcon";
import { getLoginProcess } from "../../../Tests/OperationalSystem.cy";

describe("login standard_user into the website and check the cart icon if it has the right number", () => {
  beforeEach(() => {
    cy.visit("/");
    getLoginProcess();
  });

  it("add 2 items to cart check the cart icon navigate to the cart make sure the items are there and reset app", () => {
    addItemsToCart(2);
    navigateToCartPage();
    assertCartItemCount(2);
    resetAppState();
  });
});
