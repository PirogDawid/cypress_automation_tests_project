class Page {

mainMenu(){
    return cy.get('[id="desktop-menu"]');
}
topBar(){
    return cy.get('[class="top-header-bar-container"]');
}
sliderBar(){
    return cy.get('[class="main-slider-bar hidden-xs"]')
}
cartBar(){
    return cy.get('[href="https://skleptest.pl/cart/"]')
}

   
   
}
    
    export default Page