class Login {

usernameField(){
    return cy.get('[id="username"]');
}
passwordField(){
    return cy.get('[id="password"]')
}
regUsernameField(){
    return cy.get('[id="reg_email"]')
}
regPasswordField(){
    return cy.get('[id="reg_password"]')
}
loginButton(){
    return cy.get('#customer_login > div.u-column1.col-1 > form > p:nth-child(3) > input.woocommerce-Button.button')
}
registerButton(){
    return cy.get('#customer_login > div.u-column2.col-2 > form > p.woocommerce-FormRow.form-row > input.woocommerce-Button.button')
}
rememberMe(){
    return cy.get('[id="rememberme"]')
}
lostPassword(){
    return cy.get('[href="https://skleptest.pl/my-account/lost-password/"]')
}
correctLoginContainer(){
    return cy.get('#post-8 > div.woocommerce > div')
}
logOut(){
    return cy.get('.woocommerce-MyAccount-navigation-link--customer-logout > a')
}
confirmationLogOut(){
    return cy.get('#post-8 > div.woocommerce > div.woocommerce-MyAccount-content > p:nth-child(1) > a')
}
  
   
}
    
    export default Login
