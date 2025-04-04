describe("Cart Page tests", () => {
  before(() => {
    cy.fixture("user").then((user) => {
      globalThis.user = user;
    });
  });

  beforeEach(() => {
    cy.login(user.username, user.password, user.auth).then(() => {
      cy.checkout();
    });
  });

  it("[1]should fill all fields", () => {
    cy.get("[data-test=firstName]").type(user.username);
    cy.get("[data-test=lastName]").type(user.username);
    cy.get("[data-test=postalCode]").type(user.postalCode);
  });

  it("[2]should go final checkout page", () => {
    cy.fillCheckoutData();
    cy.get("[data-test=continue]").click();
    cy.url().should("contain", "checkout-step-two.html");
  });

  //   it.skip("[3]should go back to previous page", () => {
  //     cy.get("[data-test=cancel]").click();
  //     cy.url().should("contain", "cart");
  //   });
});
