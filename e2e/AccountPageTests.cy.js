import Login from "../support/LoginPageObjectModel.cy"
const login = new Login



describe("Account Page",  function () {

    it("Elements on site tets",  function () {
        
        //Open main account
        cy.openAccountPage();
        
        
       login.usernameField().should("be.visible").and("exist")
       login.passwordField().should("be.visible").and("exist")
       login.regUsernameField().should("be.visible").and("exist")
       login.regPasswordField().should("be.visible").and("exist")
       login.loginButton().should("be.visible").and("exist")
       login.registerButton().should("be.visible").and("exist")
       login.rememberMe().should("be.visible").and("exist")
       login.lostPassword().should("be.visible").and("exist")
       //Header "My account"
       cy.get("#post-8 > div.row > div > header > h1").should("be.visible").and("exist")
       //Header "Login"
       cy.get("#customer_login > div.u-column1.col-1 > h2").should("be.visible").and("exist")
       //Header "Register"
       cy.get("#customer_login > div.u-column2.col-2 > h2").should("be.visible").and("exist")
       //Label "Username or email adress"
       cy.get('[for="username"]').should("be.visible").and("exist")
       //Label "Password"
       cy.get('[for="password"]').should("be.visible").and("exist")
       //Label "E-mail register"
       cy.get('[for="reg_email"]').should("be.visible").and("exist")
       // Label "Password Register"
       cy.get('[for="reg_password"]').should("be.visible").and("exist")

               
        
    })
      
    
})
