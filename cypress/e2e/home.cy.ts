describe('home page', () => {

  beforeEach(()=>{
    cy.visit('')

  })
  it('hi elemnt contais correct text', () => {
    cy.get('h1').contains('Testing Next.js Applications with Cypress')
    cy.get('[data-test="hero-heading"]').contains('Testing Next.js Applications with Cypress')
    cy.getByData("hero-heading").contains('Testing Next.js Applications with Cypress')
  })

  it('page elements', () => {
    cy.get('dt').eq(0).contains(/4 courses/i)
    cy.get('dt').eq(1).contains('25+ Lessons')
    cy.get('dt').eq(2).contains('Free and Open Source')
  
  })

  
})