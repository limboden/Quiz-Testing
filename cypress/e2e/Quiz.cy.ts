describe('Quiz site', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  beforeEach(() => {
    cy.visit("http://localhost:3002/");
  });


})