class Menu {

    menuShop(){
        return  cy.get('[id="menu-item-142"]')
    }
    menuMostWanted(){
        return  cy.get('[id="menu-item-128"]')
    }
    menuCategories(){
        return  cy.get('[id="menu-item-123"]')
    }
    menuAboutUs(){
        return  cy.get('[id="menu-item-118"]')
    }
    menuContact(){
        return  cy.get('[id="menu-item-108"]')
    }
    menuBlog(){
        return  cy.get('[id="menu-item-163"]')
    }
    



}

export default Menu