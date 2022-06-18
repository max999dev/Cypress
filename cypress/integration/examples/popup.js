describe('Dropdown test automation',function(){
    it('Dropdown test',function(){
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
       cy.get('#alertbtn').click()
       cy.get('[value="Confirm"]').click()
       // window:alert
       cy.on('window:alert',(str) =>{
           expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
       })
       cy.on('window:confirm',(str) =>{
        expect(str).to.be.equal('Hello , share this practice page and share your knowledge')
    })
    })
    })
    