/// <reference types="cypress" />
import { describe, it } from "mocha";

describe("messenger", () => {
  it("Patient can send a messsage to physiotherapist", () => {
    cy.visit("/");
    const inputs = cy.get("input").should("have.length", 2);

    inputs.first().type("kzolkiewski@agh.pl");
    cy.get('[aria-label="password-input"]').type("ssssssss");

    cy.get("button").contains("Zaloguj się").click();
    cy.contains("Fizjoterapeuci");

    cy.get("button").contains("Wiadomości").click();
    cy.wait(1000);
    cy.contains("Kacper Zolkiewski").click();

    cy.get("input").type("Dzień dobry");
    cy.get('[aria-label="send-button"]').click();
  });

  it("Physiotherapist can send a messsage to patient", () => {
    cy.visit("/");
    const inputs = cy.get("input").should("have.length", 2);

    inputs.first().type("zolkiewski2@agh.pl");
    cy.get('[aria-label="password-input"]').type("dddddddd");

    cy.get("button").contains("Zaloguj się").click();
    cy.contains("Wiadomości").click();
    cy.wait(1000);
    cy.contains("Kacper Wojtek").click();

    cy.get("input").type("Dzień dobry");
    cy.get('[aria-label="send-button"]').click();
  });
});
