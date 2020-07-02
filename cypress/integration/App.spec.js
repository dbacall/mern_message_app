describe('App feature tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the Add Post page when click add post button', () => {
    cy.get('.add-post-btn').click();
    cy.get('#title').contains('Add Post');
  });

  it('renders the Home page when click home button', () => {
    cy.get('.home-btn').click();
    cy.get('#title').contains('Home Feed');
  });
});
