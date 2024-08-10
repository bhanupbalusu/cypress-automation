describe("File Upload", () => {
  it("should upload a text file", () => {
    cy.visit("https://the-internet.herokuapp.com/upload");
    cy.get("#file-upload").attachFile("testfile.txt");
    cy.get("#file-submit").click();
    cy.get("#uploaded-files").should("contain", "testfile.txt");
  });
});
