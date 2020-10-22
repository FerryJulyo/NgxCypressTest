/// <reference types="cypress" />

describe('First Test', () => {
    it('check visit', () => {
        cy.visit('/');
        cy.contains('Forms').click();
        cy.contains('Form Layouts').click();
    })

    it('Test Inline Form',()=>{
        cy.get('.form-inline').within(()=>{
            cy.get('input[placeholder = "Jane Doe"]')
                .type('Mohammad Ferry Julyo')
                .should('have.value','Mohammad Ferry Julyo')
            cy.get('input[placeholder = "Email"]')
                .type('ferryjulyo86@gmail.com')
                .should('have.value','ferryjulyo86@gmail.com')
            cy.get('.custom-checkbox').click()
        })
    })

    it('Test Using The Grid',  () => {
        cy.get('#inputEmail1')
            .type('ferryjulyo86@gmail.com')
            .should('have.value', 'ferryjulyo86@gmail.com');
        cy.get('#inputPassword2')
            .type('urbancologne123')
            .should('have.value', 'urbancologne123');
    })

    it('Test Basic Form', () => {
        cy.get('#exampleInputEmail1')
            .type('ferryjulyo86@gmail.com')
            .should('have.value', 'ferryjulyo86@gmail.com');
        cy.get('#exampleInputPassword1')
            .type('urbancologne123')
            .should('have.value', 'urbancologne123');
    })

    it('Test Horizontal Form', () =>{
        cy.get('#inputEmail3')
            .type('ferryjulyo86@gmail.com')
            .should('have.value', 'ferryjulyo86@gmail.com');
        cy.get('#inputPassword3')
            .type('urbancologne123')
            .should('have.value', 'urbancologne123');
    })

    it('Test Form With Labels', () => {
        cy.get('[placeholder="Recipients"]')
            .type('Mohammad Ferry Julyo')
            .should('have.value', 'Mohammad Ferry Julyo');
        cy.get('[placeholder="Subject"]')
            .type('Cypress Test')
            .should('have.value', 'Cypress Test');
        cy.get('[placeholder="Message"]')
            .type('Cypress file testing')
            .should('have.value', 'Cypress file testing');
    })

    it('Test Block Form', () => {
        cy.get('#inputFirstName')
            .type('Ferry')
            .should('have.value', 'Ferry');
        cy.get('#inputLastName')
            .type('Julyo')
            .should('have.value', 'Julyo');
        cy.get('#inputEmail')
            .type('ferryjulyo86@gmail.com')
            .should('have.value', 'ferryjulyo86@gmail.com');
        cy.get('#inputWebsite')
            .type('https://github.com/FerryJulyo')
            .should('have.value', 'https://github.com/FerryJulyo');  
    })
    
    
})