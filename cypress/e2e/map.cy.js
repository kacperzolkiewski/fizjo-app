/// <reference types="cypress" />
import { describe, it } from "mocha";

describe("Map", () => {
  it("Should see physiotherapis adress on map", () => {
    cy.visit("/");
    const inputs = cy.get("input").should("have.length", 2);

    inputs.first().type("kzolkiewski@agh.pl");
    cy.get('[aria-label="password-input"]').type("ssssssss");

    cy.get("button").contains("Zaloguj się").click();
    cy.contains("Kacper Zolkiewski").click();
    cy.contains("Adres").click();

    cy.contains("Twoja lokalizacja").should("be.visible");
    cy.contains("Fizjoterapeuta").should("be.visible");
  });
});
