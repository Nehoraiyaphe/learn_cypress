/// <reference types="cypress" />

import { addItemsToCart } from "../../../Pages/items/addToCart/addingAndRemoving";
import {
  assertCartItemCount,
  navigateFromCartToCheckOut,
  navigateFromCheckOutToCheckoutComplete,
  navigateToCartPage,
} from "../../../Pages/items/checkCart/cartFun";
import {
  FIRST_NAME,
  LAST_NAME,
  POSTAL_CODE,
  fillCheckoutForm,
  finishOrderMessage,
} from "../../../Pages/items/checkOut/checkOrder_negative";
import { getLoginProcess } from "../../../Tests/OperationalSystem.cy";

describe("login standard_user into the website", () => {
  beforeEach(() => {
    cy.visit("/");
    getLoginProcess();
  });

  it(" add 3 items to cart and checkout then finish the order", () => {
    addItemsToCart(3);
    navigateToCartPage();
    assertCartItemCount(3);
    navigateFromCartToCheckOut();
    fillCheckoutForm(FIRST_NAME, LAST_NAME, POSTAL_CODE);
    assertCartItemCount(3);
    navigateFromCheckOutToCheckoutComplete();
    finishOrderMessage();
  });
});
