class HomePage {

getEditBox(){
    return cy.get('input[name="name"]:nth-child(2)')
}
getTwoDataBindings(){
   return cy.get('nth-child(4) > .ng-untouched')
}
getGender(){
    cy.get('select')
}
}
export default HomePage;