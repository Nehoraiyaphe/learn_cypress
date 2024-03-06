/// <reference types="cypress" />

import {
  getSelectorAndCheckAZSort,
  getSelectorAndCheckPriceSort,
  AZshirt,
  ZAshirt,
} from "../../../Pages/Items/sortItems/sortIngItems";
import { getLoginProcess } from "../../../Tests/OperationalSystem.cy";

describe("login standard_user into the website and check sort items", () => {
  beforeEach(() => {
    cy.visit("/");
    getLoginProcess();
  });

  console.log("hi");
  it("Sort items a TO z", () => {
    getSelectorAndCheckAZSort("az", AZshirt);
  });

  it("Sort items z TO a", () => {
    getSelectorAndCheckAZSort("za", ZAshirt);
  });

  it("Sort items low TO high", () => {
    getSelectorAndCheckPriceSort("lohi", 7.99, 49.99);
  });

  it("Sort items high TO low", () => {
    getSelectorAndCheckPriceSort("hilo", 7.99, 49.99);
  });
});
