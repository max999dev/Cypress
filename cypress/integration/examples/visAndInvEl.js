describe('Dropdown test automation',function(){
    it('Dropdown test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        //static dropdown
        //cy.get('select').select('option2').should('have.value','option2')
    
        //dynamic dropdown
        cy.get('#autocomplete').type('ind')
        cy.get('.ui-menu-item div').find('.product').each(($el,index,$list) => {
    
    
            if($el.text()=== "India"){
                $el.click()
            }
        })
    })
    })
    