/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('werdev12@gmail.com')
    cy.get('#password').type('12345Abc@')
    cy.get('#login').click()
  })

  it('Login the current user', () => {
    cy.visit('http://localhost:3012/#/dashboard')
    cy.get(':nth-child(2) > .nav-link').click()
    cy.get(':nth-child(1) > :nth-child(8) > .btn').click()
    cy.get(':nth-child(1) > :nth-child(8) > .btn > #editUsers').click()
  })
})
