describe("home page test", () => {
  beforeEach(() => {
    cy.fixture("user").then((user) =>
      cy.login(user.username, user.password, user.auth)
    );
  });

  it("[1] should add an item to the cart", () => {
    cy.get("[name=add-to-cart-sauce-labs-backpack]").first().click();
    cy.get("[name=remove-sauce-labs-backpack]").first().should("be.visible");
    cy.get(".shopping_cart_badge").should("contain", "1");
  });

  it("[2] should go to cart page", () => {
    cy.get(".shopping_cart_link").click();
    cy.url().should("contain", "cart");
  });

  it("[3]should ensure every inventory item has a name and description", () => {
    cy.get(".inventory_item").each(($el) => {
      cy.wrap($el)
        .find(
          '[data-test^="item-"][data-test$="-title-link"] .inventory_item_name'
        )
        .should("exist")
        .and("not.be.empty");

      cy.wrap($el)
        .find('[data-test="inventory-item-desc"]')
        .should("exist")
        .and("not.be.empty");
    });
  });

  it("[4]should ensure page has title on header", () => {
    cy.get(".header_secondary_container .title")
      .should("exist")
      .and("not.be.empty");
  });

  it("[5]should ensure page has filter on header", () => {
    cy.get(".header_secondary_container .product_sort_container").should(
      "exist"
    );
  });

  it("[6]should burger menu be clickable", () => {
    cy.get("#react-burger-menu-btn").click();
  });

  it("[7]should contain the correct menu items in the navigation", () => {
    cy.get(".bm-item-list")
      .should("contain", "All Items")
      .and("contain", "About")
      .and("contain", "Logout")
      .and("contain", "Reset App State");
  });

  it("[8]should burger menu be clickable", () => {
    cy.get("#react-burger-menu-btn").click();
  });
});
