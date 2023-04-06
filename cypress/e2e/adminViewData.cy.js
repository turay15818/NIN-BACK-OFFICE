/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('Admin Login', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('men270992@gmail.com')
    cy.get('#password').type('123456Ab@')
    cy.get('#login').click()
  })

  it('Login the current Admin', () => {
    cy.visit('http://localhost:3012/#/dashboard')
    cy.get(':nth-child(2) > .nav-link').click()
    // cy.get('.current').click()
    // cy.get('.current').click()
    // cy.get(':nth-child(3) > :nth-child(9) > .btn > #editUsers').click()
    cy.get(':nth-child(4) > :nth-child(9) > .btn > #editUsers').click()
    // cy.get(':nth-child(3) > :nth-child(9) > .btn')
  })
})
