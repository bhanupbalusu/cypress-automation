describe("IFrames", () => {
  it("shoulch to iframe and verify its content", () => {
    cy.visit("https://the-internet.herokuapp.com/iframe");
    cy.get("#mce_0_ifr").then(($iframe) => {
      const $body = $iframe.contents().find("body");
      cy.wrap($body).find("p").should("contain", "Your content goes here.");
    });
  });
});
