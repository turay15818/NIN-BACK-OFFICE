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

    it('Update users process', () =>{
        // eslint-disable-next-line no-undef
       cy.visit('http://localhost:3012/#/dashboard')
        // eslint-disable-next-line no-undef
        cy.get(':nth-child(2) > .nav-link').click({force: true})
        // eslint-disable-next-line no-undef
        cy.get('.row > :nth-child(1) > a').click( {force: true})
         // eslint-disable-next-line no-undef
         cy.get(':nth-child(3) > .form-control').type('2023-03-10 14:41:43',{force: true})
       // eslint-disable-next-line no-undef
       cy.get(':nth-child(5) > .form-control').type('2023-03-20 11:51:33',{force: true})
        // eslint-disable-next-line no-undef
        cy.get('#login').click({force: true})
   })
})

