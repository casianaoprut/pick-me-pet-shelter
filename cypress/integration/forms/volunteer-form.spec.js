describe("Volunteer form tests",() => {

  const authUser = require("../../fixtures/auth-user.json");
  const {email, password} = authUser;
  const volunteerForms = require("../../fixtures/volunteerForm.json");

  beforeEach("Going to donation-form", () => {
    cy.visit("/forms/volunteer");
    cy.wait(1500);
  });

  it('Testing the auth guard', () => {
    cy.url().should("contain", "/auth?returnUrl=forms%2Fvolunteer");
    cy.get('p-messages').should('be.visible');
    cy.get('input[name = email]').clear().type(email);
    cy.get('p-password[name = password]').clear().type(password);
    cy.get('input[name = email]').click();
    cy.get('button[label = Login]').click();
    cy.wait(700);
    cy.url().should("contain", "/forms/volunteer");
  });

  it("Testing the submission of the form", () => {
    cy.fillVolunteerForm();
    cy.wait(1000);
    cy.visit('/my-forms');
    cy.wait(1000);
    cy.get('div#mat-tab-label-0-1').click();
    cy.get("p-panel").contains(volunteerForms.firstname + ' ' + volunteerForms.lastname).should("exist").and("be.visible");
    cy.get("span.p-tag-value").contains("Pending").should("exist");
  });

  it("Testing the acceptance of the form", () => {
    cy.visit("/manage-forms");
    cy.get('div#mat-tab-label-0-1').click();
    cy.get("button#Pavel_Smith").contains("Accept").should("exist");
    cy.get("button#Pavel_Smith").contains("Accept").click();
    cy.wait(1000);
    cy.visit("/my-forms");
    cy.get('div#mat-tab-label-0-1').click();
    cy.get("p-panel").contains(volunteerForms.firstname + ' ' + volunteerForms.lastname).should("exist").and("be.visible");
    cy.get('span.p-tag-value').contains('Accepted').should('exist');
  });

  it("Testing the volunteer list", () => {
    cy.visit("/volunteer-list");
    cy.wait(500);
    cy.get("div.p-panel-header").contains(volunteerForms.firstname + ' ' +volunteerForms.lastname).should('exist');
  });

  it("Testing the quit feature", () => {
    cy.visit("/my-forms");
    cy.wait(1000);
    cy.get('div#mat-tab-label-0-1').click();
    cy.wait(1000);
    cy.get("p-tag#quit").click();
    cy.wait(1500);
    cy.get('p-panel').should('not.exist');
  });

  it("Testing the quitters feature", () => {
    cy.visit("/volunteer-list");
    cy.wait(500);
    cy.get('div#mat-tab-label-0-1').click();
    cy.wait(500);
    cy.get("button#Pavel_Smith").should("exist");
    cy.get("button#Pavel_Smith").click();
    cy.wait(1500);
    cy.get("button#Pavel_Smith").should("not.exist");
  })

  it("Testing the rejection of the form", () => {
    cy.fillVolunteerForm();
    cy.wait(500);
    cy.visit('/manage-forms');
    cy.wait(1000);
    cy.get('div#mat-tab-label-0-1').click();
    cy.get("button#Pavel_Smith").contains("Reject").should("exist");
    cy.get("button#Pavel_Smith").contains("Reject").click();
    cy.wait(1000);
    cy.visit("/my-forms");
    cy.get('div#mat-tab-label-0-1').click();
    cy.wait(500);
    cy.get("p-panel").contains(volunteerForms.firstname + ' ' + volunteerForms.lastname).should("exist").and("be.visible");
    cy.get('span.p-tag-value').contains('Rejected').should('exist');
  });

  it("Testing deleting a form", () => {
    cy.visit('/my-forms')
    cy.wait(1000);
    cy.get('div#mat-tab-label-0-1').click();
    cy.get("button#clear").should("exist");
    cy.get("button#clear").click();
    cy.wait(500);
    cy.get('p-panel').should('not.exist');
  });

  after("Logout", () => {
    cy.logout();
  });


});
