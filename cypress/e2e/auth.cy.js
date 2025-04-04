import { before } from "mocha";

describe("auth form test", () => {
  before(() => {
    cy.fixture("user").then((user) => {
      globalThis.user = user;
    });
  });

  beforeEach(() => {
    cy.visit("https://www.saucedemo.com");
  });

  it("[1] enter username and password", () => {
    cy.get("[name=user-name]").type(user.username);
    cy.get("[name=password]").type(user.password);
  });

  it("[2] should show error message when login without credentials", () => {
    cy.get("#login-button").click();
    cy.get('[data-test="error"]')
      .should("be.visible")
      .and("contain", "Epic sadface: Username is required");
  });

  it("[3] should login successfully ", () => {
    cy.get("#user-name").type(user.username);
    cy.get("#password").type(user.password);
    cy.get("#login-button").click();
    cy.url().should("include", "/inventory.html");
  });
});
