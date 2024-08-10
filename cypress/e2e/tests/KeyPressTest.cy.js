describe("Key Press", () => {
  it("should verify key press events", () => {
    cy.visit("https://the-internet.herokuapp.com/key_presses");
    cy.get("body").type("{enter}");
    cy.get("#result").should("contain", "You entered: ENTER");

    cy.get("body").type("{esc}");
    cy.get("#result").should("contain", "You entered: ESCAPE");

    cy.get("body").type("{A}");
    cy.get("#result").should("contain", "You entered: A");
  });
});
