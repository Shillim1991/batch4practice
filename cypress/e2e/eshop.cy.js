/// <reference types="cypress"/ >

import{eshop} from "..//fixtures/selectors.js"

describe("testing eshop", () =>{

  beforeEach( () => {
    cy.visit("https://9mobile.com.ng/")

  })

  
 // it("should be able login", () =>{
   // cy.get (eshop.eshopBttn).click()
   // cy.get(eshop.allDepartment).click()
   // cy.get(eshop.wirelessRouter).click()
   // cy.get(eshop.allDepartment).click()
   // cy.get(eshop.featurePhone).click()
    //cy.get(eshop.allDepartment).click()
    //cy.get(eshop.smartPhones).click()
   // cy.get(eshop.allDepartment).click()
   // cy.get(eshop.accessories).click()
    //cy.get(eshop.allDepartment).click()
   // cy.get(eshop.allDevices).click()
   // cy.get(eshop.allDepartment).click()
   // cy.get(eshop.shopPrice).click()
   // cy.get(eshop.allDepartment).click()
   // cy.get (eshop.popularDevices).click()
   // cy.get(eshop.allDepartment).click()
   // cy.get(eshop.buyairTime).click()
   // cy.get(eshop.backHome).click()
    
//it("should be able signup", () =>{
 // cy.get (eshop.eshopBtt).click()
  //cy.get(eshop.menuIcon).click()
 // cy.get(eshop.register).click()
 // cy.get(eshop.createAccnt).click()
 // cy.get(eshop.emailField).type('flyer@yopmail.com')
  //cy.get(eshop.passwordField).type("PassWord13456#")
  //cy.get(eshop.signupBttn).click()

  it("should be able login", () =>{
    cy.get (eshop.EshopBtt).click()
    cy.get(eshop.MenuIcon).click()
cy.get(eshop.LoginBttn).click()
  cy.get(eshop.emailField).type('flyer@yopmail.com')
  cy.get(eshop.passwordField).type("PassWord13456#")
  cy.get(eshop.rememberMe).click()
  cy.get(eshop.signingBttn).click()

 // }

 // )
 // cy.get(eshop.emailField).type('flyer@yopmail.com')
  //cy.get(eshop.passwordField).type("password134")
 // cy.get(eshop.rememberMe).click()


}

)

    




//  }

//  )
  
}

)