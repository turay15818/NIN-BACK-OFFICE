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

  it('View Confirmed Data', () => {
    cy.visit('http://localhost:3012/#/dashboard')
    cy.get(':nth-child(3) > .nav-link').click()
  })
})
