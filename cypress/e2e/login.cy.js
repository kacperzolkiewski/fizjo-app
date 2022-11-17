/// <reference types="cypress" />
import { describe, it } from "mocha";

describe("Login", () => {
  it("Should login as patient", () => {
    cy.visit("/");
    const inputs = cy.get("input").should("have.length", 2);

    inputs.first().type("kzolkiewski@agh.pl");
    cy.get('[aria-label="password-input"]').type("ssssssss");

    cy.get("button").contains("Zaloguj się").click();
    cy.contains("Pomyślnie zalogowano").should("be.visible");
  });

  it("Should login as physiotherapist", () => {
    cy.visit("/");
    const inputs = cy.get("input").should("have.length", 2);

    inputs.first().type("zolkiewski2@agh.pl");
    cy.get('[aria-label="password-input"]').type("dddddddd");

    cy.get("button").contains("Zaloguj się").click();
    cy.contains("Pomyślnie zalogowano").should("be.visible");
  });
});
