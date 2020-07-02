describe('App feature tests', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('renders the Add Post page when click add post button', () => {
    cy.get('.add-post-btn').click();
    cy.get('#title').contains('Add Post');
  });
});
