describe("Checkboxes", () => {
  it("should select and deselect checkboxes", () => {
    cy.visit("https://the-internet.herokuapp.com/checkboxes");
    cy.get('input[type="checkbox"]').eq(0).check().should("be.checked");
    cy.get('input[type="checkbox"]').eq(0).uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').eq(1).uncheck().should("not.be.checked");
    cy.get('input[type="checkbox"]').eq(1).check().should("be.checked");
  });
});
