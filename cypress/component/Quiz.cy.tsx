import { mount } from 'cypress/react'
import Quiz from '../../client/src/components/Quiz';
import React from 'react';

describe('Quiz', () => {

  beforeEach(() => {
    mount(<Quiz />);
  });


  it('starts the quiz', () => {
    cy.contains("Start Quiz").click();
    cy.get(".card").should("exist");
  })
})