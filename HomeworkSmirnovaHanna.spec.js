/// <reference types="cypress" />

describe('', () => {
  before('', () => {
  cy.visit ('https://the-internet.herokuapp.com/login');
  });

it('Login with valid creds', ()=> {
  cy.get('#username').type('tomsmith');
  cy.get('#password').type('SuperSecretPassword!');
  cy.get('.fa').click();
  cy.get('.subheader').should('have.text', 'Welcome to the Secure Area. When you are done click logout below.');
  });
  
  it('Login with valid creds and logout', ()=> {
    cy.get('.icon-2x').click();
    cy.get('#username').type('tomsmith');
    cy.get('#password').type('SuperSecretPassword!');
    cy.get('.fa').click();
    cy.get('.icon-2x').click();
    cy.get('#flash').should('have.text', '\n            You logged out of the secure area!\n            ×\n          ');
  });
  
  it('Login with invalid creds', () => {
  cy.get('#username').type('annabanana');
    cy.get('#password').type('Qwerty123');
    cy.get('.fa').click();
    cy.get('#flash').should('have.text', '\n            Your username is invalid!\n            ×\n          ');
  });
});


