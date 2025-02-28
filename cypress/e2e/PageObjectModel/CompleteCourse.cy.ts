import  FirstCoursePage from '../../Pages/FirstCourse';  

const firstCourse = new FirstCoursePage

describe ("Multiple pages",()=>{
    beforeEach (()=>{
      cy.visit("")
      
      })
  
     it ("first course-Testing Your First Next.js Application",()=>{

        firstCourse.getStartButton()
      
      })
      
  
      it ("2nd course- testing foundations",()=>{
        
      })
  
      it ("3rd course course- cypress fundamaentals",()=>{
        
          
       })
  })
  