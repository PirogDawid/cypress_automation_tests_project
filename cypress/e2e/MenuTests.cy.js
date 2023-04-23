
import Menu from "../support/MenuPageObjectModel.cy"
const t1 = performance.now();
const PageLoadTime = ((t1) / 1000);
const menu =new Menu

beforeEach(() => {
    cy.openMainPage();
  })

describe("Main Menu",  function () {

    it("Menu Shop",  function () {
              
            //Shop element in menu test
        menu.menuShop()
            .should('have.attr', 'itemtype', 'https://www.schema.org/SiteNavigationElement')
            .and('contain', 'Shop')
            .and('have.css', 'color',  'rgb(113, 113, 113)')
            //Shop title in menu tests
        cy.get('[title="Shop"]')
            .should('have.css', 'color',  'rgb(246, 98, 73)')
            .and('have.css', 'font-size', '15px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'line-height', '22.5px')
            .and('have.css', 'font-family', 'Karla, sans-serif')
       
            })
        it('Menu Most Wanted', function () {
                       
        expect(PageLoadTime).to.be.lessThan(2) // Page load time
            //Most wanted element in menu test
        menu.menuMostWanted()
            .should('have.attr', 'itemtype', 'https://www.schema.org/SiteNavigationElement')
            .and('contain', 'Most Wanted')
            .and('have.css', 'color',  'rgb(113, 113, 113)')
            //Most Wanted title in menu tests
            cy.get('[title="Most Wanted"]')
            .should('have.css', 'color',  'rgb(255, 255, 255)')
            .and('have.css', 'font-size', '15px')
            .and('have.css', 'font-weight', '700')
            .and('have.css', 'line-height', '22.5px')
            .and('have.css', 'font-family', 'Karla, sans-serif')
       
            })
        it("Menu Categories",  function () {
        
            expect(PageLoadTime).to.be.lessThan(2); // Page load time
                //Shop element in menu test
            menu.menuCategories()
                .should('have.attr', 'itemtype', 'https://www.schema.org/SiteNavigationElement')
                .and('contain', 'Categories')
                .and('have.css', 'color',  'rgb(113, 113, 113)')
                .find('li').find('a').should('have.length', 10)
                //Categories title in menu test
            cy.get('[title="Catergries"]')
                .should('have.css', 'color',  'rgb(246, 98, 73)')
                .and('have.attr', 'class', 'dropdown-toggle')
                .and('have.css', 'font-size', '15px')
                .and('have.css', 'font-weight', '700')
                .and('have.css', 'line-height', '22.5px')
                .and('have.css', 'font-family', 'Karla, sans-serif')
            })

        it('Menu AboutUs', function () {
                       
            expect(PageLoadTime).to.be.lessThan(2) // Page load time
                //About Us element in menu test
            menu.menuAboutUs()
                .should('have.attr', 'itemtype', 'https://www.schema.org/SiteNavigationElement')
                .and('contain', 'About Us')
                .and('have.css', 'color',  'rgb(113, 113, 113)')
                //About us element in menu test
            cy.get('[title="About Us"]')
                .should('have.css', 'color',  'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '15px')
                .and('have.css', 'font-weight', '700')
                .and('have.css', 'line-height', '22.5px')
                .and('have.css', 'font-family', 'Karla, sans-serif')                        
            })
        
        it('Menu Contact', function () {
                       
            expect(PageLoadTime).to.be.lessThan(2) // Page load time
                //Contact element in menu test
            menu.menuContact()
                .should('have.attr', 'itemtype', 'https://www.schema.org/SiteNavigationElement')
                .and('contain', 'Contact')
                .and('have.css', 'color',  'rgb(113, 113, 113)')
                //Contact title in menu test
            cy.get('[title="Contact"]')
                .should('have.css', 'color',  'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '15px')
                .and('have.css', 'font-weight', '700')
                .and('have.css', 'line-height', '22.5px')
                .and('have.css', 'font-family', 'Karla, sans-serif')
            
            })
        it('Menu Blog', function () {
                       
            expect(PageLoadTime).to.be.lessThan(2) // Page load time
                //Blog element in menu test
            menu.menuBlog()
                .should('have.attr', 'itemtype', 'https://www.schema.org/SiteNavigationElement')
                .and('contain', 'Blog')
                .and('have.css', 'color',  'rgb(113, 113, 113)')
                //Blog title element in menu test
            cy.get('[title="Blog"]')
                .should('have.css', 'color',  'rgb(255, 255, 255)')
                .and('have.css', 'font-size', '15px')
                .and('have.css', 'font-weight', '700')
                .and('have.css', 'line-height', '22.5px')
                .and('have.css', 'font-family', 'Karla, sans-serif')
          
              
            })
        it("Loading page",  function () {
        
                expect(PageLoadTime).to.be.lessThan(2) // Page load time
                // Check status code 
                cy.request({
                    url: 'https://skleptest.pl',
                    followRedirect: false,
                  }).then(resp => {
                    expect(resp.status).to.eq(200) 
                })
        })
})
   
    







