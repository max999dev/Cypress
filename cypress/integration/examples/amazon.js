describe('Amazon Tests', function(){
    it('Verify Title of the landing Page',function(){
        cy.visit('https://www.ebay.com');
       cy.title().should('eq','Electronics, Cars, Fashion, Collectibles & More | eBay')
    })
})