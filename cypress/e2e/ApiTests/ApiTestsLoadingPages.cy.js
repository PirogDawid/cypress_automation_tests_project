const t1 = performance.now();
const PageLoadTime = ((t1) / 1000);

describe("Api test", function() {

    it("successful loading my account pages",  function () {
        
      expect(PageLoadTime).to.be.lessThan(2) // Page load time
      // Check status code 
      cy.request({
        url: 'https://skleptest.pl/my-account/',
        followRedirect: false,
      }).then(resp => {
        expect(resp.status).to.eq(200) 
    })
 })
    it("successful loading main page",  function () {
        
  cy.openMainPage();
  expect(PageLoadTime).to.be.lessThan(2) // Page load time
  // Check status code 
  cy.request({
      url: 'https://skleptest.pl',
      followRedirect: false,
    }).then(resp => {
      expect(resp.status).to.eq(200) 
  })
})
  it("successful loading cart page",  function () {
        
  cy.openMainPage();
  expect(PageLoadTime).to.be.lessThan(2) // Page load time
  // Check status code 
  cy.request({
      url: 'https://skleptest.pl/cart/',
      followRedirect: false,
    }).then(resp => {
      expect(resp.status).to.eq(200) 
  })
})
it("successful loading most-wanted page",  function () {
        
  cy.openMainPage();
  expect(PageLoadTime).to.be.lessThan(2) // Page load time
  // Check status code 
  cy.request({
      url: 'https://skleptest.pl/product-category/most-wanted/',
      followRedirect: false,
    }).then(resp => {
      expect(resp.status).to.eq(200) 
  })
})

it("successful loading contact us page",  function () {
        
  cy.openMainPage();
  expect(PageLoadTime).to.be.lessThan(2) // Page load time
  // Check status code 
  cy.request({
      url: 'https://skleptest.pl/test-contact-blablabla/',
      followRedirect: false,
    }).then(resp => {
      expect(resp.status).to.eq(200) 
  })
})

it("successful loading search page",  function () {
        
  cy.openMainPage();
  expect(PageLoadTime).to.be.lessThan(2) // Page load time
  // Check status code 
  cy.request({
      url: 'https://skleptest.pl/?s=',
      followRedirect: false,
    }).then(resp => {
      expect(resp.status).to.eq(200) 
  })
})
   
})

