/* eslint-disable prettier/prettier */
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(1500)

describe('Login to add users', () =>{
    beforeEach('Login Path', () =>{
         // eslint-disable-next-line no-undef
        cy.visit('/')
        // eslint-disable-next-line no-undef
        cy.get('#email').type('werdev12@gmail.com')
        // eslint-disable-next-line no-undef
        cy.get('#password').type('12345Abc@')
        // eslint-disable-next-line no-undef
        cy.get('#login').click()
    })

    it('Update users process', () =>{
        // eslint-disable-next-line no-undef
       cy.visit('http://localhost:3012/#/dashboard')
        // eslint-disable-next-line no-undef
        cy.get(':nth-child(3) > .nav-link').click('')
        // eslint-disable-next-line no-undef
        cy.get(':nth-child(3) > :nth-child(12) > .btn > #editUsers').click('')
         // eslint-disable-next-line no-undef
         cy.get('.form-select').select('confirmed')
       // eslint-disable-next-line no-undef
       cy.get('#login').click()
    })
})