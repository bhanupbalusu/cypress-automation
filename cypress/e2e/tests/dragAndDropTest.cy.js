describe("Drag and Drop", () => {
  it("should perform drag and drop", () => {
    cy.visit("https://the-internet.herokuapp.com/drag_and_drop");
    const dataTransfer = new DataTransfer();

    cy.get("#column-a").should("contain", "A");
    cy.get("#column-b").should("contain", "B");

    cy.get("#column-a").trigger("dragstart", { dataTransfer });
    cy.get("#column-b").trigger("drop", { dataTransfer });

    cy.get("#column-a").should("contain", "B");
    cy.get("#column-b").should("contain", "A");
  });
});
