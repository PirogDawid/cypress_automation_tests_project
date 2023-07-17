
import Menu from "../support/MenuPageObjectModel.cy";
import Contact from "../support/ContactUsPageObjectModel.cy";
const menu =new Menu
const contact =new Contact




  describe('Visit Contac us page', function () {

    
//Correct redirection to the subpage
    it('Open contact page', function () {
      cy.openMainPage();
      menu.menuContact()
        .click();
    cy.url().should('include', 'https://skleptest.pl/test-contact-blablabla/')
    })
//Check if elements on subpage exist 
    it('Check elements on website', function () {
      cy.openContactUsPage();

      contact.nameField()
        .should('be.visible');
      contact.emailField()
        .should('be.visible');
      contact.subjectField()
        .should('be.visible');
      contact.messageField()
        .should('be.visible');
      contact.sendButton()
        .should('be.visible')
      contact.contactInformation()
        .should('be.visible')
        .and('contains.text', '696 678 987', '        GIVE US A CALL							')
      contact.locationInformaton()
        .should('be.visible')
        .and('include.text', 'Legnicka 12', '       OUR LOCATION							')
    })
 })