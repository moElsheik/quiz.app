export class Score{
    constructor(score,length){

        $("#scoreValue").html(`${score} of ${length}`)
        this.tryAgain()
    }

    tryAgain(){
        $('#tryAgain').click(()=>{
            $('#score').fadeOut(500,()=>{
                $('#setting').fadeIn(500)
            })
        })
    }
}