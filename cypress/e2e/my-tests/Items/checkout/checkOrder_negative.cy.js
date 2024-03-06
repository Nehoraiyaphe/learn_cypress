/// <reference types="cypress" />

import { addItemsToCart } from "../../../Pages/items/addToCart/addingAndRemoving";
import {
  navigateFromCartToCheckOut,
  navigateToCartPage,
} from "../../../Pages/items/checkCart/cartFun";
import {
  FIRST_NAME,
  LAST_NAME,
  POSTAL_CODE,
  assertCheckoutError,
  clearCheckOutFelids,
  fillCheckoutForm,
} from "../../../Pages/items/checkOut/checkOrder_negative";
import { getLoginProcess } from "../../../Tests/OperationalSystem.cy";

describe("login into the website", () => {
  beforeEach(() => {
    cy.visit("/");
    getLoginProcess();
  });

  it("add 2 items to cart checkout the cart and check the error messages", () => {
    addItemsToCart(2);
    navigateToCartPage();
    navigateFromCartToCheckOut();

    fillCheckoutForm("", LAST_NAME, POSTAL_CODE);
    assertCheckoutError("Error: First Name is required");
    clearCheckOutFelids();

    fillCheckoutForm(FIRST_NAME, "", POSTAL_CODE);
    assertCheckoutError("Error: Last Name is required");
    clearCheckOutFelids();

    fillCheckoutForm(FIRST_NAME, LAST_NAME, "");
    assertCheckoutError("Error: Postal Code is required");
  });
});
