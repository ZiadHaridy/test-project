describe("Test Case 9: Search Product", () => {
    beforeEach(() => {
        cy.visit("https://automationexercise.com");
    });

    it("Verify home page is visible successfully", () => {
        cy.get("head").should("contain", "Automation Exercise");
    });

    it("Navigate to ALL PRODUCTS page", () => {
        cy.get('a[href="/products"]').click();

        cy.url().should('include', '/products');
    });

    it("Search for a product and verify results", () => {
        cy.get('a[href="/products"]').click();

        cy.get("#search_product").type("T-shirt");
        cy.get("#submit_search").click();

        cy.get(".title").should("contain", "Searched Products");

        cy.get(".features_items").should("have.length.greaterThan", 0);
    });
});