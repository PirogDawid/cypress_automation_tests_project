import Login from "../support/LoginPageObjectModel.cy";

const login = new Login

import { faker } from '@faker-js/faker';
const randomEmail = faker.internet.email(); //Generate random email
const randomPassword = faker.internet.password(); //Generate random password

beforeEach(() => {
     cy.openAccountPage();
   })

//Corect login details with username: skleptestarmy17 password :Test123456789!@

describe("Account Page",  function () {

    it("Login with correct login details",  function () {
               
       login.usernameField().type(`skleptestarmy17`)
            .should('have.value', 'skleptestarmy17');
       login.passwordField().type(`Test123456789!@`)
            .should('have.value', 'Test123456789!@')       
       login.loginButton().click();
       login.correctLoginContainer().should('be.visible').and('exist')
       
    
})
     it("Login with incorrect email and password",  function () {
               
     login.usernameField().type(randomEmail)
          .should('have.value', (randomEmail));
     login.passwordField().type(randomPassword)
          .should('have.value', (randomPassword))       
     login.loginButton().click();
     login.correctLoginContainer().should('be.visible').and('exist')
     
  
})

    it("Login with wrong email and exists password",  function () {
               
       login.usernameField().type(randomEmail)
            .should('have.value', (randomEmail));
       login.passwordField().type(`Test123456789!@`)
            .should('have.value', 'Test123456789!@')       
       login.loginButton().click();
       ///Error mesage when your username is incorrect
       cy.get("#post-8 > div.woocommerce > ul").should('be.visible')
       .contains('A user could not be found with this email address.')
               
})
    it("Login with exist username and wrong password",  function () {
               
       login.usernameField().type(`skleptestarmy17`)
            .should('have.value', 'skleptestarmy17');
       login.passwordField().type(randomPassword)
            .should('have.value', (randomPassword))       
       login.loginButton().click();
       //Error mesage when your password is incorrect
       cy.get("#post-8 > div.woocommerce > ul").should('be.visible')
       .contains(' The password you entered for the username ')
       cy.get("#post-8 > div.woocommerce > ul > li > a").should('be.visible')
       .contains("Lost your password?")
       
})
    it("Login with empty fields",  function () {
            
    login.usernameField()
         .should('not.have.value')
    login.passwordField()
         .should('not.have.value')       
    login.loginButton().click();
    //Error mesage when your dont input username
    cy.get("#post-8 > div.woocommerce > ul").should('be.visible').and('exist')
          .contains(' Username is required.')
    //Error should exist
    cy.get('#post-8 > div.woocommerce > ul > li > strong').should('exist').and('be.visible')
                           
     })
})
