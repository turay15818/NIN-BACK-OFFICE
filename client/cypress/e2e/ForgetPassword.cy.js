/* eslint-disable prettier/prettier */
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(2500)

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

    it('forgetpassword', () =>{
        // eslint-disable-next-line no-undef
       cy.visit('http://localhost:3012/#/dashboard')
        // eslint-disable-next-line no-undef
        cy.get(':nth-child(2) > .nav-link').click()
        // eslint-disable-next-line no-undef
        cy.get('[style="border: 2px solid yellow; margin: 2px; border-radius: 3px; width: 20%; height: 6vh;"]').click('')
         // eslint-disable-next-line no-undef
         cy.get('#email').type('men270992@gmail.com')
        // eslint-disable-next-line no-undef
        cy.get('#forgetpassword').click('')
   })
})
