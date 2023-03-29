/* eslint-disable prettier/prettier */
import { slowCypressDown } from 'cypress-slow-down'
slowCypressDown(2500)

describe('Nin Process', () =>{
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

    it('Nin Search process', () =>{
        // eslint-disable-next-line no-undef
       cy.visit('http://localhost:3012/#/dashboard')
        // eslint-disable-next-line no-undef
        cy.get(':nth-child(2) > .nav-link').click({force: true})
        // eslint-disable-next-line no-undef
        cy.get('.row > :nth-child(2) > a').click({force: true})
         // eslint-disable-next-line no-undef
         cy.get('#startdate').type('e1234e7880',{force: true})
        // eslint-disable-next-line no-undef
        cy.get('#login').click('')
   })
})

