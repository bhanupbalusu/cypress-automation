describe("Javascript Pop-ups", () => {
  it("should handle JavaScript alert", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get('button[onclick="jsAlert()"]').click();
    cy.on("window:alert", (text) => {
      expect(text).to.contains("I am a JS Alert");
    });
    cy.get("#result").should("contain", "You successfully clicked an alert");
  });

  it("should handle JavaScript confirm", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.get('button[onclick="jsConfirm()"]').click();
    cy.on("window:confirm", () => false);
    cy.get("#result").should("contain", "You clicked: Cancel");
  });

  it("should handle JavaScript prompt", () => {
    cy.visit("https://the-internet.herokuapp.com/javascript_alerts");
    cy.window().then((win) => {
      cy.stub(win, "prompt").returns("This is a test");
      cy.get('button[onclick="jsPrompt()"]').click();
    });
    cy.get("#result").should("contain", "You entered: This is a test");
  });
});
