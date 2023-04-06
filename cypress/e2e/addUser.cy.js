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

  it('Add users', () => {
    cy.visit('http://localhost:3012/#/dashboard')
    cy.get(':nth-child(5) > .nav-link').click()
    cy.get(
      '[style="font-weight: 700; width: 20%; margin-bottom: 10px; margin-left: 10px; border: 2px solid yellow; color: yellow; height: 10%;"]',
    ).click({ force: true })
    cy.get('#idd').type('SL3458')
    cy.get('#name').type('Bakarr Adonis Bah')
    cy.get('#phoneNumber').type(+23279163216)
    cy.get('#email').type('bahwebdev12@gmail.com')
    cy.get('#password').type('Testing321@')
    cy.get('#confPassword').type('Testing321@')
    cy.get('.form-select').select('User')
    cy.get('#addusers').click()
  })
})
