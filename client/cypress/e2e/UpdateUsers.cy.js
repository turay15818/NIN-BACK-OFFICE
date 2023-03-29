/* eslint-disable prettier/prettier */
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(1500)

describe('Login to add users', () =>{
    beforeEach('Login Path', () =>{
         // eslint-disable-next-line no-undef
        cy.visit('/')
        // eslint-disable-next-line no-undef
        cy.get('#email').type('men270992@gmail.com')
        // eslint-disable-next-line no-undef
        cy.get('#password').type('123456Ab@')
        // eslint-disable-next-line no-undef
        cy.get('#login').click()
    })

    it('Update users process', () =>{
         // eslint-disable-next-line no-undef
        cy.visit('http://localhost:3012/#/dashboard')
         // eslint-disable-next-line no-undef
         cy.get(':nth-child(2) > .nav-link').click('')
         // eslint-disable-next-line no-undef
         cy.get(':nth-child(3) > :nth-child(7) > .btn').click('')
          // eslint-disable-next-line no-undef
        cy.get('#idd').type('OSL111222')
        // eslint-disable-next-line no-undef
        cy.get('#name').type('Fatima Koroma')
        // eslint-disable-next-line no-undef
        cy.get('#Phone').type('23278222333')
        // eslint-disable-next-line no-undef
        cy.get('#email').type('fatima97@gmail.com')
        // eslint-disable-next-line no-undef
        cy.get('#password').type('Abc@111111')
        // eslint-disable-next-line no-undef
        cy.get('#confPassword').type('Abc@111111')
        // eslint-disable-next-line no-undef
        cy.get('#').type('')
         // eslint-disable-next-line no-undef
        cy.get('#updateusers').click('')
    })
})
