class LoginFormPage {
    get usernameField() {
       return cy.get('#username')
    }

    get passwordField() {
       return cy.get('#password')
    }

    get submitBtn() {
        return cy.get(".woocommerce-form > :nth-child(3) > .woocommerce-Button")
    }
fillUserName(username) {
    this.usernameField.type(username)
    }

fillPassword(pwd) {
    this.passwordField.type(pwd)
}

clickOnSubmitBtn() {
    this.submitBtn.click();
}


}

export default new LoginFormPage();