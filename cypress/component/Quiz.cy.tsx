import { mount } from 'cypress/react'
import Quiz from '../../client/src/components/Quiz'

describe('Quiz.cy.tsx', () => {
  it('playground', () => {
    /// cy.mount()
  })
  it("starts the quiz", () => {
    cy.contains("Start Quiz").click();
    cy.get(".card").should("exist");
  });
})