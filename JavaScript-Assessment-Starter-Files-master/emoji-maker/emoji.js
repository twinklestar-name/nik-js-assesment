console.log('emoji-maker-loaded');

//emoji-maker---------------------

var emojiSkin=document.getElementById('skin');

var yellow = document.getElementById('yellow-skin');

var green = document.getElementById('green-skin');

var red = document.getElementById('red-skin');

yellow.addEventListener('click',function(e){
  emojiSkin.src=e.target.src;
  document.getElementById('select-skin-card').style.display='none';
  document.getElementById('select-eyes-card').style.display='block';
})
green.addEventListener('click',function(e){
  emojiSkin.src=e.target.src;
  document.getElementById('select-skin-card').style.display='none';
  document.getElementById('select-eyes-card').style.display='block';
})
red.addEventListener('click',function(e){
  emojiSkin.src=e.target.src;
  document.getElementById('select-skin-card').style.display='none';
  document.getElementById('select-eyes-card').style.display='block';
})

var emojiEyes=document.getElementById('eyes');

document.getElementById('eye-normal').addEventListener('click',function(e){
  emojiEyes.src=e.target.src;
  document.getElementById('select-eyes-card').style.display='none';
  document.getElementById('select-mouth-card').style.display='block';
})
document.getElementById('eye-closed').addEventListener('click',function(e){
  emojiEyes.src=e.target.src;
  document.getElementById('select-eyes-card').style.display='none';
  document.getElementById('select-mouth-card').style.display='block';
})
document.getElementById('eye-long').addEventListener('click',function(e){
  emojiEyes.src=e.target.src;
  document.getElementById('select-eyes-card').style.display='none';
  document.getElementById('select-mouth-card').style.display='block';
})
document.getElementById('eye-laughing').addEventListener('click',function(e){
  emojiEyes.src=e.target.src;
  document.getElementById('select-eyes-card').style.display='none';
  document.getElementById('select-mouth-card').style.display='block';
})
document.getElementById('eye-rolling').addEventListener('click',function(e){
  emojiEyes.src=e.target.src;
  document.getElementById('select-eyes-card').style.display='none';
  document.getElementById('select-mouth-card').style.display='block';
})
document.getElementById('eye-winking').addEventListener('click',function(e){
  emojiEyes.src=e.target.src;
  document.getElementById('select-eyes-card').style.display='none';
  document.getElementById('select-mouth-card').style.display='block';
})

var emojiMouth=document.getElementById('mouth');
document.getElementById('mouth-open').addEventListener('click',function(e){
  emojiMouth.src=e.target.src;
})
document.getElementById('mouth-smiling').addEventListener('click',function(e){
  emojiMouth.src=e.target.src;
})
document.getElementById('mouth-straight').addEventListener('click',function(e){
  emojiMouth.src=e.target.src;
})
document.getElementById('mouth-sad').addEventListener('click',function(e){
  emojiMouth.src=e.target.src;
})
document.getElementById('mouth-teeth').addEventListener('click',function(e){
  emojiMouth.src=e.target.src;
})

document.getElementById('show-skin-card').addEventListener('click',function(){
  document.getElementById('select-eyes-card').style.display='none';
  document.getElementById('select-skin-card').style.display='block';
})
$('.show-eyes-card').click(function(){
  document.getElementById('select-mouth-card').style.display='none';
  document.getElementById('select-skin-card').style.display='none';
  document.getElementById('select-eyes-card').style.display='block';
})
document.getElementById('show-mouth-card').addEventListener('click',function(){
  document.getElementById('select-eyes-card').style.display='none';
  document.getElementById('select-mouth-card').style.display='block';
})