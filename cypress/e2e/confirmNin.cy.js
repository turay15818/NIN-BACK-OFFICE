/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('View Data', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('werdev12@gmail.com')
    cy.get('#password').type('12345Abc@')
    cy.get('#login').click()
  })

  it('Edit NIN DATA', () => {
    cy.visit('http://localhost:3012/#/dashboard')
    cy.get(':nth-child(2) > .nav-link').click({ force: true })
    cy.get('.even > :nth-child(9) > .btn').click({ force: true })
    cy.get('.even > :nth-child(9) > .btn > #editUsers').click()
    cy.get('[value=""]').type('webdev12')
    cy.get('.form-select').select('Rejected')
    cy.get('#login').click()
  })
})
