describe('My third test suite', function(){
    it('my third test case',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        // check box validation
        cy.get('#checkBoxOption1').check().should('be.checked').and('have.value','option1')
        // uncheck box and validate the response
        cy.get('#checkBoxOption1').uncheck().should('not.be.checked')
        cy.get('input[type="checkbox"]').check(['option2','option3'])
    })
})