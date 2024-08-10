describe("Dynamic Content", () => {
  it("should verify content changes dynamically", () => {
    cy.visit("https://the-internet.herokuapp.com/dynamic_content");

    cy.get("#content .row").then((initialContent) => {
      const initialText = initialContent.eq(2).text();

      cy.reload();

      cy.get("#content .row").should((newContent) => {
        expect(newContent.eq(2).text()).not.to.eq(initialText);
      });
    });
  });
});
