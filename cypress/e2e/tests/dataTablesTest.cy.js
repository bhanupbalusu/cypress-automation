describe("Data Tables", () => {
  it("should sort data in tables and verify the order", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.get("#table1 th").contains("Last Name").click();
  });

  it("should verify the presence of a row where due is $51.00", () => {
    cy.visit("https://the-internet.herokuapp.com/tables");
    cy.get("#table1 tbody tr")
      .filter((index, row) => {
        return Cypress.$(row).find("td").eq(3).text() === "$50.00";
      })
      .should("have.length", 2);
  });
});
