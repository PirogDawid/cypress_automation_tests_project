import Page from "../../support/MainPageObjectModel.cy"
const t1 = performance.now();
const PageLoadTime = ((t1) / 1000);
const page =new Page

describe("Main Page",  function () {

    it("Elements Exist",  function () {
        
        cy.openMainPage();
        expect(PageLoadTime).to.be.lessThan(2) // Page load time
        // Check status code 
        cy.request({
            url: 'https://skleptest.pl',
            followRedirect: false,
          }).then(resp => {
            expect(resp.status).to.eq(200) 
        })
        // Check if elements exists 
        page.mainMenu().should("be.visible").and("exist")                       
        page.topBar().should("be.visible").and("exist")
        page.sliderBar().should("be.visible").and("exist")
        cy.get("#main-slider > div.owl-stage-outer > div > div.owl-item.active").should("exist").and("be.visible")
        cy.get('[class="content-area-1"]').should("be.visible").and("exist")
        cy.get('[class="content-area-2"]').should("be.visible").and("exist")
        cy.get('[class="content-area-3"]').should("be.visible").and("exist")
        cy.get('[class="content-area-4"]').should("be.visible").and("exist")
        cy.get('[class="content-area-5"]').should("be.visible").and("exist")
        cy.get('[id="colophon"]').should("be.visible").and("exist")
        cy.get('[id="tag_cloud-1"]').should("be.visible").and("exist")
        cy.get('[id="tyche_recent-3"]').should("be.visible").and("exist")
        cy.get('[id="text-2"]').should("be.visible").and("exist")
        cy.get('[id="email-subscribers-2"]').should("be.visible").and("exist")
        cy.get('#page > footer.site-copyright > div > div > div').should("be.visible").and("exist")
            
               
        
    })

})