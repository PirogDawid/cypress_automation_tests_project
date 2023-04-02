import Login from "../support/LoginPageObjectModel.cy"
const login = new Login
const t1 = performance.now();
const PageLoadTime = ((t1) / 1000);


describe("Account Page",  function () {

    it("Login with correct login details",  function () {
        
        cy.openAccountPage();
        
        
       login.usernameField().type(`skleptestarmy17`)
            .should('have.value', 'skleptestarmy17');
       login.passwordField().type(`Test123456789!@`)
            .should('have.value', 'Test123456789!@')       
       login.loginButton().click();
       login.correctLoginContainer().should('be.visible').and('exist')
       
    
})

    it("Login with wrong username",  function () {
        
        cy.openAccountPage();
        
        
       login.usernameField().type(`skleptes`)
            .should('have.value', 'skleptes');
       login.passwordField().type(`Test123456789!@`)
            .should('have.value', 'Test123456789!@')       
       login.loginButton().click();
       ///Error mesage when your username is incorrect
       cy.get("#post-8 > div.woocommerce > ul").should('be.visible')
       .contains(' is not registered on this site. If you are unsure of your username, try your email address instead.')
       
      
       
               
        
})
    it("Login with wrong password",  function () {
        
        cy.openAccountPage();
        
        
       login.usernameField().type(`skleptestarmy17`)
            .should('have.value', 'skleptestarmy17');
       login.passwordField().type(`Test123`)
            .should('have.value', 'Test123')       
       login.loginButton().click();
       //Error mesage when your password is incorrect
       cy.get("#post-8 > div.woocommerce > ul").should('be.visible')
       .contains(' The password you entered for the username ')
       cy.get('#post-8 > div.woocommerce > ul > li > strong:nth-child(2)').should('be.visible')
            .and('have.text', 'skleptestarmy17', )
            
       
      
       
       
        
    })
    it.only("Login with empty fields",  function () {
        
     cy.openAccountPage();
     
     
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
    it("Loading page",  function () {
        
        cy.openAccountPage();
        expect(PageLoadTime).to.be.lessThan(2) // Page load time
        // Check status code 
        cy.request({
            url: 'https://skleptest.pl/my-account/',
            followRedirect: false,
          }).then(resp => {
            expect(resp.status).to.eq(200) 
        })
    })
