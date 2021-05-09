const email = 'test' + new Date().getTime()+'@test.com';
const password = 'test12';

describe('Auth test', () => {

  before('Go to login', () => {
    cy.visit('/auth');
  })

  it('Testing login error message', () => {

    cy.get('input[name = email]').clear().type('email@fake.com');
    cy.get('p-password[name = password]').clear().type('invalid');
    cy.get('input[name = email]').click();
    cy.get('button[label = Login]').click();
    cy.get('p-messages').should('be.visible');
  });

  it('Testing sign up error message', () => {
    cy.get('button').eq(4).click();
    cy.get('input[name = displayName]').type('Casiana Oprut');
    cy.get('input[name = email]').type('oprutnicoletacasiana@gmail.com');
    cy.get('p-password[name = password]').type('test12');
    cy.get('input[name = email]').click();
    cy.get('button[label = SignUp]').click();
    cy.get('p-messages').should('be.visible');
  });

  it('Testing sign up', () => {
    cy.get('input[name = displayName]').clear().type('Test Testulescu');
    cy.get('input[name = email]').clear().type(email);
    cy.get('p-password[name = password]').clear().type(password);
    cy.get('button[label = SignUp]').click();
    cy.url().should('contain', '/home-page');
  });

  it('Testing logout',() => {
    cy.get('a.dropdown-toggle').click();
    cy.get('ul').find('>li').eq(5).click();
  });

  it('Testing login',() => {
    cy.contains('Login').click();
    cy.get('input[name = email]').clear().type(email);
    cy.get('p-password[name = password]').clear().type(password);
    cy.get('input[name = email]').click();
    cy.get('button[label = Login]').click();
    cy.url().should('contain', '/home-page');
  });

  after('Logout', () => {
    cy.logout().then(cy.reload);
  })

})
