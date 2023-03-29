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

    it('Add users process', () =>{
        // eslint-disable-next-line no-undef
       cy.visit('http://localhost:3012/#/dashboard')
        // eslint-disable-next-line no-undef
        cy.get(':nth-child(2) > .nav-link').click()
       // eslint-disable-next-line no-undef
       cy.get('[style="font-weight: 700; width: 20%; margin-bottom: 10px; margin-left: 10px; border: 2px solid yellow; color: yellow; height: 10%;"]').click()
          // eslint-disable-next-line no-undef
        cy.get('#idd').type('OSSL740123')
        // eslint-disable-next-line no-undef
       cy.get('#name').type('Taylor Kamara')
        // eslint-disable-next-line no-undef
        cy.get('#phoneNumber').type('23276555444')
       // eslint-disable-next-line no-undef
       cy.get('#email').type('taylor@gmail.com')
       // eslint-disable-next-line no-undef
       cy.get('#password').type('Abc@12345')
       // eslint-disable-next-line no-undef
       cy.get('#confPassword').type('Abc@12345')
       // eslint-disable-next-line no-undef
       cy.get('.form-select').select('user')
       // eslint-disable-next-line no-undef
       cy.get('#addusers').click()
   })
})
