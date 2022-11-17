/// <reference types="cypress" />
import { describe, it } from "mocha";

describe("Logout", () => {
  it("Should logout", () => {
    cy.visit("/");
    const inputs = cy.get("input").should("have.length", 2);

    inputs.first().type("kzolkiewski@agh.pl");
    cy.get('[aria-label="password-input"]').type("ssssssss");

    cy.get("button").contains("Zaloguj się").click();
    cy.contains("Wyloguj").click();
    cy.contains("Czy na pewno chcesz się wylogować").should("be.visible");
    cy.contains("Wyloguj się").click();

    cy.contains("Witamy w ZnanyFizjo!").should("be.visible");
  });
});
