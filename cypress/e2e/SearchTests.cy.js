import Search from "../support/SearchPageObjectModel.cy";
const search = new Search
import { faker } from '@faker-js/faker';
const randomWord = faker.word.adverb({ length: { min: 5, max: 30 }, strategy: "fail" })

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
    it("Search not exist item", function () {

            search.searchField()
                .type(randomWord).type('{enter}')
            cy.get('#main > section').should('be.visible') //Header not found should be visible           
    })
    it("Search exist item shirt", function () {

            search.searchField()
                .type('shirt').type('{enter}')
            cy.get('#main > header').should('be.visible') //Header SEARCH RESULTS FOR: SHIRT should be visible
            cy.url().should('include', 'https://skleptest.pl/?s=shirt')
    })
       
})