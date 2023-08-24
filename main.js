
let btn1 = document.getElementById('start');
let btn2 = document.getElementById('stop');
let btn3 = document.getElementById('reset');  

// startボタンをクリック時のイベント 
btn1.addEventListener('click', function() {
start= new Date();
let timer=  setInterval(starttimer,100);
 //startボタンclick時のボタンの表示
  $('#start').prop('disabled',true);
  $('#stop').prop('disabled',false);
  $('#reset').prop('disabled',false);

// stopボタンをクリック時のイベント
btn2.addEventListener('click', function() {
  clearInterval(timer);
   //stopボタンclick時のボタンの表示
  $('#start').prop('disabled',false);
  $('#stop').prop('disabled',true);
  $('#reset').prop('disabled',false);
},); 

// resetボタンをクリック時のイベント
btn3.addEventListener('click', function() {
  document.getElementById('time').innerHTML=
  "0:0:0:0"
   //resetボタンclick時のボタンの表示
  $('#start').prop('disabled',false);
  $('#stop').prop('disabled',true);
  $('#reset').prop('disabled',true);
}, );
}, );

//タイマー計算 
  var starttimer= function (){
  var now = new Date(); 
  var millisecond= now.getTime() - start.getTime();
  var mill = Math.floor(millisecond/ 100);
  var seconds =  Math.floor(millisecond/ 1000);
  var minutes = Math.floor (seconds / 60);
  var hour = Math.floor (minutes / 60);
  mill= mill - seconds * 10;
  seconds= seconds -  minutes * 60;
  minutes= minutes -  hour * 60;
  document.getElementById('time').innerHTML=
  hour + ":" + minutes  +":" + seconds + ":" + mill;
}