export class FirstCoursePage {


    startCourseButton = "course-0";
    startLessonButton = "next-lesson-button";
    unlockNextLessonCheckBox= "challenge-answer-0";
    nextLessonButton =  "next-lesson-button";



    getStartButton(){
       cy.get(this.startCourseButton)

    };

    getLessonButton(){
       cy.get(this.nextLessonButton)

    };

    getunlockNextLessonCheckBox(){
       cy.get(this.unlockNextLessonCheckBox)
    };



}

export default FirstCoursePage;
