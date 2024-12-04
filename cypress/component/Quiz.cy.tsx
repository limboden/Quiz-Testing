import { mount } from 'cypress/react'
import Quiz from '../../client/src/components/Quiz';
import React from 'react';

describe('Quiz', () => {
  const waitTime = 2000

  beforeEach(() => {
    mount(<Quiz />);
  });

  // it('starts the quiz', () => {
  //   cy.contains("Start Quiz").click();
  //   cy.wait(waitTime)
  //   cy.get(".card").should("exist");
  // })

  // it("shows the next question after answering", () => {
  //   cy.contains("Start Quiz").click();
  //   cy.wait(waitTime)
  //   cy.get(".btn-primary").first().click();
  //   cy.wait(waitTime)
  //   cy.get(".card h2").should("exist");
  // });

  // it("ends the quiz after all questions are answered", () => {
  //   cy.contains("Start Quiz").click();
  //   cy.wait(waitTime)
  //   for (let i = 0; i < 10; i++) {
  //     cy.get(".btn-primary").contains("1").click();
  //     cy.wait(waitTime)
  //   }
  //   cy.contains("Quiz Completed").should("be.visible");
  // });

  // it("displays the score after completion", () => {
  //   cy.contains("Start Quiz").click();
  //   cy.wait(waitTime)
  //   for (let i = 0; i < 10; i++) {
  //     cy.get(".btn-primary").contains("1").click();
  //     cy.wait(waitTime)
  //   }
  //   cy.contains("Quiz Completed").should("be.visible");
  //   cy.get(".alert.alert-success").should("contain", "Your score:");
  // });


  it("allows starting a new quiz", () => {
    cy.contains("Start Quiz").click();
    cy.wait(30000)
    for (let i = 0; i < 10; i++) {
      cy.get(".btn-primary").contains("1").click();
      cy.wait(waitTime)
    }
    cy.contains("Quiz Completed").should("be.visible");
    cy.contains("Take New Quiz").click();
    cy.wait(30000)
    cy.get(".btn-primary").contains("1").should("be.visible");
  });
})