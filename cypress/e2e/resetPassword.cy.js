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

  it('Reset Password', () => {
    cy.visit('http://localhost:3012/#/dashboard')
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get(
      '[style="border: 2px solid yellow; margin: 2px; border-radius: 3px; width: 20%; height: 6vh;"] > a',
    ).click({ force: true })
    cy.get('#email').type('bahwebdev12@gmail.com')
    cy.get('#forgetpassword').click()
  })
})
