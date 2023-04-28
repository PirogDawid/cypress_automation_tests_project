import Page from "../support/MainPageObjectModel.cy"
const page = new Page


describe('Add items to cart', function() {
        
    it('Add single item to my cart', function() {
        
        cy.visit('https://skleptest.pl/product-category/shirts/')
        //Click on add to cart button
        cy.get('.post-56 > .button').click()
        cy.wait(1000) 
        //Get my cart page
        cy.get('#page > header.top-header-bar-container > div > div > div > ul > li.top-cart').click()
        //Checking if the item was added correctly
        cy.get('#post-6 > div.woocommerce > form > table > tbody > tr.woocommerce-cart-form__cart-item.cart_item')
          .should('be.visible').and('exist')
        cy.get('[href="https://skleptest.pl/product/manago-shirt/"]').should('exist').and('be.visible')
        
        

        })  
})