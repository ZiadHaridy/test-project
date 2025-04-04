Cypress.Commands.add("login", (username, password, path) => {
  cy.visit(path);
  cy.get("#user-name").type(username);
  cy.get("#password").type(password);
  cy.get("#login-button").click();
  cy.url().should("include", "/inventory.html");
});

Cypress.Commands.add("cart", () => {
  cy.get(".shopping_cart_link").click();
  cy.url().should("include", "/cart.html");
});

Cypress.Commands.add("checkout", () => {
  cy.get(".shopping_cart_link").click();
  cy.url().should("contain", "cart");
  cy.get("[data-test=checkout]").click();
  cy.url().should("contain", "checkout");
});

Cypress.Commands.add("fillCheckoutData", () => {
  cy.get("[data-test=firstName]").type(user.username);
  cy.get("[data-test=lastName]").type(user.username);
  cy.get("[data-test=postalCode]").type(user.postalCode);
});
