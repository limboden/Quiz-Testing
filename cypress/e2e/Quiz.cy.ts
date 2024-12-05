describe('Quiz site', () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should start the quiz after clicking start quiz", () => {
    cy.wait(20000)
    cy.get('.btn-primary').should("exist").click();
    cy.get('.btn-primary').contains("Start Quiz").should("not.exist");
  });

  it("should not make another question appear after the 10th question", () => {
    cy.get('.btn-primary').contains("Start Quiz").click();
    for (let i = 0; i < 10; i++) {
      cy.get('.btn-primary').contains("1").click();
    }
    cy.get('h2').contains("Quiz Completed").should("exist");
    cy.get('.btn-primary').contains("1").should("not.exist");
  });
})