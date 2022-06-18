///  <reference types='Cypress'/>

describe('My first test suite', function(){
      it('My first test case',function(){
      cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
      cy.get('.search-keyword').type('ca')
      cy.wait(2000)
      cy.get('products').as('productLocator') // alias 

      cy.get('.product:visible').should('have.length',4)
      cy.get('@productLocator').find('.product').should('have.length',4)
      cy.get('@productLocator').find('.product').eq(2).contains('ADD TO CART').click()
      cy.get('@productLocator').find('.product').each(($el,index,$list) =>{

        const textVeg = $el.find('h4.product-name').text()
if(textVeg.includes('Cashews')){
  cy.wrap($el).find('button').click() 
}
      })
      //Assert Logo text
    cy.get('.brand').should('have.text','GREENKART')
    cy.get('.brand').then(function(logoelement){
    cy.log(logoelement.text())
    })

    })
})





/* Locators EX:

ID - cy.get('#idName')
ClassName - cy.get('.className')
            cy.get('tagName.className')
            cy.get('tagName[attribute=value]')

         Ex:cy.get('input[type=search]')

Parent to Child : cy.get('form')

*/
