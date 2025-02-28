describe ("Multiple pages",()=>{
  beforeEach (()=>{
    cy.visit("")
    
    })

   it ("first course-Testing Your First Next.js Application",()=>{
    cy.getByData('course-0').find("a").eq(3).click()
    cy.location("pathname").should("eq", "/testing-your-first-application")
    cy.url().should("include", "/testing-your-first-application")
    })
    

    it ("2nd course- testing foundations",()=>{
        cy.getByData('course-1').find("a").eq(3).click()
        cy.url().should("include", "/testing-foundations")
    })

    it ("3rd course course- cypress fundamaentals",()=>{
        cy.getByData('course-2').find("a").eq(3).click()
        cy.url().should("include", "/cypress-fundamentals")
        
     })
})