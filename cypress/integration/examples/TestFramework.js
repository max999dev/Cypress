/// <reference types="Cypress" />
 import HomePage from '../pageObject/HomePage'
describe('Hooks Concepts', function() 
{

before(function(){
    //runs before every each block
cy.fixture('example').then(function(data){
    this.data = data  // creates a new variable that will be available in the whole class makes in global
})
})



it('Test',function(){
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
    cy.get('input[name="name"]:nth-child(2)').type("Bob") // classy way to send keys 
    // cy.get('input[name="name"]:nth-child(2)').type(this.data.name) sending key by retrieving the info from fixture file
    
    cy.get('select').select('Female');
    // cy.get('select').select(this.data.gender); // similar here
    cy.get(':nth-child(4) > .ng-untouched').should('have.value',this.data.name) // assertion for the name
    cy.get('input[name="name"]:nth-child(2)').should('have.attr','minlength','2')
    cy.get('h4.card-title').each(($el,index,$list) => {
    if($el.text().includes('Blackberry')){
        cy.get('button.btn.btn-info').eq(index).click()
    }

    })
    this.data.productName
    this.data.productName.forEach(function(element){
        cy.selectProduct(element)





})

    const homePage = new HomePage() // this way the object is created from a class
    homePage.getEditBox().type(this.data.name) 
})


it('Explicit wait for a given test case',function(){
    Cypress.config('defaultCommandTimeout',8000) //  gogle - cypress configuration 
})

})

// nth-child(4) will select fourth element in a child element if you have li it will select fourth li 
cy.get('tr td:nth-child(4) strong').each(($el,index,$list) =>{
    const amount = $el.text()
    const res = amount.split(' ')
    res = res[1].trim()
    sum = sum + Number(res)
})