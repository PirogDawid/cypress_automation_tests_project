import Page from "../support/MainPageObjectModel.cy"
const page = new Page
const t1 = performance.now();
const PageLoadTime = ((t1) / 1000);

beforeEach(() => {
    cy.openShirtPage();
  })

describe('Website shop tests ', function() {
        
    it('Add items to my cart tests', function() {
         
        cy.get('[href="/product-category/shirts/?add-to-cart=41"]')
          .should("be.visible")
          .click();
        page.cartBar().click();
             
        })
    it("Loading page",  function () {
            
        expect(PageLoadTime).to.be.lessThan(2) // Page load time
            // Check status code 
        cy.request({
            url: 'https://skleptest.pl/product-category/shirts/',
            followRedirect: false,
          }).then(resp => {
            expect(resp.status).to.eq(200) 
        })
    })
})