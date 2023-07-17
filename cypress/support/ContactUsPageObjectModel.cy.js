class Contact {

    

    nameField(){
        return cy.get('#wpcf7-f4-p10-o1 > form > p:nth-child(2) > label > span > input')
    }

    emailField(){
        return cy.get('#wpcf7-f4-p10-o1 > form > p:nth-child(3) > label > span > input')
    }

    subjectField(){
        return cy.get('#wpcf7-f4-p10-o1 > form > p:nth-child(4) > label > span > input')
    }

    messageField(){
        return cy.get('#wpcf7-f4-p10-o1 > form > p:nth-child(5) > label > span > textarea')
    }

    sendButton(){
        return cy.get('#wpcf7-f4-p10-o1 > form > p:nth-child(6) > input')
    }

    contactInformation(){
        return cy.get('#page > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(1)')
    }

    locationInformaton(){
        return cy.get('#page > div > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div > div:nth-child(2)')
    }

   



}

export default Contact