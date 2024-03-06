/// <reference types="cypress" />

import {
  addItemsToCart,
  removeAllItemsFromCart,
} from "../../../Pages/items/addToCart/addingAndRemoving";
import { getLoginProcess } from "../../../Tests/OperationalSystem.cy";

const PASSWORD = "secret_sauce";
const STANDARD = "standard_user";

describe("login standard_user into the website and adding to cart items", () => {
  beforeEach(() => {
    cy.visit("/");
    getLoginProcess();
  });

  it("add 3 items to cart and remove them", () => {
    addItemsToCart(3);
    removeAllItemsFromCart();
  });
});
