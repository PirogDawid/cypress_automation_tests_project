class Search {

    searchField(){
        return cy.get('[id="search-field-top-bar"]')
    }
    searchButton(){
        return cy.get('[id="search-top-bar-submit"]')
    }
}

export default Search