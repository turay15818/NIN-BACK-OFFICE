/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown()

describe('Rejected Data', () => {
  beforeEach(() => {
    cy.visit('/')
    cy.get('#email').type('werdev12@gmail.com')
    cy.get('#password').type('12345Abc@')
    cy.get('#login').click()
  })

  it('View NIN Rejected Data', () => {
    cy.visit('http://localhost:3012/#/')
  })
})
