describe('Dropdown test automation',function(){
    it('Dropdown test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get('#opentab').invoke('remoteAttr','target').click() // invoke function helps to manipulate the dom and to remove target attribute form the Element tag
   cy.url().should('include','qaclickacademy')
   cy.go('back')
    })
    })
    