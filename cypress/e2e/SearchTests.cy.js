import Search from "../support/SearchPageObjectModel.cy";
const search = new Search

beforeEach(() => {
    cy.openMainPage();
  })

describe("Main Page",  function () {

    it("Search field styles tests",  function () {
   
        search.searchField()
            .should('be.visible').and('exist')
            .should('have.attr', 'class', 'search-field-top-bar')
            .and('have.attr', 'type', 'search')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'font-size', '15px')
            .and('have.css', 'font-weight', '400')
            .and('have.css', 'line-height', '22.5px')           
       })
    it("Search button styles tests", function () {
        
        search.searchButton()
            .should('be.visible').and('exist')
            .should('have.attr', 'class', 'search-top-bar-submit')
            .and('have.attr', 'type', 'submit')
            .and('have.css', 'cursor', 'pointer')
            .and('have.css', 'color', 'rgb(255, 255, 255)')
            .and('have.css', 'line-height', '22.5px') 
    })     
    it("Click on search button", function () {
        
            search.searchButton().click();
            cy.url().should('include', '/?s=')
    })
    it("Typing invalid text in a search field", function () {

            search.searchField()
            
    })   
})