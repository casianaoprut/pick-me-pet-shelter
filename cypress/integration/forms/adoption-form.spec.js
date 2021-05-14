describe("adoption-form testing",() => {

  const authUser = require("../../fixtures/auth-user.json");
  const {email, password} = authUser;
  const pet = require("../../fixtures/pet.json");
  const adoptionForm = require("../../fixtures/adoptionForm.json")

  before("go to adoption-form", () => {
    localStorage.setItem("selectedPet", JSON.stringify(pet));
    cy.visit("/forms/adoption");
    cy.wait(1500);
  });

  it("Testing the auth guard", () => {
    cy.url().should("contain", "/auth?returnUrl=%2Fforms%2Fadoption");
    cy.get('p-messages').should('be.visible');
    cy.get('input[name = email]').clear().type(email);
    cy.get('p-password[name = password]').clear().type(password);
    cy.get('input[name = email]').click();
    cy.get('button[label = Login]').click();
    cy.wait(700);
    cy.url().should("contain", "/forms/adoption");
  });

  it("Testing it\'s the right form" , () => {
    cy.get("img").eq(2).invoke("attr", "src").should("equal", pet.photoURL);
  });

  it("Testing the submission of the form", () => {
    cy.fillAdoptionForm();
    cy.url().should("contain", "/list/my-forms");
    cy.wait(1500);
    cy.get("p-panel").contains(pet.name).should("exist").and("be.visible");
    cy.get("span.p-tag-value").contains("Pending").should("exist");
  });

  it("Testing the acceptance of the form", () => {
    cy.visit("/forms/manage-forms");
    cy.wait(1000);
    cy.get("p-button[id = Test1_Test]").contains("Accept").should("exist");
    cy.get("p-button[id = Test1_Test]").contains("Accept").click();
    cy.wait(700);
    cy.visit("/list/my-forms");
    cy.wait(1000);
    cy.get("p-panel").contains(pet.name).should("exist").and("be.visible");
    cy.get('span.p-tag-value').contains('Accepted').should('exist');
  });

  it("Testing the adoption list", () => {
    cy.visit("/list/adoptions");
    cy.wait(500);
    cy.get("div.p-card-title").contains(adoptionForm.firstname + ' ' + adoptionForm.lastname);
  });

  it("Testing deleting a form", () => {
    cy.visit('/list/my-forms')
    cy.wait(2000);
    cy.get("button[id = clear]").should("exist");
    cy.get("button[id = clear]").click();
    cy.wait(1000);
    cy.get('p-panel').should('not.exist');
    cy.wait(1000);
  });

  it('Testing the rejection of the form', () => {
    localStorage.setItem("selectedPet", JSON.stringify(pet));
    cy.visit("/forms/adoption");
    cy.wait(1500);
    cy.fillAdoptionForm();
    cy.wait(1000);
    cy.visit('/forms/manage-forms');
    cy.get('p-button[id = Test1_Test]').contains('Reject').should('exist');
    cy.get('p-button[id = Test1_Test]').contains('Reject').click();
    cy.wait(1000);
    cy.visit('/list/my-forms');
    cy.wait(500);
    cy.get('p-panel').contains(pet.name).should('exist').and('be.visible');
    cy.get('span.p-tag-value').contains('Rejected').should('exist');
    cy.get("button[id = clear]").click();
    cy.wait(500);
  });

  after('logout', () => {
    cy.logout();
  })


});
