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
    cy.get(':nth-child(1) > :nth-child(8) > #myButton > #editUsers').click()
    cy.get('.form-select').select('RejectedBy')
    cy.get('#login').click()
  })
})
