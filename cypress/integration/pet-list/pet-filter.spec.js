describe('Testing the pet filter', () => {
  before('Go to pet-list', () => {
    cy.visit('/pets');
    cy.wait(1000);
  })
  it('Testing filter by name', () => {
    cy.get('button').contains('Open Filters').click();
    cy.get('input').eq(0).clear().type('Cl');
    cy.get('button.p-sidebar-close').click();
    cy.get('div.p-card-title').eq(0).contains('Cl').should('exist');
    cy.get('button').contains('Open Filters').click();
    cy.get('input').eq(0).clear().type('Re');
    cy.get('button.p-sidebar-close').click();
    cy.get('div.p-card-title').eq(0).contains('Re').should('exist');
    cy.get('button').contains('Open Filters').click();
    cy.get('input').eq(0).clear();
    cy.get('button.p-sidebar-close').click();
  });

  it('Testing filter by age', () => {
    cy.get('button').contains('Open Filters').click();
    cy.get('input#age_0').click();
    cy.get('button.p-sidebar-close').click();
    cy.get('div.p-card-title').eq(0).contains('months').should('exist');
    cy.get('button').contains('Open Filters').click();
    cy.get('input#age_0').click();
    cy.get('input#age_1').click();
    cy.get('button.p-sidebar-close').click();
    cy.get('div.p-card-title').eq(0).contains('1 years').should('exist');
    cy.get('button').contains('Open Filters').click();
    cy.get('input#age_1').click();
    cy.get('input#age_2').click();
    cy.get('button.p-sidebar-close').click();
    cy.get('div.p-card-title').eq(0).contains('2 years').should('exist');
    cy.get('button').contains('Open Filters').click();
    cy.get('input#age_2').click();
    cy.get('button.p-sidebar-close').click();
  });

  it('Testing filter by breed', () => {
    cy.get('button').contains('Open Filters').click();
    cy.get('input#breed_0').click();
    cy.get('button.p-sidebar-close').click();
    cy.get('div.p-card-body').eq(0).contains('dog').should('exist');
    cy.get('button').contains('Open Filters').click();
    cy.get('input#breed_0').click();
    cy.get('input#breed_1').click();
    cy.get('button.p-sidebar-close').click();
    cy.get('div.p-card-body').eq(0).contains('cat').should('exist');
    cy.get('button').contains('Open Filters').click();
    cy.get('input#breed_1').click();
    cy.get('input#breed_2').click();
    cy.get('button.p-sidebar-close').click();
    cy.get('div.p-card-body').eq(0).contains('parrot').should('exist');
    cy.get('button').contains('Open Filters').click();
    cy.get('input#breed_2').click();
    cy.get('button.p-sidebar-close').click();
  });

  it('Testing filter by gender', () => {
    cy.get('button').contains('Open Filters').click();
    cy.get('input#female').click();
    cy.get('button.p-sidebar-close').click();
    cy.get("button[label = Details]").eq(0).click();
    cy.get('p.intro').contains('I am a girl').should('exist');
    cy.get('button.p-button-danger').click();
    cy.get('button').contains('Open Filters').click();
    cy.get('input#female').click();
    cy.get('input#male').click();
    cy.get('button.p-sidebar-close').click();
    cy.get("button[label = Details]").eq(0).click();
    cy.get('p.intro').contains('I am a boy').should('exist');
    cy.get('button.p-button-danger').click();
  })

});
