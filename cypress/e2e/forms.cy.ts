describe (' subszription form',()=>{
  beforeEach (()=>{
    cy.visit('')

    })


   it.only(' user can subscribe with valid email address',()=>{
    cy.getByData('email-input').type('gk@gmail.com')
    cy.getByData('submit-button').click()
    cy.getByData("success-message").contains("Success: ")
                                    
    
    })
    it(' user can not subscribe twice with same email address',()=>{
        cy.getByData('email-input').type(' john@example.com')
        cy.getByData('submit-button').click()
        cy.getByData('server-error-message').should("exist").contains("already exists")
        

        
       
        })

})