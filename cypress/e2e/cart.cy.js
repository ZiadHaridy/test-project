describe("Cart Page tests", () => {
  beforeEach(() => {
    cy.fixture("user")
      .then((user) => cy.login(user.username, user.password, user.auth))
      .then(() => {
        cy.cart();
      });
  });

  it("[1]should could contain footer", () => {
    cy.get(".cart_footer")
      .should("contain", "Continue Shopping")
      .and("contain", "Checkout");
  });

  it("[2] should get back to home page", () => {
    cy.get("[data-test=continue-shopping]").click();
    cy.url().should("contain", "inventory.html");
  });

  it("[3] should go to checkout page", () => {
    cy.get("[data-test=checkout]").click();
    cy.url().should("contain", "checkout-step-one.html");
  });
});
