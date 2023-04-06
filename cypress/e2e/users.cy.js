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

  it('View users', () => {
    cy.visit('http://localhost:3012/#/dashboard')
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get(':nth-child(1) > :nth-child(7) > .btn > #editUsers').click()
    cy.get('#Password').type('Testing321')
    cy.get('#confPassword').type('Testing321')
    cy.get('#updateusers').click()
  })
})
