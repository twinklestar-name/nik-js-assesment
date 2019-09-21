console.log('quiz-app-loaded');

//watch-page-----------------------
$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist',function(data,status){

 console.log('data-recieved')
 console.log(data)
 $('#card1').click(function(e){
   
  var card=document.getElementById('video-player')
      card.src=data[0].thumbnail;
      var title1=document.getElementById('video-title')
      title1.innerHTML=data[0].title;
  })
    $('#card2').click(function(e){
      document.getElementById('player');
      var card=document.getElementById('video-player')
      card.src=data[1].thumbnail;
      var title1=document.getElementById('video-title')
      title1.innerHTML=data[1].title;
      
          })
      $('#card3').click(function(e){
        
        var card=document.getElementById('video-player')
      card.src=data[2].thumbnail;
      var title1=document.getElementById('video-title')
      title1.innerHTML=data[2].title;
      })
        $('#card4').click(function(e){
          var card=document.getElementById('video-player')
      card.src=data[3].thumbnail;
      var title1=document.getElementById('video-title')
      title1.innerHTML=data[3].title;
          })
          $('#card5').click(function(e){
            var card=document.getElementById('video-player')
      card.src=data[4].thumbnail;
      var title1=document.getElementById('video-title')
      title1.innerHTML=data[4].title;
            })
            $('#card6').click(function(e){
              var card=document.getElementById('video-player')
      card.src=data[5].thumbnail;
      var title1=document.getElementById('video-title')
      title1.innerHTML=data[5].title;
              })
})
//vedio-details------------------
$.get('http://5d76bf96515d1a0014085cf9.mockapi.io/video',function(data2,status){
 console.log(data2)
 console.log('this api '+status)
 $('#card1').click(function(e){
  
  var desc1=document.getElementById('video-description')
  desc1.innerHTML=data2[0].description;
  var view1=document.getElementById('views-count')
  view1.innerHTML=data2[0].views;
  })
 $('#card2').click(function(e){
  
  var desc1=document.getElementById('video-description')
  desc1.innerHTML=data2[1].description;
  var view1=document.getElementById('views-count')
  view1.innerHTML=data2[1].views;
  })
  $('#card3').click(function(e){
  
    var desc1=document.getElementById('video-description')
    desc1.innerHTML=data2[2].description;
    var view1=document.getElementById('views-count')
    view1.innerHTML=data2[2].views;
    })
    $('#card4').click(function(e){
  
      var desc1=document.getElementById('video-description')
      desc1.innerHTML=data2[3].description;
      var view1=document.getElementById('views-count')
      view1.innerHTML=data2[3].views;
      })
      $('#card5').click(function(e){
  
        var desc1=document.getElementById('video-description')
        desc1.innerHTML=data2[4].description;
        var view1=document.getElementById('views-count')
        view1.innerHTML=data2[4].views;
        })
        $('#card6').click(function(e){
  
          var desc1=document.getElementById('video-description')
          desc1.innerHTML=data2[5].description;
          var view1=document.getElementById('views-count')
          view1.innerHTML=data2[5].views;
          })
})
