const authUser = require('../../fixtures/auth-user.json')
const {email, password} = authUser;

describe('Testing the header', () => {
  before('Go to home-page',() => {
    cy.visit('/home-page');
  });

  it('Testing logout reflection in header', () => {
    cy.contains('Login').should('exist');
  })

  it('Testing login reflection in header',() => {
    cy.login(email,password).then(cy.reload);
    cy.get('a.dropdown-toggle').should("exist");
  });

  after('Logout', () => {
    cy.logout();
  })
})
