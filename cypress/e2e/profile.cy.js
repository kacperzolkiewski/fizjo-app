/// <reference types="cypress" />
import { describe, it } from "mocha";

describe("Profile", () => {
  it("Should edit profile info", () => {
    cy.visit("/");
    const inputs = cy.get("input").should("have.length", 2);

    inputs.first().type("kzolkiewski@agh.pl");
    cy.get('[aria-label="password-input"]').type("ssssssss");

    cy.get("button").contains("Zaloguj się").click();
    cy.contains("Profil").click();
    cy.contains("Kacper Wojtek").should("be.visible");

    cy.get('[aria-label="edit-profile"]').click();
    cy.get('[aria-label="surname-input"]').clear().type("Mateusz");
    cy.get("button").contains("Edytuj").click();
    cy.get("button").contains("Wróć").click();
    cy.contains("Kacper Mateusz").should("be.visible");

    cy.get('[aria-label="edit-profile"]').click();
    cy.get('[aria-label="surname-input"]').clear().type("Wojtek");
    cy.get("button").contains("Edytuj").click();
    cy.contains("Pomyślnie edytowano dane").should("be.visible");
  });
});
