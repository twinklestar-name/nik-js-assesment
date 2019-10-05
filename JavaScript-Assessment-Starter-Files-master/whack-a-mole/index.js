console.log('game-js-uploaded')

var random1=parseInt((Math.random()+0.35)*3)
var random2=parseInt((Math.random()+0.35)*3)
var random3=parseInt((Math.random()+0.35)*3)
var random4=parseInt((Math.random()+0.17)*6)
var random5=parseInt((Math.random()+0.17)*6)
var random6=parseInt((Math.random()+0.17)*6)
if(random1==4||random2==4||random3==4)
{
  random1=3
  random2=1
  random3=2
}
if(random1==random2 || random1==random3 ||random2==random3)
{
  random1=2
  random2=1
  random3=3
}
if(random4==7||random5==7||random6==7)
{
  random4=6
  random5=4
  random6=5
}
if(random4==random5 || random5==random6 ||random6==random4)
{
  random4=5
  random5=4
  random6=6
}
console.log(random1)
console.log(random2)
console.log(random3)
console.log(random4)
console.log(random5)
console.log(random6)
var score;
start();
function start(){
score=0;
$('.score').html(score)
$('#clock').html('timer')
$('.StartButton').click(function(e){
   console.log('game-on')
   startGame();
   var ten=10;
   $('#clock').html(ten)
   var initialtime=$('#clock').html();
   
    var timer=setInterval(function(){
      initialtime=initialtime>0?initialtime-1:0;
      $('#clock').html(initialtime)
      if(initialtime<=0)
      {
         clearInterval(timer)
      }
     },1000)
     var scorecard=setInterval(function(){
      if(score<5)
      {
        console.log('game-loses')
        $('#losePopup').css('display','block')
        $('#losePopup').html(`Better Luck Next Time!<br> score: ${score}<br><button id='retryButton' class='PopupButton'>Retry</button>`)
        $('#retryButton').click(function(e){
          $('#losePopup').css('display','none')
          console.log('hi')
          start();
        })
      }
      else
      {
        console.log('game-win')
        $('#winPopup').css('display','block')
        $('#winPopup').html(`You Won!<br> score: ${score}<br><button id='playAgainButton' class='PopupButton'>Play Again</button>`)
        $('#playAgainButton').click(function(e){
          $('#winPopup').css('display','none')
          console.log('hi')
          PlayAgain();
        })
      }
      clearInterval(scorecard)
     },10000)

})
function startGame()
{
  $(`#${random1}`).css('top','0')
  $(`#${random1}`).click(function(e){
    $('.score').html(score++)
    console.log('random1:'+score)
  })
  $(`#${random2}`).click(function(e){
    $('.score').html(score++)
    console.log('random2:'+score)
  })
  $(`#${random3}`).click(function(e){
    $('.score').html(score++)
    console.log('random3:'+score)
  })
  var interval=setInterval(function(){
    $(`#${random1}`).css('top','100%')
    $(`#${random2}`).css('top','0')
    clearInterval(interval)
  },1000)
  var interval2=setInterval(function(){
    $(`#${random2}`).css('top','100%')
    $(`#${random3}`).css('top','0')
    clearInterval(interval2)
  },2000)
  var interval3=setInterval(function(){
    $(`#${random3}`).css('top','100%')
    $(`#${random2}`).css('top','0')
    clearInterval(interval3)
  },3000)
  var interval4=setInterval(function(){
    $(`#${random2}`).css('top','100%')
    $(`#${random1}`).css('top','0')
    clearInterval(interval4)
  },4000)
  var interval5=setInterval(function(){
    $(`#${random1}`).css('top','100%')
    $(`#${random2}`).css('top','0')
    clearInterval(interval5)
  },5000)
  var interval6=setInterval(function(){
    $(`#${random2}`).css('top','100%')
    $(`#${random3}`).css('top','0')
    clearInterval(interval6)
  },6000)
  var interval7=setInterval(function(){
    $(`#${random3}`).css('top','100%')
    $(`#${random2}`).css('top','0')
    clearInterval(interval7)
  },7000)
  var interval8=setInterval(function(){
    $(`#${random2}`).css('top','100%')
    $(`#${random1}`).css('top','0')
    clearInterval(interval8)
  },8000)
  var interval9=setInterval(function(){
    $(`#${random1}`).css('top','100%')
    $(`#${random2}`).css('top','0')
    clearInterval(interval9)
  },9000)
  var interval10=setInterval(function(){
    $(`#${random2}`).css('top','100%')
    clearInterval(interval10)
  },10000)
}
}
//
function PlayAgain(){
  score=0;
  $('.score').html(score)
  $('#clock').html('timer')
  $('.StartButton').click(function(e){
     console.log('game-on')
     startGameNextLevel();
     var ten=10;
     $('#clock').html(ten)
     var initialtime=$('#clock').html();
     
      var timer=setInterval(function(){
        initialtime=initialtime>0?initialtime-1:0;
        $('#clock').html(initialtime)
        if(initialtime<=0)
        {
           clearInterval(timer)
        }
       },1000)
       var scorecard=setInterval(function(){
        if(score<3)
        {
          console.log('game-loses')
          $('#losePopup').css('display','block')
          $('#losePopup').html(`Better Luck Next Time!<br> score: ${score}<br><button id='retryButton' class='PopupButton'>Retry</button>`)
          $('#retryButton').click(function(e){
            $('#losePopup').css('display','none')
            console.log('hi')
            PlayAgain();
          })
        }
        else
        {
          console.log('game-win')
          $('#winPopup').css('display','block')
          $('#winPopup').html(`You Won!<br> score: ${score}<br><button id='playAgainButton' class='PopupButton'>Play Again</button>`)
          $('#playAgainButton').click(function(e){
            $('#winPopup').css('display','none')
            console.log('hi')
            PlayAgain();
          })
        }
        clearInterval(scorecard)
       },10000)
  
  })
  function startGameNextLevel()
  {
    $(`#${random4}`).css('top','0')
    $(`#${random4}`).click(function(e){
      $('.score').html(score++)
      clearInterval(intervalA)
      clearInterval(intervalD)
      clearInterval(intervalH)
      console.log('random4:'+score)
    })
    $(`#${random5}`).click(function(e){
      $('.score').html(score++)
      clearInterval(intervalB)
      clearInterval(intervalE)
      clearInterval(intervalG)
      clearInterval(intervalI)
      console.log('random5:'+score)
    })
    $(`#${random6}`).click(function(e){
      $('.score').html(score++)
      clearInterval(intervalC)
      clearInterval(intervalF)
      clearInterval(intervalJ)
      console.log('random6:'+score)
    })
    var intervalA=setInterval(function(){
      $(`#${random4}`).css('top','100%')
      $(`#${random5}`).css('top','0')
      clearInterval(intervalA)
    },1000)
    var intervalB=setInterval(function(){
      $(`#${random5}`).css('top','100%')
      $(`#${random6}`).css('top','0')
      clearInterval(intervalB)
    },2000)
    var intervalC=setInterval(function(){
      $(`#${random6}`).css('top','100%')
      $(`#${random4}`).css('top','0')
      clearInterval(intervalC)
    },3000)
    var intervalD=setInterval(function(){
      $(`#${random4}`).css('top','100%')
      $(`#${random5}`).css('top','0')
      clearInterval(intervalD)
    },4000)
    var intervalE=setInterval(function(){
      $(`#${random5}`).css('top','100%')
      $(`#${random6}`).css('top','0')
      clearInterval(intervalE)
    },5000)
    var intervalF=setInterval(function(){
      $(`#${random6}`).css('top','100%')
      $(`#${random5}`).css('top','0')
      clearInterval(intervalF)
    },6000)
    var intervalG=setInterval(function(){
      $(`#${random5}`).css('top','100%')
      $(`#${random4}`).css('top','0')
      clearInterval(intervalG)
    },7000)
    var intervalH=setInterval(function(){
      $(`#${random4}`).css('top','100%')
      $(`#${random5}`).css('top','0')
      clearInterval(intervalH)
    },8000)
    var intervalI=setInterval(function(){
      $(`#${random5}`).css('top','100%')
      $(`#${random6}`).css('top','0')
      clearInterval(intervalI)
    },9000)
    var intervalJ=setInterval(function(){
      $(`#${random6}`).css('top','100%')
      clearInterval(intervalJ)
    },10000)
  }
  }
