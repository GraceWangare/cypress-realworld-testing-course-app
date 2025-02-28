describe('first course', () => {

    beforeEach(()=>{
      cy.visit('')
  
    })
    it('user can complete first course', () => {
        cy.getByData('course-0').find("a").eq(3).click()
        cy.url().should("include", "/testing-your-first-application")
        cy.getByData("next-lesson-button").click()
        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").click()

        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").click()

        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").click()
        cy.getByData("hero-heading").should("exist")

       
       
     
    })
  
    it('user can complete second course', () => {
        cy.getByData('course-1').find("a").eq(3).click()
        cy.url().should("include", "/testing-foundations")

        cy.getByData("next-lesson-button").click()
        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").click()

        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").click()

        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").click()
        cy.getByData("hero-heading").should("exist")
       
    
    })

    it.only ("3rd course course- cypress fundamaentals",()=>{
        cy.getByData('course-2').find("a").eq(3).click()
        cy.url().should("include", "/cypress-fundamentals")

        cy.getByData("next-lesson-button").click()
        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").click()

        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").click()

        cy.getByData("challenge-answer-0").check()
        cy.getByData("next-lesson-button").click()
        cy.getByData("hero-heading").should("exist")
       
    
        
     })
  
    
  })