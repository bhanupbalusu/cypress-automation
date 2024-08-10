describe("To Verify Page Load", () => {
  it("should load the main page correctly", () => {
    cy.visit("https://example.cypress.io/");

    // Verify page title
    cy.title().should("eq", "Cypress.io: Kitchen Sink");

    // Verify main page header is visible and contains correct text
    cy.get("h1").should("be.visible").and("contain", "Kitchen Sink");
  });
});
