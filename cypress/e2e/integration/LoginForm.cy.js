 describe('form submission', () => { 
   beforeEach(() => {
     cy.visit('http://localhost:3001')
   })

   it("should submit form", () => {
     cy.get("#name").type("test")
     cy.get('#email').type("test@test.com")
     cy.get('#password').type("test123")
     cy.get("#submit").click()
     cy.get('form').submit()

   })
  })