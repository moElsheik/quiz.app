import { Score } from "./Score.js"

export class Quiz {
    constructor(questions){
        this.questions =questions
       this.num =0
       this.score = 0
       this.displayQuistion()
       document.getElementById("submit").addEventListener("click",this.nextQuistion.bind(this))
       
    }

    displayQuistion(){
       let answersArray=[this.questions[this.num].correct_answer,...this.questions[this.num].incorrect_answers]
       this.shuffle(answersArray)
        let answersColum =''
        document.getElementById("quistion").innerHTML=this.questions[this.num].question
        answersArray.forEach( (element,i) => {
          let elementVal = element.replace(/[^a-zA-Z0-9$]/g, '');
        answersColum +=  `<div class="form-check">
        <input class="form-check-input" type="radio" name="answer" id=${elementVal} value=${elementVal}>
         <label class="form-check-label" for=${elementVal}>
       ${element}
        </label>
      </div>`
        }); 
        document.getElementById("answers").innerHTML=answersColum
        document.getElementById("qNum").innerHTML= `${this.num+1} of ${this.questions.length}  `



    }

      shuffle(array) {
        let currentIndex = array.length,  randomIndex;
      
       
        while (currentIndex != 0) {
      
         
          randomIndex = Math.floor(Math.random() * currentIndex);
          currentIndex--;
      
       
          [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
        }
      
        return array;
      }

    nextQuistion(){
        let userAnswer = Array.from(document.getElementsByName("answer")).filter(el => el.checked)[0]?.value
        // userAnswer=userAnswer[0].value
        let correctAnswer=this.questions[this.num].correct_answer.replace(/[^a-zA-Z0-9$]/g, '');

        if (userAnswer) {
          
          $("#message").fadeOut()
         this.checkAnswer(userAnswer,correctAnswer)
        this.num++

        
        

       
            if (this.questions.length > this.num ) {
               
                this.displayQuistion()
                
            }else{
                $("#quiz").fadeOut(1000 , ()=>{
                    $("#score").fadeIn(500)
                    let score = new Score(this.score,this.questions.length)

                })
            }
            
            
          }else{
            $("#message").fadeIn()
          }
   
    }

    checkAnswer(userAnswer,correctAnswer){

        
        if (userAnswer==correctAnswer) {

            this.score++
            $('#correct').fadeIn(1000).fadeOut(1000)
 
        }
        else{
            $('#wrong').fadeIn(1000).fadeOut(1000)
        }
        
        
    }



}