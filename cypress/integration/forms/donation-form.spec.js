describe("Donation form tests", () => {

  const authUser = require("../../fixtures/auth-user.json");
  const {email, password} = authUser;

  beforeEach("Going to donation-form", () => {
    cy.visit("/forms/donation");
    cy.wait(1500);
  });

  it('Testing the auth guard', () => {
    cy.url().should("contain", "/auth");
    cy.get('p-messages').should('be.visible');
    cy.get('input[name = email]').clear().type(email);
    cy.get('p-password[name = password]').clear().type(password);
    cy.get('input[name = email]').click();
    cy.get('button[label = Login]').click();
    cy.wait(700);
    cy.url().should("contain", "/forms/donation");
  });

  it("Testing the submission of the from", () => {
    cy.get("input#first_3").type("Test");
    cy.get("input#last_3").type("Test");
    cy.get("input#input_4").type("Test");
    cy.get("span.form-radio-item").contains("100").click();
    cy.get("textarea#input_6").type("test");
    cy.get("button#input_2").click();
    cy.get("input#first_3").should("be.empty");
    cy.get("input#last_3").should("be.empty");
    cy.get("input#input_4").should("be.empty");
    cy.get("span.form-radio-item").contains("100").should("not.be.sealed");
    cy.get("textarea#input_6").should("be.empty");
    cy.get('p-messages').should('be.visible');

  });

  after("Logout", () => {
    cy.logout();
  });
});
