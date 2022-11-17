/// <reference types="cypress" />
import { describe, it } from "mocha";

describe("Visits", () => {
  it("Patient should schedule a visit", () => {
    cy.visit("/");
    const inputs = cy.get("input");

    inputs.first().type("kzolkiewski@agh.pl");
    cy.get('[aria-label="password-input"]').type("ssssssss");

    cy.get("button").contains("Zaloguj się").click();
    cy.contains("Kacper Zolkiewski").click();

    cy.contains("Kalendarz").click();
    cy.contains("22:00").click();
    cy.get("button").contains("Tak").click();

    cy.contains("Pomyślnie Zarezerwowano wizytę").should("be.visible");
  });

  it("Patient should delete a visit", () => {
    cy.visit("/");
    const inputs = cy.get("input");

    inputs.first().type("kzolkiewski@agh.pl");
    cy.get('[aria-label="password-input"]').type("ssssssss");

    cy.get("button").contains("Zaloguj się").click();
    cy.contains("Kacper Zolkiewski").click();

    cy.contains("Wizyty").click();
    cy.wait(1000);
    const menuButtons = cy.get('[aria-label="visit-menu-button"]');
    menuButtons.last().click();
    cy.contains("odwołaj wizytę").click({ force: true });

    cy.contains("Czy na pewno chcesz odwołać tę wizytę?").should("be.visible");
    cy.get("button").contains("Tak").click();
    cy.contains("Pomyślnie odwołano wizytę").should("be.visible");
  });
});
