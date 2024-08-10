describe("Checking Navigation", () => {
  it("should navigate to the correct pages", () => {
    cy.visit("https://example.cypress.io/");

    cy.get("nav a").each(($el) => {
      const href = $el.attr("href");

      if (href && href.startsWith("http")) {
      } else {
        cy.visit(`https://example.cypress.io${href}`);
        cy.url({ timeout: 10000 }).should("include", href);
      }
    });
  });
});
