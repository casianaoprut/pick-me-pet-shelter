const authUser = require('../../fixtures/auth-user.json')
const {email, password} = authUser;
const name = 'Petre' + new Date().getTime();

describe('Pet-list tests', () =>{
  beforeEach('Go to home-page', () => {
    cy.visit('/pets');
    cy.wait(3000);
  });

  it('Testing details box', () => {
    cy.get('img').eq(2).invoke('attr', 'src').then(src => {
      cy.get("button[label = Details]").eq(1).click();
      cy
        .get("div.details-box")
        .get('img.img-rounded')
        .invoke('attr', 'src')
        .should('equal', src);
      });
  });

  it('Testing "Adopt Me" button when login', () => {
    cy.login(email,password).then(cy.reload);
    cy.wait(1500);
    cy.get('button').contains('Adopt Me!').eq(0).click();
    cy.url().should('contain', '/forms/adoption');
  })

  it('Testing adoption form redirection', () => {
    cy.clearLocalStorage();
    cy.visit('/forms/adoption');
    cy.wait(1000);
    cy.url().should('contain', '/pets');
  })

  it('Testing edit mode', () => {
    cy.get('button').contains('Adopt Me!').should('exist');
    cy.get('button').contains('Edit Mode').eq(0).click();
    cy.get('button').contains('Delete').should('exist');
    cy.get('button').contains('Edit').should('exist')
  });

  it('Testing adding a new animal', () => {
    cy.get('button').contains('Edit Mode').eq(0).click();
    cy.get('button').contains('New Pet').eq(0).click();
    cy.get('input#name').type(name);
    cy.get('input#breed').type('dog');
    cy.get('p-dropdown').click().type('m{enter}');
    cy.get('p-calendar').click().type('11.11.2011{enter}');
    cy.get('textarea#description').click().type('Test');
    cy.get("button[label = Save]").click();
    cy.wait(2500);
    cy.get('div.p-card-title').contains(name);
  });

  it('Testing update pet',() => {
    cy.findPet(name);
    cy.get('button').contains('Edit Mode').eq(0).click();
    cy.get('button').contains('Edit').eq(0).click();
    cy.get('textarea#description').click().type('2');
    cy.get("button[label = Save]").click();
    cy.wait(1500);
    cy.findPet(name);
    cy.get('h5.ng-star-inserted').contains('Test2').should("exist");
  });

  it('Testing deleting a new animal', () => {
    cy.findPet(name);
    cy.get('button').contains('Edit Mode').eq(0).click();
    cy.get('button').contains('Delete').click();
    cy.get('div.p-card-title').contains(name).should('not.exist');
  })

  after('Logout', () => {
    cy.logout();
  });
})
