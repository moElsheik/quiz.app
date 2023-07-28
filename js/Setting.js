import { Quiz } from "./Quiz.js"

export class Setting{
    constructor(){
     this.categoryInput=document.getElementById("category")
     this.difficalty = document.getElementsByName("difficalty")
     this.questionNum=document.getElementById("numberOfQuestions")
     document.getElementById("startbtn").addEventListener("click", this.startQuiz.bind(this))
   
    }

     async startQuiz(){
        let categoryValue = this.categoryInput.value
        let difficaltyValue=Array.from(this.difficalty).filter(el => el.checked)[0].value
        let questionNumValue = this.questionNum.value

        let api = `https://opentdb.com/api.php?amount=${questionNumValue || 5}&category=${categoryValue}&difficulty=${difficaltyValue}`
      let questions = await this.fetchApi(api)
      if (questions.length > 0) {
        $("#setting").fadeOut(500, ()=> {
        $("#quiz").fadeIn(500)
        })
        let quiz = new Quiz(questions)
      }
     
    }

    async fetchApi(api){
        let response = await fetch(api)
        response = await response.json()
        return response.results
         
       
    }
}