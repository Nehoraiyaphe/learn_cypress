/// <reference types="cypress" />

import {
  navigateFromCartToHome,
  navigateToCartPage,
} from "../../../Pages/items/checkCart/cartFun";
import { getLoginProcess } from "../../../Tests/OperationalSystem.cy";

describe("login standard_user into the website and check the empty cart", () => {
  beforeEach(() => {
    cy.visit("/");
    getLoginProcess();
  });

  it("", () => {
    navigateToCartPage();
    navigateFromCartToHome();
  });
});
