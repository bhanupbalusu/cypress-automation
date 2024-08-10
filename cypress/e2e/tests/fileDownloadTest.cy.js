describe("File Download", () => {
  it("download a file and verify its contents", () => {
    cy.visit("https://the-internet.herokuapp.com/download");
    cy.get('a[href="download/some-file.txt"]').click();

    // verifying the contents of the file
    const downloadsFolder = Cypress.config("downloadsFolder");

    cy.readFile(`${downloadsFolder}/some-file.txt`).should(
      "contain",
      "pardirnatural"
    );
  });
});
