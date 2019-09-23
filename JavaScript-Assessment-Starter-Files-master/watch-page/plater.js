console.log('quiz-app-loaded');

//watch-page-----------------------
$.get('https://5d76bf96515d1a0014085cf9.mockapi.io/playlist',function(data,status){

 console.log('playlist-details')
 console.log(data)
})
//vedio-details------------------
$.get('http://5d76bf96515d1a0014085cf9.mockapi.io/video',function(data2,status){
  console.log("vedio-details")
 console.log(data2)
 $('#card1').click(function(e){
  
  var desc1=document.getElementById('video-description')
  desc1.innerHTML=data2[0].description;
  var view1=document.getElementById('views-count')
  view1.innerHTML=data2[0].views;
  var video=document.getElementById('video-player')
  video.src="https://player.vimeo.com/video/"+data2[0].vimeoId;
  var title1=document.getElementById('video-title')
  title1.innerHTML=data[0].title;
  })
 $('#card2').click(function(e){
  
  var desc1=document.getElementById('video-description')
  desc1.innerHTML=data2[1].description;
  var view1=document.getElementById('views-count')
  view1.innerHTML=data2[1].views;
  var video=document.getElementById('video-player')
  video.src="https://player.vimeo.com/video/"+data2[1].vimeoId;
  var title1=document.getElementById('video-title')
  title1.innerHTML=data2[1].title;
  })
  $('#card3').click(function(e){
  
    var desc1=document.getElementById('video-description')
    desc1.innerHTML=data2[2].description;
    var view1=document.getElementById('views-count')
    view1.innerHTML=data2[2].views;
    var video=document.getElementById('video-player')
  video.src="https://player.vimeo.com/video/"+data2[2].vimeoId;
  var title1=document.getElementById('video-title')
  title1.innerHTML=data2[2].title;
    })
    $('#card4').click(function(e){
  
      var desc1=document.getElementById('video-description')
      desc1.innerHTML=data2[3].description;
      var view1=document.getElementById('views-count')
      view1.innerHTML=data2[3].views;
      var video=document.getElementById('video-player')
  video.src="https://player.vimeo.com/video/"+data2[3].vimeoId;
  var title1=document.getElementById('video-title')
  title1.innerHTML=data2[3].title;
      })
      $('#card5').click(function(e){
  
        var desc1=document.getElementById('video-description')
        desc1.innerHTML=data2[4].description;
        var view1=document.getElementById('views-count')
        view1.innerHTML=data2[4].views;
        var video=document.getElementById('video-player')
  video.src="https://player.vimeo.com/video/"+data2[4].vimeoId;
  var title1=document.getElementById('video-title')
  title1.innerHTML=data2[4].title;
        })
        $('#card6').click(function(e){
  
          var desc1=document.getElementById('video-description')
          desc1.innerHTML=data2[5].description;
          var view1=document.getElementById('views-count')
          view1.innerHTML=data2[5].views;
          var video=document.getElementById('video-player')
  video.src="https://player.vimeo.com/video/"+data2[5].vimeoId;
  var title1=document.getElementById('video-title')
  title1.innerHTML=data2[5].title;
          })
})
