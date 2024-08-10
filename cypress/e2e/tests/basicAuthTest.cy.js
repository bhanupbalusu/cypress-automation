describe("Basic Auth", () => {
  it("should access the page with basic authentication", () => {
    cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth");

    cy.get("p").should(
      "contain",
      "Congratulations! You must have the proper credentials."
    );
  });
});
