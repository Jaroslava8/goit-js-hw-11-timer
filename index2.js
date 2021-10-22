// Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
// const targetDate = new Date('Jul 17, 2019');
// const dateToday = new Date();

// document.querySelectorAll('#timer-s').innerHTML = targetDate;

// let time = targetDate - dateToday;
// console.log(time);

// function addLeadingZero(d){
//   return (d<10)? '0' + d : d;
// }
// function CountdownTimer(t){
//   let d = addLeadingZero(t.getDay());
//   let day = days(t.getDay())
//   let h = addLeadingZero(t.getHours());
//   let m = addLeadingZero(t.getMinutes());
//   let s = addLeadingZero(t.getSeconds());

//   console.log(d, h, m, s)
// }
// //MANO PIRMAS SPRENDIMAS IR VEIKIANTIS

// // Set the date we're counting down to
// var countDownDate = new Date("Jul 17, 2022 ").getTime();

// // Update the count down every 1 second
// var x = setInterval(function() {

//   // Get today's date and time
//   var now = new Date().getTime();
    
//   // Find the distance between now and the count down date
//   var distance = countDownDate - now;
    
//   // Time calculations for days, hours, minutes and seconds
//   var days = Math.floor(distance / (1000 * 60 * 60 * 24));
//   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
//   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
//   var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
//   // Output the result in an element with id="demo"
//   document.getElementById("timer-1").innerHTML = 
//   days + " Days " + 
//   hours + " Hours " + 
//   minutes + " Minutes " + 
//   seconds + " Seconds ";
    
//   // If the count down is over, write some text 
//   if (distance < 0) {
//     clearInterval(x);
//     document.getElementById("timer-1").innerHTML = "EXPIRED";
//   }
// }, 1000);

// !-- Display the countdown timer in an element -->




var countDownDate = new Date("Jan 01 2022 00:00").getTime();

var x = setInterval(function() {
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"


  
  document.getElementById("timer-1").innerHTML = days + "days " + hours + "hours "
  + minutes + "minutes " + seconds + "seconds ";

  

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("timer-1").innerHTML = "NEW YEAR!!!";
  }
}, 1000);
