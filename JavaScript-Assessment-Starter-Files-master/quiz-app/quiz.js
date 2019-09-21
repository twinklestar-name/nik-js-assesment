console.log('quiz-app-loaded');

//quiz-app-----------------------
var answers=[];
var sum=0;
$.get('http://5d76bf96515d1a0014085cf9.mockapi.io/quiz',function(data,status){
 console.log(data)
 console.log(status)
 for(var i=0;i<data.length;i++)
 {
    answers.push(data[i].answer);
  }
  console.log(answers)
  window.localStorage.setItem('ans',answers)
})
var pattern=/=\d/g;
var pattern2=/\d/g;
var url=location.search
var answersEnteredByUser=url.match(pattern);
var correctAnswers=localStorage.getItem('ans').match(pattern2);
for(var i=0;i<answersEnteredByUser.length;i++)
{
    answersEnteredByUser[i]=answersEnteredByUser[i].split("=");
    // console.log(answersEnteredByUser[i][1]);
    if(answersEnteredByUser[i][1]==correctAnswers[i])
    {
        sum++;
    }
    
}
console.log("Score : "+sum);
if(answersEnteredByUser.length>0)
{
    $("#result-modal h3")[0].innerText=$("#result-modal h3")[0].innerText+score+"/5";
    $("#modal-wrapper").css("display","block");
}