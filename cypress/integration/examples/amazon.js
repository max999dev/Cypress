describe('Amazon Tests', function(){
    it('Verify Title of the landing Page',function(){
        cy.visit('https://www.ebay.com');
       cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay')
    })


    //Test line is the test line
})

/*
Locators

.class
#id
[attribute=value]
.class[attribute=value]
*/


